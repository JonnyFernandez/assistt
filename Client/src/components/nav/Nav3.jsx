import React from 'react';
import { NavLink } from 'react-router-dom';

import p from './Nav.module.css';

const Nav3 = () => {
  return (
    <div className={p.nav1Container}>
      <div>
        <NavLink to={'/user3'}>
          Inicio
        </NavLink>
      </div>

      <div>
        <NavLink className={p.perfil} to={'/Profile1'}>
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Nav3;
