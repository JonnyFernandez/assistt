import { useState } from "react";
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../authAll/auth/AuthProvider";


const Login = () => {

    const goTo = useNavigate()

    const apiURL = 'http://localhost:3001/login'

    const [usercode, setUsercode] = useState("")
    const [password, setPassword] = useState("")

    const auth = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(apiURL, { usercode, password });

            const aux = res.data;
            const usercodePrefix = aux.info.usercode[0];

            const usercodeToRoute = {
                H: '/user1',
                R: '/user2',
                A: '/user3',
                P: '/user4',
            };

            if (usercodeToRoute.hasOwnProperty(usercodePrefix)) {
                goTo(usercodeToRoute[usercodePrefix]);
            } else {
                console.log('Prefijo de usercode no válido');
            }
        } catch (error) {
            console.log('Error al procesar la solicitud:', error);
        }
    }


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
            <input type="text" value={usercode}
                onChange={(e) => setUsercode(e.target.value)} /> <br />

            <label htmlFor="">Password</label> <br />
            <input type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button>Login</button>
        </form>

    )
}

export default Login;