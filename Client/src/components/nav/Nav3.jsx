import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import p from './Nav.module.css';
import SearchBar3 from '../searchBar/SearchBar3';

const Nav3 = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleCreateUser = () => {
    if (selectedUserType === 'Cliente') {
      navigate('/register1');
    } else if (selectedUserType === 'Revisor') {
      navigate('/register2');
    } else if (selectedUserType === 'Administrador') {
      navigate('/register3');
    } else if (selectedUserType === 'Proveedor') {
      navigate('/register4');
    }
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
        <select className={p.select} onChange={(e) => setSelectedUserType(e.target.value)}>
        <option value="Crear Usuarios" className={p.crearUser}>Crear Usuarios</option>
          <option value="Cliente">Cliente</option>
          <option value="Revisor">Revisor</option>
          <option value="Administrador">Administrador</option>
          <option value="Proveedor">Proveedor</option>
        </select>
      </div>
      {selectedUserType && (
        <div>
          {handleCreateUser()}
        </div>
      )}
    </div>
  );
};

export default Nav3;




