import React from 'react';
import FormularioProducto from '../components/FormularioProducto'; 
import { useProducts } from '../context/ProductsContext'; 

function Admin() {
      
      const { createProduct } = useProducts();
  
      
      const handleAddProduct = async (productoData) => {
          try {
              await createProduct(productoData); 
              alert('Producto agregado correctamente!');
          } catch (error) {
              console.error("Fallo al agregar:", error);
              alert('Hubo un problema al agregar el producto.');
          }
      };
  
      return (
          <div>
              <h1 className='fs-2 text-center mb-4 '  >Gestión de Productos</h1>
              
              <FormularioProducto onAgregar={handleAddProduct} />
              
              
          </div>
      );
  }
  export default Admin;
  



