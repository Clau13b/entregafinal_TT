import React, { createContext, useEffect, useState, useContext } from "react";

import { 
    getProducts, 
    createProduct as createProductService, 
    updateProduct as updateProductService, 
    deleteProduct as deleteProductService 
} from "../services/productService"; 

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const fetchProducts = () => {
        setLoading(true); 
        setError(null);
        getProducts() 
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fallo de la API:", err);
                setError('Hubo un problema al cargar los productos.');
                setLoading(false); 
            });
    };

    useEffect(() => {
        fetchProducts(); 
    }, []); 

    
    const createProduct = async (newProductData) => {
        try {
            const product = await createProductService(newProductData);
            setProducts((prev) => [...prev, product]);
            return product;
        } catch (err) {
            setError("Error al crear el producto.");
            throw err;
        }
    };

    
    const updateProduct = async (id, updatedFields) => {
        try {
            const updatedProduct = await updateProductService(id, updatedFields);
            setProducts((prev) => 
                prev.map((p) => (p.id === id ? updatedProduct : p))
            );
            return updatedProduct;
        } catch (err) {
            setError("Error al actualizar el producto.");
            throw err;
        }
    };

    

    const deleteProduct = async (id) => {
        try {
            await deleteProductService(id);
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            setError("Error al eliminar el producto.");
            throw err;
        }
    };

    
    return (
        <ProductsContext.Provider 
            value={{ 
                products, 
                loading, 
                error,
                fetchProducts, 
                createProduct, 
                updateProduct, 
                deleteProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}


export const useProducts = () => {
    return useContext(ProductsContext);
};