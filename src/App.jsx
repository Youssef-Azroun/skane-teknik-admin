import './App.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function App() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("User logged in:", userCredential.user);
      login();
      navigate('/add-delete');
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert('Inloggningen misslyckades. Kontrollera dina uppgifter.');
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="admin-title">SKÅNE TEKNIK ADMIN SIDA</h1>
        <div className="card">
          <h2>Logga in</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="E-postadress"
                className="login-input"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Lösenord"
                className="login-input"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Logga In
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
