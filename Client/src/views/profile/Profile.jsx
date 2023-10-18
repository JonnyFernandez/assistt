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

const Profile1 = () => {

    const auth = useAuth()
    const dispatch = useDispatch()

    const Profile = useSelector((state) => state.profile)
    const fav = useSelector((state) => state.favorite)
    const [showCartProfile, setShowCartProfile] = useState(false);
    const [showHistoryOrder, setShowHistoryOrder] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showFav, setShowFav] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';
    // console.log(id);

    useEffect(() => {
        dispatch(getUser1(id))
    }, [])


    const handleSingOut = () => {
        auth.signOut()
    }
    const getOut = () => {
        auth.exit()
    }
    const toggleCartProfile = () => {
        setShowCartProfile(true);
        setShowHistoryOrder(false);
        setShowEditProfile(false);
        setShowFav(false);
    };
    const toggleHistotyOrder = () => {
        setShowCartProfile(false);
        setShowHistoryOrder(true);
        setShowEditProfile(false);
        setShowFav(false);
    };
    const toggleEditProfile = () => {
        setShowCartProfile(false);
        setShowHistoryOrder(false);
        setShowEditProfile(true);
        setShowFav(false);
    };
    const toggleFav = () => {
        setShowCartProfile(false);
        setShowHistoryOrder(false);
        setShowEditProfile(false);
        setShowFav(true);
    };






    return (
        <div className={p.profile}>
            <div >
                <Nav />
            </div>
            <div className={p.body}>
                <div className={p.bodyLeft}>
                    <div className={p.bodyLeftHeader}>

                        {/* <div className={p.inputLeft}>
                            <label>Imagen</label> <br />
                            <input className={`${p.inputs} ${p.inputs_file}`} type="file"
                                name="image"
                                // onChange={handlerUploadImage}
                                autoComplete="off" />

                        </div> */}


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


                        <NavLink className={p.button} to={'/user1'}>
                            <small className={p.inicionButton}>Inicio</small>
                        </NavLink>


                        <div className={p.button} onClick={toggleHistotyOrder}> <small>Historial</small> </div>

                        <div className={p.button} onClick={toggleCartProfile}> <small>Carrito</small></div>

                        <div className={p.button} onClick={toggleEditProfile}> <small>Editar</small> </div>

                        <div className={p.button} onClick={toggleFav}><small>favoritos: </small> <small> {fav && fav.length}</small> </div>

                    </div>

                    <div className={p.bodyRightBody}>

                        {showCartProfile && <CartProfile />}
                        {showHistoryOrder && <HistoryOrder />}
                        {showEditProfile && <EditProfile />}
                        {showFav && <FavProfile />}
                    </div>
                    <div className={p.bodyRightFooter}>

                    </div>
                </div>

            </div>
            <div className={p.footer}></div>

        </div>


    )
}


export default Profile1