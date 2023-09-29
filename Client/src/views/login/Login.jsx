import { useState } from "react";
import axios from "axios";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../authAll/auth/AuthProvider";
import Swal from 'sweetalert2';
import style from '../login/Login.module.css'
import Nav from "../../components/nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

const Login = () => {

    const goTo = useNavigate()

    const apiURL = 'http://localhost:3001/login'

    const [usercode, setUsercode] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, SetConfirmPassword] = useState("")
    const [showPwd, setShowPwd] = useState(false);
    const [showPwds, setShowPwds] = useState(false);

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
                Swal.fire({
                    icon: "error",
                    title: "Error de Logueo",
                    text: "Codigo de Usuario invalido",
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

    const toggleShowPassword = (field) => {
        if (field === "password") {
          setShowPwd(!showPwd);
        } else if (field === "confirmPassword") {
          setShowPwds(!showPwds);
        }
      };

    //si el user ya esta autenticalo, lo hago pasar directamente
    if (auth.isAuthenticated) {
        return <Navigate to={'/user1'} />
    }


    return (
        <div>
        <Nav />
        <div className={style.formcontainer}>

        <form className={style.form} onSubmit={handleSubmit} >

            <div>
                <NavLink to={'/signup'}>Signup</NavLink>
            </div> 
            {/* ESTE BOTON ES TEMPORAL, 
            SOLO ANITA VA PODER REGISTRAR! */}
        
            <p className={style.title} >Login</p>
            <p className={style.message}>Ingresá a tu cuenta</p>


            <div className={style.flex}>
            <label htmlFor="usercode">
            <input className={style.input} type="text" id="usercode" value={usercode} onChange={(e) => setUsercode(e.target.value)} />
                <span>Código de Usuario</span>
            </label>
            </div>

            <label htmlFor="password">
            <input
                className={style.input}
                type={showPwd ? "text" : "password"} // Usa showPwd aquí
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <span>Contraseña</span>
            <button
                type="button"
                onClick={() => toggleShowPassword("password")}
                className={style.eyeButton}
            >
                <FontAwesomeIcon icon={showPwd ? faEye : faEyeSlash} />
            </button>
        </label>

            <label htmlFor="confirmPassword">
            <input
                className={style.input}
                type={showPwds ? "text" : "password"} // Usa showPwds aquí
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => SetConfirmPassword(e.target.value)}
            />
            <span>Confirmar Contraseña</span>
            <button
                type="button"
                onClick={() => toggleShowPassword("confirmPassword")}
                className={style.eyeButton}
            >
                <FontAwesomeIcon icon={showPwds ? faEye : faEyeSlash} />
            </button>
            </label>
            
          
            <button className={style.loginButton}>Login</button>
                </form>
            </div>
            <div>
        <Footer />
      </div>
        </div>
    )
}

export default Login;