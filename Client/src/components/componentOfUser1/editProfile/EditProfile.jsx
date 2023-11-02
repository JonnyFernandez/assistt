import { useState } from 'react'
import t from './EditProfile.module.css'
import { useDispatch } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import Validation from './Validations'
import axios from 'axios'
import cloudinary from 'cloudinary-core';


const EditProfile = () => {
    const dispatch = useDispatch()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';

    const [inputs, setInputs] = useState({
        company: '',
        address: '',
        phone: '',
        image: ''
    })

    console.log(inputs.image);


    const [errors, setErrors] = useState({
        company: '',
        address: '',
        phone: ''
    })



    const handleChange = (event) => {
        let property = event.target.name;
        let value = event.target.value
        setInputs({ ...inputs, [property]: value })

        setErrors(
            Validation({
                ...inputs,
                [event.target.name]: event.target.value,
            })
        )

    }

    // -------------------------------------------------------------------------



    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     setInputs({ ...inputs, image: file });
    // };

    // -------------------------------------------------------------------------




    }

    // -----------------CODIGO CLOUDINARY--------------------------------------------------------


    const cloud_name = "dkx6y2e2z";
    const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    const CLOUDINARI_PRESET = 'assistt_file'


    function handleUploadImage(event) {
        const file = event.target.files[0];

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARI_PRESET);

        axios.post(URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((response) => {
                setInputs({ ...inputs, image: response.data.secure_url });
            })
            .catch((err) => alert(err));
    }


    // -------------------------------------------------------------------------



    const handleSubmit = (event) => {
        event.preventDefault()
        if (!inputs.company && !inputs.address && !inputs.phone) {
            return alert('ingesar informacion')
        }


        dispatch(addInfo(id, inputs))
        setInputs({
            company: '',
            address: '',
            phone: '',
            image: ''

        });
        setErrors({
            company: '',
            address: '',
            phone: '',
        })


    return (
        <div className={t.form}>
            <div className={t.formContainer}>

                <form onSubmit={handleSubmit} className={t.form1}>

                    <div className={t.divs} > <h2>Ingresar Datos / Editar Datos</h2> </div>


                    <div className={t.divs}>
                        <label>Imagen </label>
                        <input className={`${t.inputs} ${t.inputs_file}`} type="text"
                            name="image"
                            value={inputs.image}
                            onChange={handleChange}

                            placeholder='Ingresar imagen (Opcional)'
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


