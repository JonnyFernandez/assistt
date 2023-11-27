import React, { useState } from 'react';
import style from '../ModalEdit/UserAvatarButton.module.css';
import UserAvatar from '../../componentUser3/UserAvatar';
import { useAuth } from '../../../authAll/auth/AuthProvider';
import EditProfile3 from '../editProfile3/EditProfile3';
import Profile3 from '../../../views/profile3/Profile3';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const UserAvatarButton = () => {
  const auth = useAuth();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isEditProfileModalVisible, setEditProfileModalVisible] = useState(false);
  const [isProfile3ModalVisible, setProfile3ModalVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  const handleSignOut = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar la sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        auth.signOut();
      }
    });
  };

  const handleEditProfileClick = () => {
    setEditProfileModalVisible(true);
  };

  const handleCloseEditProfileModal = () => {
    setEditProfileModalVisible(false);
  };

  const handleProfileClick = () => {
    setProfile3ModalVisible(true);
  };

  const handleCloseProfile3Modal = () => {
    setProfile3ModalVisible(false);
  };

  return (
    <>
      <button className={style.sidebarButton} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
        <UserAvatar />
      </button>

      {isSidebarVisible && (
        <div className={style.sidebar} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
          <button onClick={handleProfileClick}>Perfil</button>
          <button onClick={handleEditProfileClick}>Editar Perfil</button>
          <NavLink className={style.navlink} to={'/signup'}>
           <button>Crear Perfiles</button>
        </NavLink>
          <button onClick={handleSignOut}>Cerrar Sesión</button>
        </div>
      )}

      {isEditProfileModalVisible && (
        <div className={style.modalBackdrop}>
          <EditProfile3 onClose={handleCloseEditProfileModal} />
        </div>
      )}

      {isProfile3ModalVisible && (
        <div className={style.modalBackdrop}>
          <Profile3 onClose={handleCloseProfile3Modal} />
        </div>
      )}
    </>
  );
};

export default UserAvatarButton;



