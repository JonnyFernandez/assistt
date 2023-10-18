import React from 'react';
import p from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav3 = () => {
  
  return (
    <div className={p.nav1Container}> 
      <div>
        <NavLink to={'/profile3'}>
          perfil
        </NavLink>
      </div>
    </div>
  );
};

export default Nav3;





