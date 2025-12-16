import { createContext, useState,useContext } from "react";

export const CarritoContext = createContext();


export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito)=>[...prevCarrito, producto]);
    };
    const vaciarCarrito = () => {
    setCarrito([]);
    };
    return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito,
    vaciarCarrito }}>
    {children}
    </CarritoContext.Provider>
    );
    }