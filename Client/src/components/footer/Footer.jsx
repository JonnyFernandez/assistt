import React from "react";
import { NavLink } from "react-router-dom";
import s from '../footer/Footer.module.css';
import logo from '../../assets/imageLogo/LOGO5.png';

function Footer() {
  const logoStyle = {
    width: "230px", // Ajusta el tamaño del logo aquí
  };

  return (
    <footer className={s.footerContainer}>
      <div className={s.footer}>
        <NavLink className={s.logo} to="/">
          <img src={logo} alt="Assist" style={logoStyle} />
        </NavLink>
      </div>

      <div className={s.footer}>
        <NavLink to="/" target="_blank" className={s.links}>
        Inicio
        </NavLink>
      </div>

      <div className={s.footer}>
        <NavLink to="/aboutUs" target="_blank" className={s.links}>
        Desarrolladores
        </NavLink>
      </div>


      <div className={`${s.footer} ${s.copyright}`}>
        <p>
          Todos los derechos reservados © 2023 <b>| Assist</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;


