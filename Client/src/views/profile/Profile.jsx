import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import p from './Profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth } from '../../authAll/auth/AuthProvider'
import { getUser1 } from '../../redux/actions'
import { useEffect, useState } from 'react'
import CartProfile from '../../components/componentOfUser1/cartProfile/CartProfile'
import HistoryOrder from '../../components/componentOfUser1/histoyOrderProfile1/HistoryOrder'
import EditProfile from '../../components/componentOfUser1/editProfile/EditProfile'
import FavProfile from '../../components/componentOfUser1/favProfile/FavProfile'
import Swal from 'sweetalert2';


const Profile1 = () => {

    const auth = useAuth()
    const dispatch = useDispatch()

    const Profile = useSelector((state) => state.profile)
    const fav = useSelector((state) => state.favorite)
    const [showCartProfile, setShowCartProfile] = useState(false);
    const [showHistoryOrder, setShowHistoryOrder] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showFav, setShowFav] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';


    useEffect(() => {
        dispatch(getUser1(id))
    }, [])


    // const handleSingOut = () => {
    //     auth.signOut()
    // }
    const getOut = () => {
        auth.exit()
    }
    const toggleCartProfile = (data) => {
        setSelectedButton(data)
        setShowCartProfile(true);
        setShowHistoryOrder(false);
        setShowEditProfile(false);
        setShowFav(false);
    };
    const toggleHistotyOrder = (data) => {
        setSelectedButton(data)
        setShowCartProfile(false);
        setShowHistoryOrder(true);
        setShowEditProfile(false);
        setShowFav(false);
    };
    const toggleEditProfile = (data) => {
        setSelectedButton(data)
        setShowCartProfile(false);
        setShowHistoryOrder(false);
        setShowEditProfile(true);
        setShowFav(false);
    };
    const toggleFav = (data) => {
        setSelectedButton(data)
        setShowCartProfile(false);
        setShowHistoryOrder(false);
        setShowEditProfile(false);
        setShowFav(true);
    };




    function handleSingOut() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Tu sesión actual se cerrará!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                auth.signOut()
                Swal.fire('¡Sesión cerrada!', 'Tu sesión ha sido cerrada correctamente.', 'success');
            }
        });
    }






    return (
        <div className={p.profile}>
            <div >
                <Nav />
            </div>
            <div className={p.body}>


                <div className={p.bodyLeft}>


                    <div className={p.bodyLeftHeader}>
                        <img src={Profile.image} alt="image" />

                    </div>

                    <div className={p.bodyLeftBody}>
                        <div className={p.divInfo}>
                            <label htmlFor="">User: </label>
                            <small> {Profile?.name}</small>
                        </div>

                        <div className={p.divInfo}>
                            <label htmlFor="">Email: </label>
                            <small> {Profile?.email}</small>
                        </div>
                        <div className={p.divInfo}>
                            <label htmlFor="">Direccion: </label>
                            <small>{Profile?.address}</small>
                        </div>
                        <div className={p.divInfo}>
                            <label htmlFor="">Tel: </label>
                            <small> {Profile?.phone}</small>
                        </div>
                        <div className={p.divInfo}>
                            <label htmlFor="">Empresa: </label>
                            <small> {Profile?.company}</small>
                        </div>

                    </div>


                    <div className={p.logOut}>
                        <button onClick={handleSingOut}>Log Out</button>
                    </div>

                </div>


                <div className={p.bodyRight}>

                    <div className={p.bodyRightHeader}>


                        <NavLink
                            className={`${p.button} ${selectedButton === 'Inicio' ? p.active : ''}`}
                            to={'/user1'}
                        >
                            <small className={p.inicionButton}>Inicio</small>
                        </NavLink>


                        <div className={`${p.button} ${selectedButton === 'History' ? p.active : ''}`} onClick={() => toggleHistotyOrder('History')}> <small>Historial</small> </div>

                        <div className={`${p.button} ${selectedButton === 'Carrito' ? p.active : ''}`} onClick={() => toggleCartProfile('Carrito')}> <small>Carrito</small></div>

                        <div className={`${p.button} ${selectedButton === 'Editar' ? p.active : ''}`} onClick={() => toggleEditProfile('Editar')}> <small>Editar</small> </div>

                        <div className={`${p.button} ${selectedButton === 'favoritos' ? p.active : ''}`} onClick={() => toggleFav('favoritos')}><small>favoritos: </small> <small> {fav && fav.length}</small> </div>

                    </div>

                    <div className={p.bodyRightBody}>

                        {showCartProfile && <CartProfile />}
                        {showHistoryOrder && <HistoryOrder />}
                        {showEditProfile && <EditProfile />}
                        {showFav && <FavProfile />}
                    </div>
                    <div className={p.bodyRightFooter}>

                        <img src='../../../src/assets/imageLogo/LOGO5.PNG' alt="" />

                        <div className={`${p.footer} ${p.copyright}`}>
                            <p>Todos los derechos reservados © 2023 <b>| Assist</b> </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={p.footer}>

            </div>

        </div>


    )
}


export default Profile1