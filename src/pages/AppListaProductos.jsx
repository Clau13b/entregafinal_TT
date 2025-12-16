import React, { useContext } from "react";

import Producto from "./Producto"; 
import { CarritoContext } from "../context/CarritoContext";
import { useProducts } from "../context/ProductsContext"; 

function AppListaProductos() {
    
    const { products, loading, error } = useProducts();
    const { agregarAlCarrito } = useContext(CarritoContext); 
    
    
    const manejarAgregarAlCarrito = (producto) => {
        agregarAlCarrito(producto); 
    };

    if (loading) {
        return <h1 className="text-center my-5">Cargando productos de la tienda...</h1>;
    }

    if (error) {
        return <h1 className="text-center my-5 text-danger">Error al cargar productos: {error}</h1>;
    }

    return (
        
        <div className="container mt-4">
            
            <h1 className="text-center mb-4">Tienda Online</h1>
            
            
            <div className="p-3 mb-4 rounded shadow-sm"> 
                
                <h2 className="text-center mb-4">Productos Disponibles</h2>
                
                
                <div className="row g-4"> 
                    
                    {products.map((producto) => (
                        
                        
                        <div key={producto.id} className="col-12 col-md-6 col-lg-3">
                            <Producto 
                                producto={producto} 
                                onAddToCart={manejarAgregarAlCarrito} 
                            />
                        </div>
                    ))}
                    
                </div> 
                
            </div> 
            
        </div> 
        
    );
}
export default AppListaProductos;