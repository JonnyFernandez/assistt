//esta sera un compoente que usara useContex
//este componente validara constantemente si el user esta validado
import { useContext, createContext, useState } from "react";

// Creamos nuestro contexto
const AuthContext = createContext({
    isAuthenticated: false
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

// Necesito un hook que me permita acceder a las funciones de mi useContext
// Con esto tengo acceso en cualquier componente a las propiedades de useContext
export const useAuth = () => useContext(AuthContext);
