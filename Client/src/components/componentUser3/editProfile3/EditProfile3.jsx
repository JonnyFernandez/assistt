import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions';
import t from './EditProfile3.module.css';
import axios from 'axios';

const EditProfile3 = () => {
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const id = userInfo?.id || '';

  const [inputs, setInputs] = useState({
    company: userInfo?.company || '',
    address: userInfo?.address || '',
    phone: userInfo?.phone || '',
    image: userInfo?.image || '', // Estado para la imagen
  });

  const [uploadedImage, setUploadedImage] = useState(userInfo?.image || null); // Estado para la vista previa de la imagen

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const cloud_name = 'dhyqgl7ie'; 
  const upload_preset = 'a2i0wk5f'; 
  const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  // Función para manejar la selección de la imagen
  const handleImageSelection = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result); // Establece la vista previa de la imagen
    };
    reader.readAsDataURL(file);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputs.company || !inputs.address || !inputs.phone) {
      alert('Ingrese la información solicitada');
      return;
    }

    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('upload_preset', upload_preset);

        const response = await axios.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const updatedUserData = {
          ...inputs,
          image: response.data.secure_url
        };

        // Actualiza el estado local de userInfo
        const updatedUserInfo = { ...userInfo, ...updatedUserData };
        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

        setInputs(updatedUserData);
        setUploadedImage(response.data.secure_url);
      }

      const response = await dispatch(addInfo(id, inputs));

      if (response) {
        setInputs({ company: '', address: '', phone: '', image: '' });
        setUploadedImage(null);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }

  // Función para manejar la eliminación de la imagen seleccionada
  const handleImageRemoval = () => {
    setSelectedImage(null);
    setUploadedImage(null);
  };

  // Se ejecuta cuando se monta el componente
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
            {(selectedImage || uploadedImage) && (
              <div className={t.uploadedImageContainer}>
                <h3 className={t.subtitulo}>Vista previa de la imagen:</h3>
                <img src={uploadedImage || selectedImage} alt="Preview" className={t.profileImage} />
                <button onClick={handleImageRemoval}>
                  Modificar imagen
                </button>
              </div>
            )}
            {!selectedImage && !uploadedImage && (
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








