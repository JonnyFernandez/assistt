import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'

const Nav2 = ({ selector }) => {




    return (


        <div className={p.nav2Container}  >

            <button className="btn btn-primary" value={""}  >Menu</button>
            <button className="btn btn-primary" value={"auction"} onClick={(e) => selector(e.target.value)} >Ordenes</button>
            <button className="btn btn-primary" value={"assignament"} onClick={(e) => selector(e.target.value)}>Asignación</button>
            <button className="btn btn-primary" value={"addProd"} onClick={(e) => selector(e.target.value)}>Agregar Productos</button>
            <button className="btn btn-primary" value={"prod"} onClick={(e) => selector(e.target.value)}>Productos</button>
            {/* <button className="btn btn-primary" value={"orderUser2"} onClick={(e) => selector(e.target.value)}>Ordenes</button> */}

            {/* agregare ventajas y privilegios, 
      -si acepta muchos pedidos y los concreta tendra acceso a todos los prod mas venditos, 
      -incluso los de su competencia
      -se lo tomara en cuenta antes de enviar pedido a subasta
      */}




        </div>
    )
}


export default Nav2