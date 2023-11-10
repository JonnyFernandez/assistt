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
import Footer from '../../components/footer/Footer'


const Profile1 = () => {

    const auth = useAuth()
    const dispatch = useDispatch()

    const Profile = useSelector((state) => state.profile)
    const cart = useSelector((state) => state.cart)
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
        <div className={p.profile1}>

            <div className={p.header1}>
                <Nav />
                <div className={p.subNav}>
                    <NavLink className={p.back} to='/user1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                    </NavLink>
                    <div className={`${p.button} ${selectedButton === 'History' ? p.active : ''}`} onClick={() => toggleHistotyOrder('History')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c2d6e3" class="bi bi-journal-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                    </div>
                    <div className={`${p.button} ${selectedButton === 'Carrito' ? p.active : ''}`} onClick={() => toggleCartProfile('Carrito')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c2d6e3" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>
                    <div className={`${p.button} ${selectedButton === 'favoritos' ? p.active : ''}`} onClick={() => toggleFav('favoritos')}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#c2d6e3" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className={`${p.button} ${selectedButton === 'Editar' ? p.active : ''}`} onClick={() => toggleEditProfile('Editar')}>











                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c2d6e3" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className={p.body1}>
                <div className={p.infoContainer}>
                    {showHistoryOrder && <HistoryOrder />}
                    {showCartProfile && <CartProfile />}
                    {showFav && <FavProfile />}
                    {showEditProfile && <EditProfile />}
                </div>
            </div>
            <Footer />










            {/* <div >
                <Nav />
            </div>
            <div className={p.body}>


                <div className={p.bodyLeft}>


                    <div className={p.bodyLeftHeader}>
                        <img src={!Profile.image ? "https://cdn-icons-png.flaticon.com/512/666/666201.png" : Profile.image} alt="image" />

                    </div>

                    // <div className={p.bodyLeftBody}>
                    //     <div className={p.divInfo}>
                    //         <label htmlFor="">User: </label>
                    //         <small> {Profile?.name}</small>
                    //     </div>

                    //     <div className={p.divInfo}>
                    //         <label htmlFor="">Email: </label>
                    //         <small> {Profile?.email}</small>
                    //     </div>
                    //     <div className={p.divInfo}>
                    //         <label htmlFor="">Direccion: </label>
                    //         <small>{Profile?.address}</small>
                    //     </div>
                    //     <div className={p.divInfo}>
                    //         <label htmlFor="">Tel: </label>
                    //         <small> {Profile?.phone}</small>
                    //     </div>
                    //     <div className={p.divInfo}>
                    //         <label htmlFor="">Empresa: </label>
                    //         <small> {Profile?.company}</small>
                    //     </div>

                    // </div>


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

                </div>

            </div>
            <Footer /> */}

        </div>


    )
}


export default Profile1