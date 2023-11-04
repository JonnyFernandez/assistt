import { useState } from 'react';
import t from './EditProfile.module.css';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions';
import Validation from './Validations';
import axios from 'axios';

const EditProfile = () => {
    const dispatch = useDispatch();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';

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
    };


    return (
        <div className={t.form}>
            <div className={t.formContainer}>

                <form onSubmit={handleSubmit} className={t.form1}>

                    <div className={t.divs} > <h2>Ingresar Datos / Editar Datos</h2> </div>


                    <div className={t.divs}>
                        <label>Imagen </label>
                        <input className={`${t.inputs} ${t.inputs_file}`} type="file"
                            name="image"

                            value={inputs.image}
                            onChange={handleChange}
                            placeholder='Ingresar imagen (Opcional)'
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
                        <button className={t.submit} type='submit'>Agregar</button>
                    </div>


                </form>

            </div>


        </div>

    )
}
export default EditProfile


