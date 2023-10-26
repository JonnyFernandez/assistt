import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import p from './Profile3.module.css'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'
import { useAuth } from '../../authAll/auth/AuthProvider'

const Profile3 = () => {

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
                    <NavLink to={'/user3'}> <button>Inicio</button> </NavLink>
                    <NavLink to={'/orders'}> <button>Pedidos</button> </NavLink>
                    <button onClick={handleSingOut}>Salir</button>
               </div>
            </div>

            <div className={p.prodileBody}>

                {/* <div className={p.profileBodyLeft}>
                    <h3>Nombre: {myProfile[0].name}</h3>
                    <h3>Cuit Unidad: {myProfile[0].cuit}</h3>
                    <h3>Unidad de Negocio: </h3>
                    <h3>Ubicación: {myProfile[0].address}</h3>
                    <h3>Email: {myProfile[0].email}</h3>
                    <h3>Historial de Pedidos: {myProfile[0].Orders.length}</h3>
                    <h3>Teléfono de Contacto</h3>
                    <h3>comentarios: {myProfile[0].Review1.length}</h3>
                    <p className={p.parrafo} >Lista de los pedidos anteriores realizados por el usuario, incluyendo detalles como la fecha, número de pedido y estado actual de cada pedido.</p>
                </div> */}



                <div className={p.profileBodyRight}></div>

            </div>

                <Footer />
        </div>
    )
}


export default Profile3