import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import p from './Nav.module.css';
import SearchBar3 from '../searchBar/SearchBar3';

const Nav3 = () => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate('/signup');
  };

  return (
    <div className={p.nav1Container}>
      <div>
        <SearchBar3 />
      </div>
      <div>
        <NavLink to={'/user3'}>Inicio</NavLink>
      </div>
      <div>
        <NavLink className={p.perfil} to={'/Profile1'}>
          Perfiles
        </NavLink>
      </div>
     
        <div>
          <button
            className={p.crearuser} // Utiliza la misma clase CSS
            onClick={handleCreateUser}
          >
            Crear Usuarios
          </button>
        </div>
    
    </div>
  );
};

export default Nav3;





