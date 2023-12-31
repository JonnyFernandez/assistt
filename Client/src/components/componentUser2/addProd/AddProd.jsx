import { useEffect, useState } from 'react'
import r from './AddProd.module.css'
import Validation from '../ValidateProd/Validation'
import axios from 'axios'
import { createProd } from '../../../redux/actions'
import { codeToProd } from '../../../utils/codes'
import Swal from 'sweetalert2';


const AddProd = () => {



    const [inputs, setInputs] = useState({ code: '', image: '', name: '', description: '', supplie_type: '', stock: '', price: '' })
    const [errors, setErrors] = useState({ image: '', name: '', description: '', supplie_type: '', stock: '', price: '' })


    useEffect(() => {
        setInputs({ ...inputs, code: codeToProd(inputs.supplie_type) })
    }, [inputs.supplie_type])


    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'assistt_file');
    
        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dkx6y2e2z/image/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            
            // Actualiza el estado 'image' con la URL de la imagen procesada
            setInputs({ ...inputs, image: response.data.secure_url });
    
            // Limpia el input de carga de imagen
            event.target.value = '';
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
            // Muestra un mensaje de error al usuario
            alert('Error al cargar la imagen. Inténtalo de nuevo.');
        }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
        setErrors(Validation({ ...inputs, [name]: value }));
    };

    const handleSelect = (event) => {
        let value = event.target.value
        setInputs({ ...inputs, supplie_type: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(inputs).some(value => !value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos y sube una imagen.',
            });
            return;
        }

        createProd(inputs);

        setInputs({ image: '', name: '', description: '', supplie_type: '', stock: '', price: '' });
        setErrors({ image: '', name: '', description: '', supplie_type: '', stock: '', price: '' });

        
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Producto agregado exitosamente.',
        });
    };


    return (

        <div className={r.addProd}>
            <div className={r.header}>
                <h4 className={r.title}>Agregar Productos</h4>
            </div>
            <div className={r.body}>
                <div className={r.bodyLeft}>
                    <div>
                        {
                            inputs.image
                                ? (<div><img src={inputs.image} alt="image" /></div>)
                                : (<div> <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12" />
                                </svg> </div>)
                        }

                    </div>
                </div>
                <div className={r.bodyRight}>

                    <form className={r.form} onSubmit={handleSubmit}>

                        <div className={r.divs}>
                            <label className={r.labels}>Imagen </label>
                            <input className={`${r.inputs} ${r.inputs_file}`} type="file"
                                name="image"
                                onChange={handleUploadImage} />
                        </div>

                        <div className={r.divs}>
                            <label htmlFor="" className={r.labels}>Nombre</label>
                            <input
                                className={`${r.inputs} ${r.inputs_file}`}
                                type="text"
                                name='name'
                                onChange={handleChange}
                                value={inputs.name}
                                placeholder={'Agregar Nombre'}
                            />
                            <p className={r.error}>{errors.name}</p>
                        </div>



                        <div className={r.divs}>
                            <label htmlFor="" className={r.labels}>Descripción</label>
                            <input className={`${r.inputs} ${r.inputs_file}`}
                                type="text"
                                name='description'
                                onChange={handleChange}
                                value={inputs.description}
                                placeholder='Ingresar Descripcion'
                            />
                            <p className={r.error}>{errors.description}</p>
                        </div>

                        <div className={r.divs}>
                            <label htmlFor="" className={r.labels}>Rubro</label>
                            <select name="" id="" onChange={handleSelect} className={r.select}>
                                <option value=""></option>
                                <option value="almacen">Almacen</option>
                                <option value="libreria">Libreria</option>
                                <option value="medico">Medico</option>
                                <option value="limpieza">Limpieza</option>
                                <option value="otros">Otros</option>
                            </select>

                        </div>

                        <div className={r.divs}>
                            <label htmlFor="" className={r.labels}>Stock</label>
                            <input className={`${r.inputs} ${r.inputs_file}`}
                                type="number"
                                name='stock'
                                onChange={handleChange}
                                value={inputs.stock}
                                placeholder='Ingresar Stock/ numero entero'
                            />
                            <p className={r.error}>{errors.stock}</p>
                        </div>

                        <div className={r.divs}>
                            <label htmlFor="" className={r.labels}>Precio</label>
                            <input className={`${r.inputs} ${r.inputs_file}`}
                                type="number"
                                name='price'
                                onChange={handleChange}
                                value={inputs.price}
                                placeholder='Ingresar Precio/numero entero'
                            />
                            <p className={r.error}>{errors.price}</p>
                        </div>
                        <button className={`${r.btnVerde}`} type='submit'>Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProd