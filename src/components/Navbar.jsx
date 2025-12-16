import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";



function Navbar() {
    
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    
    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <nav className='navbar   navbar-togle'>
            <ul>
                
                <li><Link to="/">Inicio</Link></li> 
                <li><Link to="/productos">Productos</Link></li>
                
            
                {user ? (
                    
                    <>
                        
                        <li className="start-right"><Link to="/carrito"><h2 className="navbar-cart">Carrito</h2></Link></li>
                        
                        
                        <li><Link to="/admin">Admin</Link></li>
                        
                        
                        <li>
                            
                            <button 
                                onClick={handleLogout}
                                
                                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0 15px' }}
                            >
                                Cerrar Sesión ({user.name})
                            </button>
                        </li>
                    </>
                ) : (
                    
                    <>
                        
                        
                        
                        <li className="start-right"><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;