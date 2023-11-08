import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authAll/auth/AuthProvider";
import Swal from 'sweetalert2';
import style from '../login/Login.module.css';
import Nav from "../../components/nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

const Login = () => {
    const navigate = useNavigate();
    const apiURL = 'http://localhost:3001/api/login';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPwd, setShowPwd] = useState(false);

    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(apiURL, { email, password });
            const aux = res.data;
            const userType = aux.body.type;

            const userTypeToRoute = {
                client: '/user1',
                supplier: '/user2',
                admin: '/user3',
                banned: '/login',
            };

            if (userTypeToRoute.hasOwnProperty(userType)) {
                const userInfo = {
                    id: aux.body.id,
                    type: aux.body.type,
                    name: aux.body.name,
                    email: aux.body.email,
                    accessToken: aux.accessToken,
                    refreshToken: aux.refreshToken,
                };

                auth.saveUser(userInfo);
                navigate(userTypeToRoute[userType]);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error de Logueo",
                    text: "Tipo de Usuario inválido",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al procesar la solicitud",
            });
        }
    }

    const toggleShowPassword = () => {
        setShowPwd(!showPwd);
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            const userType = auth.type;
            const userTypeToRoute = {
                client: '/user1',
                banned: '/login',
                admin: '/user3',
                supplier: '/user2',
            };
            if (userTypeToRoute.hasOwnProperty(userType)) {
                const userRoute = userTypeToRoute[userType];
                navigate(userRoute);
            } else {
                console.error(`Tipo de usuario desconocido: ${userType}`);
            }
        }
    }, [auth.isAuthenticated, auth.type]);

    return (
        <div>
            <Nav />
            <div className={style.formcontainer}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <div>
                        <NavLink to={'/signup'}>Registarte</NavLink>
                    </div>
                    <p className={style.title}>Login</p>
                    <p className={style.message}>Ingresá a tu cuenta</p>
                    <div className={style.flex}>
                        <label htmlFor="usercode">
                            <input className={style.input} type="text" id="usercode" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>Email</span>
                        </label>
                    </div>
                    <label htmlFor="password">
                        <input className={style.input} type={showPwd ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span>Contraseña</span>
                        <button type="button" onClick={toggleShowPassword} className={style.eyeButton}>
                            <FontAwesomeIcon icon={showPwd ? faEye : faEyeSlash} />
                        </button>
                    </label>
                    <button className={style.loginButton}>Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
