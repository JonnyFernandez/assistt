import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import p from './Profile.module.css'

import { useSelector } from 'react-redux'

const Profile1 = () => {


    const myProfile = useSelector((state) => state.profile)


    // let aux = myProfile.map(item => item.Entities)

    // console.log(aux);

    return (
        <div className={p.profile}>

            <div className={p.prodileHeader}>
                <div>
                    <Nav />
                </div>

                <div className={p.subDiv}>
                    <NavLink to={'/user1'}>Inicio</NavLink>
                    <NavLink to={'/orders'}>Pedidos</NavLink>
                    <NavLink to={'/cart'}>Notificaciones</NavLink>
                    <NavLink to={'/fav'}>Favoritos</NavLink>
                    <NavLink to={'/'}>Carrito</NavLink>
                    <NavLink to={'/'}>Salir</NavLink>

                </div>
            </div>

            <div className={p.prodileBody}>

                {/* <div className={p.profileBodyLeft}>
                    <h1>Nombre: </h1>
                    <h2>Cuit: </h2>
                    <h2>Entidad: </h2>
                    <h2>Ubicación: </h2>
                    <h2>Email:</h2>
                    <h2>Historial de Pedidos: </h2>
                    <h2>comentarios: </h2>
                    <p>Lista de los pedidos anteriores realizados por el usuario, incluyendo detalles como la fecha, número de pedido y estado actual de cada pedido.</p>
                    <h2>Teléfono de Contacto</h2>
                </div> */}
                <div className={p.profileBodyLeft}>
                    <h3>Nombre: {myProfile[0].name}</h3>
                    <h3>Cuit Unidad: {myProfile[0].cuit}</h3>
                    <h3>Unidad de Negocio: </h3>
                    <h3>Ubicación: {myProfile[0].address}</h3>
                    <h3>Email: {myProfile[0].email}</h3>
                    <h3>Historial de Pedidos: {myProfile[0].Orders.length}</h3>
                    <h3>Teléfono de Contacto</h3>
                    <h3>comentarios: {myProfile[0].Review1.length}</h3>
                    <p className={p.parrafo} >Lista de los pedidos anteriores realizados por el usuario, incluyendo detalles como la fecha, número de pedido y estado actual de cada pedido.</p>
                </div>






                <div className={p.profileBodyRight}></div>





            </div>
            <div className={p.prodileFooter}> Assistt one - Todos los de derechos reservados 2023</div>







            {/* <NavLink to={'/user1'} >Back</NavLink>
            <h1>Perfil del usuario que este conectado</h1> */}
        </div>
    )
}


export default Profile1