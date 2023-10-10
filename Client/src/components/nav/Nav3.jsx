import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import p from './Nav.module.css';
import SearchBar3 from '../searchBar/SearchBar3';

const Nav3 = () => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    // navigate('/signup');
  };

  return (
    <div className={p.nav1Container}>
    
      <div>
        <SearchBar3 />
      </div>

      <div>
        <NavLink to={'/profile3'}>
          perfil
        </NavLink>
      </div>


    </div>
  );
};

export default Nav3;





