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
import Footer from '../../components/footer/Footer'
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


    const handleSingOut = () => {
        auth.signOut()
    }
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
    // const toggleButton = (data) => {
    //     setSelectedButton(data)
    // }






    return (
        <div className={p.profile}>
            <div >
                <Nav />
            </div>
            <div className={p.body}>
                <div className={p.bodyLeft}>
                    <div className={p.bodyLeftHeader}>
                        <img src={Profile.image} alt="" />

                    </div>
                    <div className={p.bodyLeftBody}>
                        <h3>dirección: <small>{Profile?.address}</small> </h3>
                        <h3>teléfono: <small> {Profile?.phone}</small> </h3>
                        <h3>Empresa: <small> {Profile?.company}</small> </h3>

                        <h3>Ordene: <small> {Profile.orders?.length}</small></h3>
                        <h3>Reseñas: <small> {Profile.Review?.length}</small></h3>

                    </div>
                    <div>
                        <button onClick={getOut} >salir</button>
                        <button onClick={handleSingOut}>cerra cuenta</button>
                    </div>
                </div>


                <div className={p.bodyRight}>

                    <div className={p.bodyRightHeader}>


                        {/* <NavLink
                            className={`${p.button} ${selectedButton === 'Inicio' ? p.active : ''}`}
                            to={'/user1'}
                        // onClick={() => toggleButton('Inicio')}
                        >
                            <small className={p.inicionButton}>Inicio</small>
                        </NavLink> */}


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