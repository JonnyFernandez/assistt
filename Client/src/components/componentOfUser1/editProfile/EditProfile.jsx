import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions';
import t from './EditProfile.module.css';

const EditProfile = () => {
    const dispatch = useDispatch();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';

    const [inputs, setInputs] = useState({
        company: '',
        address: '',
        phone: '',
    });

    const [profileImage, setProfileImage] = useState(null); // Estado para la imagen del perfil

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputs.company && !inputs.address && !inputs.phone) {
            return alert('Ingrese la información solicitada');
        }

        const formData = new FormData();
        formData.append('id', id);
        formData.append('company', inputs.company);
        formData.append('address', inputs.address);
        formData.append('phone', inputs.phone);
        formData.append('image', profileImage);

        try {
            await dispatch(addInfo(formData)); // Envia el formData a la acción addInfo

            // Actualizar el estado local tras el envío exitoso
            setInputs({
                company: '',
                address: '',
                phone: '',
            });
            setProfileImage(null);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            // Aquí podrías manejar errores o mostrar un mensaje de error al usuario
        }
    };

    return (
        <div>
            <h2 className={t.titulo}>Editar datos de tu Perfil</h2>
            <div className={t.form}>
                <div className={t.formContainer}>
                    <div className={t.formLeft}>
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className={t.profileImage} />
                        ) : (
                            <div className={t.defaultProfileImage}>Imagen predeterminada</div>
                        )}
                        <input type="file" onChange={handleImageChange} accept="image/*" />
                    </div>
                    <div className={t.formRight}>
                        <form onSubmit={handleSubmit} className={t.form1}>
                            <div className={t.divs}>
                                <h2>Ingresar Datos / Editar Datos</h2>
                            </div>
                            <div className={t.divs}>
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleChange}
                                    value={inputs.company}
                                    placeholder="Ingresar Empresa"
                                    className={`${t.inputs} ${t.inputs_file}`}
                                />
                            </div>
                            <div className={t.divs}>
                                <input
                                    type="text"
                                    name="address"
                                    onChange={handleChange}
                                    value={inputs.address}
                                    placeholder="Ingresar Domicilio Fiscal"
                                    className={`${t.inputs} ${t.inputs_file}`}
                                />
                            </div>
                            <div className={t.divs}>
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    value={inputs.phone}
                                    placeholder="Ingresar Telefono"
                                    className={`${t.inputs} ${t.inputs_file}`}
                                />
                            </div>
                            <div className={t.divSubmit}>
                                <button type="submit" className={t.submit}>Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;



