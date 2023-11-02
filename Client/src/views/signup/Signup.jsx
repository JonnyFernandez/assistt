import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import style from '../signup/Signup.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    const apiURL = 'http://localhost:3001/api/signup';

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [entity, setEntity] = useState("Hospital");
    const [type, setType] = useState("admin");
    const [showPwd, setShowPwd] = useState(false);
    const [showPwds, setShowPwds] = useState(false);
    const [image, setImage] = useState(null);

    const cloud_name = 'dhyqgl7ie';
    const upload_preset = 'a2i0wk5f'; 
    const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

    const handleImageUpload = async (event) => {
        try {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file); // Asegúrate de adjuntar el archivo con la clave 'file'
            formData.append('upload_preset', upload_preset);
    
            const response = await axios.post(URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            setImage(response.data.secure_url);
            console.log('Imagen subida:', response.data.secure_url);
        } catch (error) {
            console.error('Error al subir la imagen:', error);
        }
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { name, email, password, type };
            console.log('Datos del usuario:', userData); 

            if (image !== null) {
                userData.image = image;
              }
    
            const res = await axios.post(apiURL, userData);
    
            if (res.status === 201) {
                localStorage.setItem('userInfo', JSON.stringify({ name, image, email, type }));
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario Creado Exitosamente',
                    text: 'Usuario registrado con éxito.'
                });
            }
        } catch (error) {
            if (error.response === 'Este correo electrónico ya está registrado') {
                Swal.fire({
                    icon: 'error',
                    title: 'Correo Electrónico ya Existe',
                    text: 'Por favor, inicia sesión en lugar de registrarte.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el registro',
                    text: 'Ha ocurrido un error durante el registro. Inténtalo nuevamente más tarde.',
                });
            }
            console.error('Error:', error);
        }
    };
    

    const renderEntitySelect = () => {
        if (type === 'client') {
            return (
                <div className={style.selectContainer}>
                    <label htmlFor="entity">
                        <p className={style.message}>Seleccionar Entidad:</p>
                        <select className={style.select} id="entity" value={entity} onChange={(e) => setEntity(e.target.value)}>
                            <option value="Hospital">Hospital</option>
                            <option value="Sanatorio">Sanatorio</option>
                            <option value="Laboratorio">Laboratorio</option>
                            <option value="Obra Social">Obra Social</option>
                        </select>
                    </label>
                </div>
            );
        }
    };

    const toggleShowPassword = (field) => {
        if (field === "password") {
            setShowPwd(!showPwd);
        } else if (field === "confirmPassword") {
            setShowPwds(!showPwds);
        }
    };
    

    return (
        <div>
            <Nav />
            <div className={style.formcontainer}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <p className={style.title}>Regístrate</p>
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
                                type={showPwd ? "text" : "password"}
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
                                type={showPwds ? "text" : "password"}
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
                        <select className={style.select} id="typeUser" onChange={(e) => setType(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="client">Cliente</option>
                            <option value="supplier">Proveedor</option>
                        </select>
                    </label>

                    {renderEntitySelect()}

                    <label htmlFor="image" className={style.imageLabel}>
                        <p className={style.message}>Imagen de perfil: (opcional)</p>
                        <div className={style.imagePreview}>
                            {image ? (
                                <img src={image} alt="Imagen de perfil" className={style.roundedImage} />
                            ) : (
                                <FontAwesomeIcon icon={faUserCircle} size="5x" color="#888" />
                            )}
                        </div>
                        <input type="file" accept="image/*" id="image" onChange={handleImageUpload} className={style.inputImage} />
                    </label>

                    <div className={style.buttonContainer}>
                        <button className={style.submit} type="submit">Registrarse</button>
                        <Link className={style.submit} to={'/'}>Login</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;




