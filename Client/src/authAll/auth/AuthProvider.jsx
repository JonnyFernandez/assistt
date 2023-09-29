//esta sera un compoente que usara useContex
//este componente validara constantemente si el user esta validado
import { useContext, createContext, useState } from "react";

// Creamos nuestro contexto
const AuthContext = createContext({
    isAuthenticated: false,
    getAccessToken: () => ''
});


export const userData = (prop) => {
    let res = {
        id: prop.info.id,
        usercode: prop.info.usercode,
        name: prop.info.name,
        accessToken: prop.info.accessToken,
        refreshToken: prop.info.refreshToken
    }
    return res
}




const user = userData()

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")

    const getAccessToken = () => {
        return accessToken
    }


    // const saveUser = (user) => {
    //     setAccessToken()
    // }



    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

// Necesito un hook que me permita acceder a las funciones de mi useContext
// Con esto tengo acceso en cualquier componente a las propiedades de useContext
export const useAuth = () => useContext(AuthContext);
