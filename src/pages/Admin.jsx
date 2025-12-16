import React from 'react';
import FormularioProducto from '../components/FormularioProducto'; 
import { useProducts } from '../context/ProductsContext'; 

function Admin() {
    
    const { products, createProduct, deleteProduct, loading, error } = useProducts(); 

    
    const handleAddProduct = async (productoData) => {
        try {
            await createProduct(productoData); 
            alert('Producto agregado correctamente!');
        } catch (error) {
            console.error("Fallo al agregar:", error);
            alert('Hubo un problema al agregar el producto.');
        }
    };

   
    const handleDeleteProduct = async (id, nombre) => {
        if (window.confirm(`¿Estás seguro de ELIMINAR PERMANENTEMENTE el producto: ${nombre} de la Mock API?`)) {
            try {
            
                await deleteProduct(id); 
                alert(`Producto '${nombre}' eliminado de tu inventario.`);
            } catch (error) {
                console.error("Fallo al eliminar:", error);
                alert('Hubo un problema al eliminar el producto.');
            }
        }
    };
    

    
    if (loading) {
        return <h1 className='text-center my-5'>Cargando inventario para el Administrador...</h1>;
    }
    if (error) {
        return <h1 className='text-center my-5 text-danger'>Error al cargar el inventario: {error}</h1>;
    }

    return (
        <div>
            <h1 className='fs-2 text-center mb-4'>Gestión de Productos</h1>
            
            
            <FormularioProducto onAgregar={handleAddProduct} />

            <hr className="my-5" />

            
            <h2 className='fs-3 text-center mb-3'>Inventario Actual ({products.length} productos)</h2>
            
            <div className="table-responsive">
                <table className="table table-striped table-hover mx-auto w-75">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nombre}</td>
                                <td>${product.precio}</td>
                                <td>{product.descripcion}</td>
                                <td>
                                
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteProduct(product.id, product.nombre)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;