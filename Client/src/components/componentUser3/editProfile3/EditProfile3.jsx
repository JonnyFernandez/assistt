import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions';
import t from './EditProfile3.module.css'; // Asegúrate de importar tus estilos

const EditProfile3 = () => {
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const id = userInfo?.id || '';

  const [inputs, setInputs] = useState({
    company: '',
    address: '',
    phone: '',
  });

  const [profileImage, setProfileImage] = useState(null);

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
      alert('Ingrese la información solicitada');
      return;
    }

    try {
      const response = await dispatch(addInfo(id, {
        company: inputs.company,
        address: inputs.address,
        phone: inputs.phone,
        image: profileImage,
      }));

      if (response) {
        setInputs({
          company: '',
          address: '',
          phone: '',
        });
        setProfileImage(null);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleImageRemoval = () => {
    setProfileImage(null);
  };

  return (
    <div>
      <h2 className={t.titulo}>Editar datos de tu Perfil</h2>
      <div className={t.form}>
        <div className={t.formContainer}>
          <div className={t.formLeft}>
            {profileImage ? (
              <div>
                <img src={profileImage} alt="Profile" className={t.profileImage} />
                <button onClick={handleImageRemoval} className={t.removeImage}>Eliminar imagen</button>
              </div>
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






