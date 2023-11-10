import { useEffect, useState } from 'react';
import t from './EditProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addInfo, getUser1 } from '../../../redux/actions';
import Validation from './Validations';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const dispatch = useDispatch();
    const Profile = useSelector(state => state.profile)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';

    const [edit, setEdit] = useState(false);
    const [showProfile, setShowProfile] = useState(true);
    const [profileUpdated, setProfileUpdated] = useState(false); // Nuevo estado local para indicar si el perfil se ha actualizado
    // console.log(profileUpdated);
    useEffect(() => {
        // Se obtiene la información del perfil cuando se carga el componente y cuando profileUpdated cambia a true
        dispatch(getUser1(id));
    }, [dispatch, id, profileUpdated]);


    const [inputs, setInputs] = useState({
        company: '',
        address: '',
        phone: '',
        image: '', // Guarda la URL de la imagen, no el objeto de archivo
    });

    const [errors, setErrors] = useState({
        company: '',
        address: '',
        phone: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
        setErrors(Validation({ ...inputs, [name]: value }));
    };

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'assistt_file'); // Cambiado el nombre del preset aquí

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dkx6y2e2z/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setInputs({ ...inputs, image: response.data.secure_url });
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
            // Trata el error aquí (muestra un mensaje de error, etc.)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputs.company || !inputs.address || !inputs.phone || !inputs.image) {
            return alert('Por favor, completa todos los campos y sube una imagen.');
        }

        dispatch(addInfo(id, inputs));
        setInputs({
            company: '',
            address: '',
            phone: '',
            image: '',
        });
        setErrors({
            company: '',
            address: '',
            phone: '',
        });
        setProfileUpdated(true);
    };
    const toggleProfile = () => {
        setEdit(false)
        setShowProfile(true)
    }
    const toggleEdit = () => {
        setEdit(true)
        setShowProfile(false)
    }
    function handleSingOut() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Tu sesión actual se cerrará!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                auth.signOut()
                Swal.fire('¡Sesión cerrada!', 'Tu sesión ha sido cerrada correctamente.', 'success');
            }
        });
    }

    return (
        <div className={t.form}>
            <div className={t.header}> <div className={t.divs} > <h2>Perfil de usuario</h2> </div></div>
            <div className={t.body}>
                {edit && <div className={t.formContainer}>
                    {/* -----------------------Editar........................---------------------------------------------- */}
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
                }

                {
                    showProfile && <div className={t.bodyLeftBody}>
                        {/* -----------------------Perfil........................---------------------------------------------- */}
                        <div className={t.bodyLeftHeader}>
                            <img src={!Profile.image ? "https://cdn-icons-png.flaticon.com/512/666/666201.png" : Profile.image} alt="image" />

                        </div>

                        <div className={t.divInfo}>
                            <label htmlFor="">User: </label>
                            <small> {Profile?.name}</small>
                        </div>

                        <div className={t.divInfo}>
                            <label htmlFor="">Email: </label>
                            <small> {Profile?.email}</small>
                        </div>
                        <div className={t.divInfo}>
                            <label htmlFor="">Direccion: </label>
                            <small>{Profile?.address}</small>
                        </div>
                        <div className={t.divInfo}>
                            <label htmlFor="">Tel: </label>
                            <small> {Profile?.phone}</small>
                        </div>
                        <div className={t.divInfo}>
                            <label htmlFor="">Empresa: </label>
                            <small> {Profile?.company}</small>
                        </div>

                    </div>
                }
            </div>
            <div className={t.footer}>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary" onClick={toggleProfile}>Perfil</button>
                    <button type="button" class="btn btn-outline-primary" onClick={toggleEdit}>Editar</button>
                    <button type="button" class="btn btn-outline-primary" onClick={handleSingOut}>Salir</button>
                </div>
            </div>

        </div>

    )
}
export default EditProfile


