import h from './Landing.module.css'
import { NavLink } from 'react-router-dom'


const Landing =()=>{
    return(
        <div className={h.Landing} >

          <nav className={h.titulonav}>
          
            <div className={h.title}>Gestion Compras</div>
          
          </nav>

          <div className={h.container}>
             

         <div className={h.titleContainer}>
            <div className={h.title}></div> 
         </div>
          
          <div className={h.linkContainer} >
            <NavLink className={h.link} to="/user1">Unidad</NavLink>
            <NavLink className={h.link} to="/user2">Autorizante</NavLink>
            <NavLink className={h.link} to="/user3">Administrador</NavLink>
            <NavLink className={h.link} to="/user4">Proveedor</NavLink>
          </div>

          </div> 

        </div>
    )
}


export default Landing