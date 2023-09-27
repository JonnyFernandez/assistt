import { useState } from "react";
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../authAll/auth/AuthProvider";


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const auth = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/login", {
                username,
                password,
            });

            // Manejar la respuesta del servidor, como redirigir al usuario o mostrar un mensaje de éxito.

        } catch (error) {
            console.error(error);
            // Manejar errores, como mostrar un mensaje de error al usuario.
        }
    };

    //si el user ya esta autenticalo, lo hago pasar directamente
    if (auth.isAuthenticated) {
        return <Navigate to={'/user1'} />
    }


    return (

        <form className="form" onSubmit={handleSubmit} >
            <div>
                <NavLink to={'/signup'}>Signup</NavLink>
            </div>
            <h1>Login</h1> <hr />
            <label htmlFor="">Usercode</label> <br />
            <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} /> <br />

            <label htmlFor="">Password</label> <br />
            <input type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button>Login</button>
        </form>

    )
}

export default Login;