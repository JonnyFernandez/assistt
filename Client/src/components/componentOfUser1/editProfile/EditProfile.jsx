import { useState } from 'react'
import t from './EditProfile.module.css'
import { useDispatch } from 'react-redux'
import { addInfo } from '../../../redux/actions'

const EditProfile = () => {
    const dispatch = useDispatch()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';

    const [inputs, setInputs] = useState({
        company: '',
        address: '',
        phone: ''
    })
    console.log(inputs.company);
    console.log(inputs.address);
    console.log(inputs.phone);

    const handleChange = (event) => {
        let property = event.target.name;
        let value = event.target.value
        setInputs({ ...inputs, [property]: value })
    }
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

    }






    return (
        <div className={t.form}>
            <div className={t.formContainer}>
                <div className={t.formLeft}></div>
                <div className={t.formRight}></div>
            </div>






            {/* <div className={t.formContainer} >

                <form onSubmit={handleSubmit} className={t.form}>
                    <h2>Ingresar Informacion</h2> <br />


                    <input type="text" name='company' onChange={handleChange} value={inputs.company} placeholder='Introducir Empresa' /><br />


                    <input type="text" name='address' onChange={handleChange} value={inputs.address} placeholder='Introducir Direccion' /><br />


                    <input type="text" name='phone' onChange={handleChange} value={inputs.phone} placeholder='Introducir Telefono' /><br />
                    <br />
                    <button type='submit'>Agregar</button>
                </form>
            </div> */}

        </div>

    )
}

export default EditProfile