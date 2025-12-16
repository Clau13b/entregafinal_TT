

import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Carrito() {
const { carrito, vaciarCarrito } = useContext(CarritoContext);
return (

<div className='carrito-container'>

<h1>Carrito de Compras</h1>
{carrito.length === 0 ? (
    <p>El carrito esta vacio</p>):(
<>
<ul>

{carrito.map((producto, index) => (
<li key={index}>
    <h3>{producto.nombre}</h3>
   <p>${producto.precio}</p>
   </li>

))}
</ul>


<button onClick={vaciarCarrito} className='vaciar-carrito'>Vaciar Carrito</button>
</>
)
}
</div>
);
}
export default Carrito;