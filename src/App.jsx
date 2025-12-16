

import { Routes, Route } from 'react-router-dom';
import AppListaProductos from './pages/AppListaProductos';
import ProductoDetalle from './components/ProductoDetalle';
import Carrito from './pages/Carrito';
import Admin from './pages/Admin';
import RutaProtegida from './components/RutaProtegida';
import Layout from './components/layout/Layout';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import { useAuth, AuthProvider } from './context/AuthContext'; 

import { ProductsProvider } from './context/ProductsContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



function AppContent() {
const { user } = useAuth(); 
const isAuthenticated = !!user;

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} /> 
          
          <Route path="/productos" element={<AppListaProductos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />

          <Route
            path="/carrito"
            element={
              <RutaProtegida>
                <Carrito />
              </RutaProtegida>
            }
          />
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <Admin />
              </RutaProtegida>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}



export default function App() {
    return (
        
        <AuthProvider>
            <ProductsProvider> 
                <AppContent />
            </ProductsProvider>
        </AuthProvider>
    );
}