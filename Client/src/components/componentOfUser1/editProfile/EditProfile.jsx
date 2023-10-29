import { useState } from 'react'
import t from './EditProfile.module.css'
import { useDispatch } from 'react-redux'
import { addInfo } from '../../../redux/actions'
import Validation from './Validations'
import axios from 'axios'

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

    const [errors, setErrors] = useState({
        company: '',
        address: '',
        phone: ''
    })

    // console.log(inputs.company);
    // console.log(inputs.address);
    // console.log(inputs.phone);

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
    const preset_key = "szmwmrsq";
    const cloud_name = "dvu3hvpzu";
    const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

    const handlerUploadImage = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);
        axios.post(URL, formData)
            .then((response) => {
                setInputs({ ...inputs, image: response.data.secure_url });
            })
            .catch((err) => alert(err));
    }
    // -------------------------------------------------------------------------
    //    importart cloudinary en client y terminar de configurar




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

        });
        setErrors({
            company: '',
            address: '',
            phone: '',
        })

    }

    return (
        <div className={t.form}>
            <div className={t.formContainer}>

                <form onSubmit={handleSubmit} className={t.form1}>

                    <div className={t.divs} > <h2>Ingresar Datos / Editar Datos</h2> </div>

                    <div className={t.divs}>
                        <label>Imagen </label>
                        <input className={`${t.inputs} ${t.inputs_file}`} type="file"
                            name="image"
                            onChange={handlerUploadImage}
                            autoComplete="off" />

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









