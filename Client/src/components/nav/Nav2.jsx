import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'

const Nav2 = () => {
    return (


        <div className={p.nav2Container}  >

            <button class="btn btn-primary">Subasta</button>
            <button class="btn btn-primary">Asignación</button>
            <button class="btn btn-primary">Agregar Prod</button>
            <button class="btn btn-primary">Mis Prod</button>
            <button class="btn btn-primary">All Prod</button>
            <button class="btn btn-primary">Admin Order</button>

            {/* agregare ventajas y privilegios, 
      -si acepta muchos pedidos y los concreta tendra acceso a todos los prod mas venditos, 
      -incluso los de su competencia
      -se lo tomara en cuenta antes de enviar pedido a subasta
      */}




        </div>
    )
}


export default Nav2