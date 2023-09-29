import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    usercode: '',
    getAccessToken: () => { },

});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [usercode, setUsercode] = useState("");




    useEffect(() => {
        // Recupera la información del usuario del localStorage
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);
            setAccessToken(userInfo.accessToken);
            setRefreshToken(userInfo.refreshToken);
            setUsercode(userInfo.usercode)
            setIsAuthenticated(true);

        }
    }, []);



    const getAccessToken = () => {
        return accessToken;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, getAccessToken, usercode }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
