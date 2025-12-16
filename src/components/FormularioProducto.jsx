import React, { useState } from 'react';

function FormularioProducto({ onAgregar }) {
    
    
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
    });
    const [errores, setErrores] = useState({}); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

        
        if (errores[name]) {
            setErrores({ ...errores, [name]: null });
        }
    };

   
    const validarFormulario = () => {
        const nuevosErrores = {};
        
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        
        const precioNumero = parseFloat(producto.precio);
        if (isNaN(precioNumero) || precioNumero <= 0) {
            nuevosErrores.precio = 'El precio debe ser un número mayor a 0.';
        }
        
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
        }
        
        setErrores(nuevosErrores); 
        
        return Object.keys(nuevosErrores).length === 0;
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        if (validarFormulario()) {
            onAgregar(producto);
            
            
            setProducto({ nombre: '', precio: '', descripcion: '' });
            setErrores({});
            
            alert('Producto agregado correctamente (Validado).'); 
        } else {
          
            console.log("Formulario no válido. Errores mostrados.");
        }
    };

    return (
        <form  className="p-2 border rounded shadow  mx-auto bg-secondary bg-gradient   w-50"     onSubmit={handleSubmit}>
            <h2 className="mb-4  text-center    fs-4"   >Agregar Producto</h2>
            
          
            <div>
                <label className="form-label"   >Nombre:</label>
                <input className="form-control"
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                    required
                />
              
                {errores.nombre && <p style={{ color: 'red', fontSize: '0.8em' }}>{errores.nombre}</p>}
            </div>
            
          
            <div>
                <label className="form-label">Precio:</label>
                <input className="form-control"
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                    required
                    min="0"
                />
                {errores.precio && <p style={{ color: 'red', fontSize: '0.8em' }}>{errores.precio}</p>}
            </div>
            
            
            <div>
                <label className="form-label " >Descripción:</label>
                <textarea className="form-control mb-4 "
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    required
                />
                {errores.descripcion && <p style={{ color: 'red', fontSize: '0.8em' }}>{errores.descripcion}</p>}
            </div>
            
            <button className="btn btn-primary w-100"   type="submit">Agregar Producto</button>
        </form>
    );
}
export default FormularioProducto;