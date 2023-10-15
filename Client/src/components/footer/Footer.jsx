import React from "react";
import { NavLink } from "react-router-dom";
import s from '../footer/Footer.module.css'
// import logo from '../../../public/LOGO4.png'

function Footer() {

  const logoStyle = {
    width: "200px", // Ajusta el tamaño del logo aquí
  };
  return (


    <footer className={s.footerContainer}>
      <div className={s.footer}>
        <NavLink className={s.logo} to="/">
          {/* <img src={logo} alt="assitt" style={logoStyle} /> */}
        </NavLink>
      </div>
      {/* <div className={s.footer}>
        <span>
          <NavLink to="/faq" className={s.links}>
            FAQ
          </NavLink>
        </span>
        <span>
          <NavLink to="/contact" className={s.links}>
            Contacto
          </NavLink>
        </span>
        <span>
          <NavLink to="/eje1" className={s.links}>
            Ejemplo1
          </NavLink>
        </span>
      </div> */}

      <div className={`${s.footer} ${s.copyright}`}>
        <p>
          Todos los derechos reservados © 2023 <b>| Assist</b>
        </p>
      </div>
    </footer>

  );
}

export default Footer;

