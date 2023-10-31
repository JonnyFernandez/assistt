import { NavLink } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import p from './Profile3.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../authAll/auth/AuthProvider';
import { useEffect } from 'react';
import { getUser1 } from '../../redux/actions'
import Footer from '../../components/footer/Footer'
import EditProfile3 from '../../components/componentUser3/editProfile3/EditProfile3';

const Profile3 = () => {
    const auth = useAuth();
    const dispatch = useDispatch();
    const Profile = useSelector((state) => state.profile);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userId = userInfo?.id || '';

    useEffect(() => {
        dispatch(getUser1(userId))
    }, [dispatch])

    const handleSignOut = () => {
        auth.signOut();
    };

    const saveProfileChanges = (updatedProfileData) => {
        dispatch(updateUserProfile(updatedProfileData)); 
    };

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className={p.body}>
                <div className={p.bodyLeft}>
                    <h3 className={p.subtitulo}>Datos del Perfil</h3>
                    <div className={p.bodyLeftHeader}>
                        <img src={Profile?.image} alt="Imagen de perfil" className={p.profileImage} />
                        <h3 className={p.datos}><strong>Nombre:</strong> {Profile?.name}</h3>
                        <h3 className={p.datos}><strong>Email:</strong> {Profile.email}</h3>

                        <div>
                            <button onClick={handleSignOut}>Cerrar</button>
                        </div>
                    </div>
                </div>
                <div className={p.bodyRight}>
                    <div className={p.bodyRightHeader}>
                        <EditProfile3
                            userProfile={Profile}
                            saveProfileChanges={saveProfileChanges}
                        />
                    </div>
                </div>
            </div>
            <div className={p.footer}>
                <Footer/>
            </div>
        </div>
    );
};

export default Profile3;
