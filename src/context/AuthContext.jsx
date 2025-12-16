import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    
const [user, setUser] = useState(() => {
const storedUser = localStorage.getItem("user");
 
    if (storedUser) {
        try {
            
            return JSON.parse(storedUser);
        } catch (error) {
            
            console.error("Error al parsear el usuario del localStorage. Dato corrupto eliminado.", storedUser, error);
            localStorage.removeItem("user"); 
            return null; 
        }
    }
    
    
    return null;
});

const login = (username) => {
const userData = { name: username };
 localStorage.setItem("user", JSON.stringify(userData));
setUser(userData);
 };

const logout = () => {
 localStorage.removeItem("user");
 setUser(null);
 };

 return (
 <AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
 );
}

export const useAuth = () => useContext(AuthContext);