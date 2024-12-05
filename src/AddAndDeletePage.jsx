import React, { useState, useEffect } from 'react';
import './AddAndDeletePage.css';
import { collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, ref as storageRef, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase-config';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
//Test
function AddAndDeletePage() {
  const [productName, setProductName] = useState('');
  const [productTag, setProductTag] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProductImage(e.target.files[0]);
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
    }
  };
  //Hey

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // First, upload the image to Firebase Storage
      const imageRef = ref(storage, `products/${productImage.name + '_' + Date.now()}`);
      const uploadResult = await uploadBytes(imageRef, productImage);
      const imageUrl = await getDownloadURL(uploadResult.ref);

      // Then, save the product data to Firestore
      const productData = {
        name: productName,
        tag: productTag,
        price: Number(productPrice),
        description: productDescription,
        imageUrl: imageUrl,
        createdAt: new Date()
      };

      // Add to Firestore
      await addDoc(collection(db, "Products"), productData);

      // Reset form
      setProductName('');
      setProductTag('');
      setProductPrice('');
      setProductDescription('');
      setProductImage(null);
      setImagePreview(null);

      // Reset file input
      const fileInput = document.getElementById('image');
      if (fileInput) {
        fileInput.value = '';
      }

      alert('Produkt har lagts till framgångsrikt!');
    } catch (error) {
      console.error("Error adding product: ", error);
      alert('Ett fel uppstod när produkten skulle läggas till.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const isFormValid = () => {
    return (
      productName.trim() !== '' &&
      productTag !== '' &&
      productPrice !== '' &&
      productDescription.trim() !== '' &&
      productImage !== null
    );
  };

  useEffect(() => {
    const productsCollection = collection(db, "Products");
    const unsubscribe = onSnapshot(productsCollection, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
      setIsInitialLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const ProductList = ({ products, setProducts, selectedCategory, setSelectedCategory }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const categories = [
      { id: 'all', label: 'Alla Produkter' },
      { id: 'surfplata', label: 'Surfplatta' },
      { id: 'mobil telefoner', label: 'Mobil Telefoner' },
      { id: 'mobil tillbehör', label: 'Mobil Tillbehör' },
      { id: 'smart klocka', label: 'Smart Klocka' },
      { id: 'övrig', label: 'Övrig' }
    ];

    const filteredProducts = products.filter(product => {
      if (selectedCategory === 'all') return true;
      return product.tag === selectedCategory;
    });

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <div className="products-container">
        <div className="products-header">
          <div className="category-dropdown">
            <button 
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {categories.find(cat => cat.id === selectedCategory)?.label}
              <span className="dropdown-arrow">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`dropdown-item ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="products-grid">
          {currentProducts.map((product) => (
            <div key={product.id} 
                 className="product-item"
                 onClick={() => setSelectedProduct(product)}>
              <ImageWithLoading 
                src={product.imageUrl} 
                alt={product.name} 
                className="product-item-image" 
              />
              <div className="product-item-details">
                <h3>{product.name}</h3>
                <p className="product-item-price">{product.price} kr</p>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Föregående
            </button>
            <span className="page-info">
              Sida {currentPage} av {totalPages}
            </span>
            <button 
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Nästa
            </button>
          </div>
        )}
      </div>
    );
  };

  const ProductModal = ({ product, onClose, onDelete }) => {
    if (!product) return null;
    
    const handleClose = (e) => {
      e.stopPropagation();
      onClose();
    };
    
    useEffect(() => {
      document.body.classList.add('modal-open');
      return () => {
        document.body.classList.remove('modal-open');
      };
    }, []);
    
    return (
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={handleClose}>&times;</button>
          <div className="modal-image-container">
            <img src={product.imageUrl} alt={product.name} className="modal-image" />
          </div>
          <div className="modal-details">
            <h3>{product.name}</h3>
            <p className="modal-tag">{product.tag}</p>
            <p className="modal-price">{product.price} kr</p>
            <p className="modal-description">{product.description}</p>
            <div className="modal-actions">
              <button className="modal-button cancel" onClick={handleClose}>Avbryt</button>
              <button className="modal-button delete" onClick={() => onDelete(product)}>Ta bort</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleDeleteProduct = async (product) => {
    if (window.confirm('Är du säker på att du vill ta bort denna produkt?')) {
      try {
        // Delete from Firestore
        await deleteDoc(doc(db, "Products", product.id));
        
        // Delete from Storage
        const imageRef = storageRef(storage, product.imageUrl);
        await deleteObject(imageRef);
        
        setSelectedProduct(null);
        
        // Update products list without page reload
        const productsCollection = collection(db, "Products");
        const querySnapshot = await getDocs(productsCollection);
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error deleting product: ", error);
        alert('Ett fel uppstod när produkten skulle tas bort.');
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const ImageWithLoading = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <>
        {!isLoaded && <div className="skeleton" />}
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      </>
    );
  };

  return (
    <div className={`container ${isLoading || isInitialLoading ? 'loading' : ''}`}>
      <button onClick={handleLogout} className="logout-button">
        Logga ut
      </button>
      <div className="product-card">
        <h2>Lägg till ny produkt</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="image" className="file-input-label">
              <svg className="upload-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15h2V6h3l-4-4-4 4h3v9zm-5 4h12v-2H6v2zm0-4h3v-2H6v2zm12 0h3v-2h-3v2zm0-4h3V9h-3v2zm0-4h3V5h-3v2z"/>
              </svg>
              Ladda upp produkt bild
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
                style={{ display: 'none' }}
                required
              />
            </label>
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Product preview" />
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Produktnamn"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="product-input"
              required
            />
          </div>
          <div className="form-group">
            <select
              value={productTag}
              onChange={(e) => setProductTag(e.target.value)}
              className="product-input"
              required
            >
              <option value="">Välj en kategori</option>
              <option value="mobil telefoner">Mobil Telefoner</option>
              <option value="mobil tillbehör">Mobil Tillbehör</option>
              <option value="surfplata">Surfplatta</option>
              <option value="smart klocka">Smart Klocka</option>
              <option value="övrig">Övrig</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Produktbeskrivning"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="product-input product-textarea"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Produktpris"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="product-input"
              required
            />
          </div>
          <button type="submit" className="submit-button" disabled={!isFormValid()}>
            Lägg till produkt
          </button>
        </form>
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <p className="loading-text">Laddar upp produkt...</p>
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
            </div>
          </div>
        </div>
      )}
      <ProductList 
        products={products} 
        setProducts={setProducts}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onDelete={handleDeleteProduct}
        />
      )}
    </div>
  );
}

export default AddAndDeletePage;
