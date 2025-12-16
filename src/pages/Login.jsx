import React, { useState } from "react";

import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  
  
  const { login } = useAuth(); 
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (usuario === 'adminloco' && password === '1234$') {
      
      login(usuario); 
      
      navigate('/admin'); 
    } else {
      alert('Credenciales incorrectas');
      setPassword('');
    }
  };

  
  return (
    
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh', 
      paddingTop: '60px' 
    }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          padding: '30px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          maxWidth: '400px', 
          width: '90%',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{textAlign: 'center', marginBottom: '25px'}}>Iniciar sesión</h2>

        <div style={{ marginBottom: '15px' }}>
          <label style={{display: 'block', marginBottom: '5px'}}>Usuario:</label>
          <input
            type="text"
            placeholder="adminloco"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{display: 'block', marginBottom: '5px'}}>Contraseña:</label>
          <input
            type="password" 
            placeholder="1234$"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
        </div>

        <button 
          type="submit" 
          style={{
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}