import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions';
import t from './EditProfile3.module.css';
import axios from 'axios';


const EditProfile3 = () => {
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const id = userInfo?.id || '';

  let initialInputs;
  let initialUploadedImage;
  
  if (userInfo) {
    initialInputs = {
      company: userInfo.company,
      address: userInfo.address,
      phone: userInfo.phone,
      image: userInfo.image
    };
    initialUploadedImage = userInfo.image;
  } else {
    initialInputs = {
      company: '',
      address: '',
      phone: '',
      image: image
    };
    initialUploadedImage = null;
  }
  

  const [inputs, setInputs] = useState(initialInputs);
  const [uploadedImage, setUploadedImage] = useState(initialUploadedImage);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };


  const cloud_name = 'dhyqgl7ie';
  const upload_preset = 'a2i0wk5f';
  const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  // Función para manejar la selección de la imagen y su carga a Cloudinary
  const handleImageSelection = async (event) => {
    try {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', upload_preset);

      const response = await axios.post(URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setInputs({ ...inputs, image: response.data.secure_url });
      setUploadedImage(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const resetForm = () => {
    setInputs({
      company: '',
      address: '',
      phone: '',
      image: ''
    });
    setUploadedImage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputs.company || !inputs.address || !inputs.phone) {
      alert('Ingrese la información solicitada');
      return;
    }

    try {
      const response = await dispatch(addInfo(id, inputs));

      if (response) {
        resetForm(); // Llama a la función para limpiar los campos
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  // Función para manejar la eliminación de la imagen seleccionada
  const handleImageRemoval = () => {
    setInputs({ ...inputs, image: '' });
    setUploadedImage(null);
  };

  useEffect(() => {
    if (userInfo?.image) {
      setUploadedImage(userInfo.image);
    }
  }, []);

  return (
    <div>
      <h2 className={t.titulo}>Editar datos de tu Perfil</h2>
      <div className={t.form}>
        <div className={t.formContainer}>
          <div className={t.formLeft}>
            <div className={t.uploadedImageContainer}>
              <h3 className={t.subtitulo}>Vista previa de la imagen:</h3>
              <div className={t.profileImageContainer}>
                <img
                  src={inputs.image || uploadedImage  }
                  alt="Preview"
                  className={`${t.profileImage} ${!inputs.image && t.defaultImage}`}
                />
              </div>
              <button onClick={handleImageRemoval}>
                Modificar imagen
              </button>
            </div>
            {!inputs.image && !uploadedImage && (
              <input type="file" onChange={handleImageSelection} accept="image/*" />
            )}
          </div>
          <div className={t.formRight}>
            <form onSubmit={handleSubmit} className={t.form1}>
              <div className={t.divs}>
                <h2 className={t.subtitulo}>Ingreso/ Edición de Datos</h2>
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
                  placeholder="Ingresar Teléfono"
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

export default EditProfile3;










