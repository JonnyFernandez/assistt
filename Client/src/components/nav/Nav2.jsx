
import p from './Nav.module.css'

const Nav2 = ({ selector }) => {




    return (


        <div className={p.nav2Container}  >

            <button className="btn btn-primary" value={""}  >Menu</button>
            <button className="btn btn-primary" value={"auction"} onClick={(e) => selector(e.target.value)} >Ordenes</button>
            <button className="btn btn-primary" value={"assignament"} onClick={(e) => selector(e.target.value)}>Asignación</button>
            <button className="btn btn-primary" value={"addProd"} onClick={(e) => selector(e.target.value)}>Agregar Productos</button>
            <button className="btn btn-primary" value={"prod"} onClick={(e) => selector(e.target.value)}>Productos</button>
            <button className="btn btn-primary" value={"orderUser2"} onClick={(e) => selector(e.target.value)}>Despacho</button>





        </div>
    )
}


export default Nav2