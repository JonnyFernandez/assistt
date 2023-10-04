import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import p from './Profile.module.css'

import { useSelector } from 'react-redux'
import { useAuth } from '../../authAll/auth/AuthProvider'

const Profile1 = () => {

    const auth = useAuth()

    const myProfile = useSelector((state) => state.profile)

    const handleSingOut = () => {
        auth.signOut()
    }


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
                    <div onClick={handleSingOut}>Salir</div>


                </div>
            </div>

            <div className={p.prodileBody}>

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