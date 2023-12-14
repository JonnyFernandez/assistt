import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser1 } from '../../redux/actions';
import p from './Profile3.module.css';

const Profile3 = ({ onClose }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userId = userInfo?.id || '';

  useEffect(() => {
    dispatch(getUser1(userId));
  }, [dispatch]);

  const handleCloseProfile3Modal = () => {
    onClose();
  };

  const defaultImage = 'https://cdn-icons-png.flaticon.com/512/666/666201.png';

  return (
    <div className={p.cont}>
      <button onClick={handleCloseProfile3Modal} className={p.closeButton}>
        X
      </button>
      <div className={p.profileContainer}>
        <div className={p.headerContainer}>
          <h2 className={p.header}>Datos del Perfil</h2>
        </div>
        <div className={p.body}>
          <div className={p.bodyLeft}>
            <div className={p.profileImageContainer}>
              <img src={profile?.image || defaultImage} alt="Imagen de perfil" className={p.profileImage} />
            </div>
          </div>
          <div className={p.bodyRight}>
            <div className={p.datosContainer}>
              <h3 className={p.datos}>
                <strong>Nombre:</strong> {profile?.name}
              </h3>
              <h3 className={p.datos}>
                <strong>Email:</strong> {profile?.email}
              </h3>
              <h3 className={p.datos}>
                <strong>Empresa:</strong> {profile?.company}
              </h3>
              <h3 className={p.datos}>
                <strong>Teléfono:</strong> {profile?.phone}
              </h3>
              <h3 className={p.datos}>
                <strong>Domicilio:</strong> {profile?.address}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile3;




