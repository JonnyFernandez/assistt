import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    type: '',
    getAccessToken: () => { },
    saveUser: () => { },
    signOut: () => { },
    name: ''
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const saveUser = (userData) => {
        setAccessToken(userData.accessToken);
        setRefreshToken(userData.refreshToken);
        setType(userData.type);
        setName(userData.name)
        setIsAuthenticated(true);
        localStorage.setItem('userInfo', JSON.stringify(userData));
    }

    useEffect(() => {
        // Recupera la información del usuario del localStorage
        const storedUserInfo = localStorage.getItem('userInfo');
        console.log(storedUserInfo);
        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);
            setAccessToken(userInfo.accessToken);
            setRefreshToken(userInfo.refreshToken);
            setName(userInfo.name)
            setType(userInfo.type);
            setIsAuthenticated(true);
        }
    }, []); // Dependencia vacía ya que no necesitas que este useEffect se ejecute nuevamente

    const getAccessToken = () => {
        return accessToken;
    }

    const signOut = () => {
        setIsAuthenticated(false)
        setAccessToken('')
        setRefreshToken('')
        setType('')
        localStorage.removeItem("userInfo")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, getAccessToken, type, saveUser, signOut, name }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
