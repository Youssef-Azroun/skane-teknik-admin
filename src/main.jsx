import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AddAndDeletePage from './AddAndDeletePage'
import './firebase-config.js'
import { AuthProvider, useAuth } from './AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route 
            path="/add-delete" 
            element={
              <ProtectedRoute>
                <AddAndDeletePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </HashRouter>
    </AuthProvider>
  </StrictMode>,
)
