import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions';
import t from './EditProfile3.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditProfile3 = ({ onClose }) => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
  const id = userInfo.id || '';

  const [inputs, setInputs] = useState({
    company: userInfo.company || '',
    address: userInfo.address || '',
    phone: userInfo.phone || '',
    image: userInfo.image || null
  });

  const [uploadedImage, setUploadedImage] = useState(userInfo.image);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const cloud_name = 'dhyqgl7ie';
  const upload_preset = 'a2i0wk5f';
  const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

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
    setInputs({ company: '', address: '', phone: '', image: '' });
    setUploadedImage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { company, address, phone } = inputs;
    if (!company || !address || !phone) {
      Swal.fire({
        icon: 'error',
        title: 'Campos obligatorios vacíos',
        text: 'Por favor, complete Empresa, Domicilio y Teléfono.'
      });
      return;
    }

    try {
      const response = await dispatch(addInfo(id, inputs));
      if (response) {
        resetForm();
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleImageRemoval = () => {
    setInputs({ ...inputs, image: '' });
    setUploadedImage(null);
  };

  useEffect(() => {
    if (userInfo.image) {
      setUploadedImage(userInfo.image);
    }
  }, [userInfo.image]);

  return (
    <div className={t.form}>
        <button onClick={onClose} className={t.closeButton} >X</button>
      <div className={t.formContainer}>
        <div className={t.formLeft}>
          <div className={t.uploadedImageContainer}>
            <h3 className={t.subtitulo}>Vista previa de la imagen:</h3>
            <div className={t.profileImageContainer}>
              <img
                src={inputs.image || uploadedImage}
                alt="Preview"
                className={`${t.profileImage} ${!inputs.image && t.defaultImage}`}
              />
            </div>
            <button onClick={handleImageRemoval}>Modificar imagen</button>
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
  );
};

export default EditProfile3;





