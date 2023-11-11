import { useEffect, useState } from 'react';
import t from './EditProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addInfo, getUser1 } from '../../../redux/actions';
import Validation from './Validations';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../../../authAll/auth/AuthProvider';

const EditProfile = () => {
    const auth = useAuth()
    const dispatch = useDispatch();
    const Profile = useSelector(state => state.profile);
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    const id = userInfo.id || '';

    const [edit, setEdit] = useState(false);
    const [showProfile, setShowProfile] = useState(true);
    const [profileUpdated, setProfileUpdated] = useState(false)

    const [inputs, setInputs] = useState({ company: '', address: '', phone: '', image: '' });
    const [errors, setErrors] = useState({ company: '', address: '', phone: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
        setErrors(Validation({ ...inputs, [name]: value }));
    };

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'assistt_file');

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dkx6y2e2z/image/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setInputs({ ...inputs, image: response.data.secure_url });
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
            // Mostrar un mensaje de error al usuario
            alert('Error al cargar la imagen. Inténtalo de nuevo.');
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(inputs).some(value => !value)) {
            return alert('Por favor, completa todos los campos y sube una imagen.');
        }

        await dispatch(addInfo(id, inputs));

        // Esperar a que la acción termine antes de obtener la información actualizada
        await dispatch(getUser1(id));

        setInputs({ company: '', address: '', phone: '', image: '' });
        setErrors({ company: '', address: '', phone: '' });
        setProfileUpdated(true);
    };


    const toggleProfile = () => {
        setEdit(false);
        setShowProfile(true);
    };

    const toggleEdit = () => {
        setEdit(true);
        setShowProfile(false);
    };

    const handleSignOut = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Tu sesión actual se cerrará!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Asegúrate de importar 'auth' correctamente
                auth.signOut();
                Swal.fire('¡Sesión cerrada!', 'Tu sesión ha sido cerrada correctamente.', 'success');
            }
        });
    };

    useEffect(() => {
        dispatch(getUser1(id));
    }, [dispatch, id]);

    return (
        <div className={t.form}>
            <div className={t.body}>
                {edit &&
                    <div className={t.formContainer}>
                        <div className={t.editHeaher}>
                            <div className={t.titleEdit} >
                                <h2>Editar Perfil</h2>
                            </div>


                        </div>
                        <div className={t.editBody}>
                            <form onSubmit={handleSubmit} className={t.form1}>
                                <div className={t.divs}>
                                    <label>Imagen </label>
                                    <input className={`${t.inputs} ${t.inputs_file}`} type="file"
                                        name="image"
                                        onChange={handleUploadImage}
                                    />
                                </div>
                                <div className={t.divs}>
                                    <label htmlFor="">Empresa *</label>
                                    <input className={`${t.inputs} ${t.inputs_file}`}
                                        type="text" name='company' onChange={handleChange} value={inputs.company} placeholder='Ingresar Empresa' />
                                    <p className={t.error}>{errors.company}</p>
                                </div>
                                <div className={t.divs}>
                                    <label htmlFor="">Dirección *</label>
                                    <input className={`${t.inputs} ${t.inputs_file}`} type="text" name='address' onChange={handleChange} value={inputs.address} placeholder='Ingresar Domicilio Fiscal' />
                                    <p className={t.error}>{errors.address}</p>
                                </div>
                                <div className={t.divs}>
                                    <label htmlFor="">Telefono *</label>
                                    <input className={`${t.inputs} ${t.inputs_file}`} type="text" name='phone' onChange={handleChange} value={inputs.phone} placeholder='Ingresar Telefono' />
                                    <p className={t.error}>{errors.phone}</p>
                                </div>
                                <div className={t.divSubmit}>
                                    <button className={t.btnVerde} type='submit'>Agregar</button>
                                </div>
                            </form>
                        </div>




                    </div>
                }

                {

                    showProfile && <div className={t.bodyProfile}>
                        {/* -----------------------Perfil........................---------------------------------------------- */}
                        <div className={t.header}> <div className={t.divs} > <h2>Perfil de usuario</h2> </div></div>
                        <div className={t.bodyContainer}>

                            <div className={t.imageProfile}>
                                <div className={t.image}>
                                    <img src={!Profile.image ? "https://cdn-icons-png.flaticon.com/512/666/666201.png" : Profile.image} alt="image" />
                                </div>
                            </div>



                            <div className={t.infoProfile}>
                                <div className={t.divInfo}>
                                    <label htmlFor="">| User: </label>
                                    {Profile?.name}
                                </div>

                                <div className={t.divInfo}>
                                    <label htmlFor="">| Email: </label>
                                    {Profile?.email}
                                </div>
                                <div className={t.divInfo}>
                                    <label htmlFor="">| Direccion: </label>
                                    {Profile?.address}
                                </div>
                                <div className={t.divInfo}>
                                    <label htmlFor="">| Tel: </label>
                                    {Profile?.phone}
                                </div>
                                <div className={t.divInfo}>
                                    <label htmlFor="">| Empresa: </label>
                                    {Profile?.company}
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
            <div className={t.footer}>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    {/* perfil */}
                    <button type="button" className="btn btn-outline-primary" onClick={toggleProfile}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </button>
                    {/* editar */}
                    <button type="button" className="btn btn-outline-primary" onClick={toggleEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </button>
                    {/* salir */}
                    <button type="button" className="btn btn-outline-primary" onClick={handleSignOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>

    )
}
export default EditProfile


