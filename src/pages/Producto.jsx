import React from 'react';

// Asegúrate de que las propiedades del producto se llamen correctamente (name, price, imageUrl)
// Usaremos 'nombre' y 'precio' como en tu código, pero incluiremos 'imageUrl' si existe.
function Producto({ producto, onAddToCart }) {
    
    // Desestructuramos las propiedades del producto
    const { id, nombre, precio, imageUrl } = producto; 
    
    return (
        // 1. Contenedor principal de la tarjeta: Clase 'card' de Bootstrap.
        // 'h-100' asegura que todas las tarjetas en la fila tengan la misma altura.
        <div className="card h-100 shadow-sm"> 
            
            {/* 2. Renderizado de la Imagen (si existe) */}
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    className="card-img-top" // Clase para colocar la imagen en la parte superior
                    alt={nombre} 
                    // Estilo inline para asegurar un tamaño consistente
                    style={{ height: '200px', objectFit: 'cover' }} 
                />
            )}
            
            {/* 3. Cuerpo de la tarjeta */}
            {/* 'd-flex flex-column' usa Flexbox para apilar los elementos verticalmente */}
            <div className="card-body d-flex flex-column"> 
                
                {/* Título del producto */}
                <h5 className="card-title text-truncate">{nombre}</h5>
                
                {/* Precio, empujado hacia abajo usando mt-auto */}
                <p className="mt-auto fs-4 fw-bold text-success">${precio}</p> 
                
                {/* Botón de acción */}
                <button 
                    className="btn btn-success mt-2" // 'mt-2' añade un pequeño margen superior al botón
                    onClick={() => onAddToCart(producto)}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

export default Producto;