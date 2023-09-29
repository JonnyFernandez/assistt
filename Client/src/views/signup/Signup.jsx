import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import style from '../signup/Signup.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Signup = () => {
    const apiURLs = {
        user1: 'http://localhost:3001/api/signup1',
        user2: 'http://localhost:3001/api/signup2',
        user3: 'http://localhost:3001/api/signup3',
        user4: 'http://localhost:3001/api/signup4',
    };

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, SetConfirmPassword] = useState("")
    const [entity, setEntity] = useState("Hospital") // Establece un valor predeterminado
    const [userNumber, setUserNumber] = useState(1) // Número de usuario, comienza con 1
    const [showPwd, setShowPwd] = useState(false);
    const [showPwds, setShowPwds] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value
        setEntity(value)
    }

    const handleUserNumberChange = (e) => {
        const value = parseInt(e.target.value, 10)
        setUserNumber(value)
    }

    const toggleShowPassword = (field) => {
        if (field === "password") {
            setShowPwd(!showPwd);
        } else if (field === "confirmPassword") {
            setShowPwds(!showPwds);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const apiURL = apiURLs[`user${userNumber}`]
            const res = await axios.post(apiURL, { name, email, password, entity })
            console.log(res.data);

            if (!res.ok) {
                // Muestra una notificación de éxito con el usercode de la respuesta del servidor
                const usercode = res.data; // Accede al usercode en el primer elemento del array
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario Creado Exitosamente',
                    text: `${usercode}`,
                });
            } else {
                // Muestra una notificación de error
                Swal.fire({
                    icon: 'error',
                    title: 'Algo Salió Mal',
                    text: `No se pudo crear el usuario. Respuesta del servidor: ${res.data}`,
                });
            }
        } catch (error) {
            // Muestra una notificación de error en caso de error de red u otro error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.',
            });
            console.log(error);
        }
    }

    const generateUserNumberOptions = () => {
        const userTypes = ["Cliente", "Revisor", "Admin.", "Proveedor"];
        const options = userTypes.map((userType, index) => (
            <option key={index} value={index + 1}>{userType}</option>
        ));
        return options;
    }

    // Renderiza el campo de selección de entidad solo para el primer usuario
    const renderEntitySelect = () => {
        if (userNumber === 1) {
            return (
                <div className={style.selectContainer}>
                    <label htmlFor="entity">
                        <p className={style.message}>Seleccionar Entidad:</p>
                        <select className={style.select} id="entity" onChange={handleChange}>
                            <option value="Hospital">Hospital</option>
                            <option value="Sanatorio">Sanatorio</option>
                            <option value="Laboratorio">Laboratorio</option>
                            <option value="Obra Social">Obra Social</option>
                        </select><br />
                    </label>
                </div>
            );
        }
    }

    return (
        <div>
            <Nav />
            <div className={style.formcontainer}>
                <form className={style.form} onSubmit={handleSubmit} >
                    <p className={style.title} >Regístrate</p>
                    <p className={style.message}>Crea una cuenta nueva</p>

                    <div className={style.flex}>
                        <label htmlFor="name">
                            <input className={style.input} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <span>Nombre</span>
                        </label>

                        <label htmlFor="email">
                            <input className={style.input} type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>Email</span>
                        </label>
                    </div>


                    <div className={style.flex}>
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
                    </div>

                    <label htmlFor="typeUser">
                        <p className={style.message}>Tipo de Usuario:</p>
                        <select className={style.select} id="typeUser"
                            onChange={handleUserNumberChange}>
                            {generateUserNumberOptions()}
                        </select>
                    </label>


                    {/* Renderiza el campo de selección de entidad solo para el primer usuario */}
                    {renderEntitySelect()}
                    <div className={style.buttonContainer}>
                        <button className={style.submit} type="submit">Registrarse</button>
                        <Link className={style.submit} to={'/'}>Login</Link>
                    </div>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Signup;