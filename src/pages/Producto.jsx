import React from 'react';

function Producto({ producto, onAddToCart }) {
    
    
    const { id, nombre, precio, imageUrl } = producto; 
    
    return (
        
        <div className="card h-100 shadow-sm"> 
            
        
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    className="card-img-top" 
                    alt={nombre} 
                    
                    style={{ height: '200px', objectFit: 'cover' }} 
                />
            )}
            
            
            <div className="card-body d-flex flex-column"> 
                
                
                <h5 className="card-title text-truncate">{nombre}</h5>
                
                
                <p className="mt-auto fs-4 fw-bold text-success">${precio}</p> 
                
                
                <button 
                    className="btn btn-success mt-2" 
                    onClick={() => onAddToCart(producto)}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

export default Producto;