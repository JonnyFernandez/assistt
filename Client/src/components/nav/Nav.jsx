import { NavLink, useNavigate } from 'react-router-dom'
import p from './Nav.module.css'
import { useEffect, useState } from 'react'
import { useAuth } from '../../authAll/auth/AuthProvider'

const Nav = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    const [name, setName] = useState('')


    useEffect(() => {
        setName(auth.name)
    }, [auth.name])

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const type = userInfo?.type || '';
    const email = userInfo?.email || ''


    const userRoutes = {
        client: '/Profile1',
        admin: '/Profile3',
        supplier: '/Profile2',
    };

    const handleProfile = () => {
        const userRoute = userRoutes[type];
        if (userRoute) {
            navigate(userRoute);
        }
    };


    return (
        <div className={p.navContainer}>
            <NavLink className={p.logo} to={'/'}>
                <img className={p.logo} to={'/'} src="/logo111.png" alt="logo" />
            </NavLink>
            {
                name
                    ? <div onClick={handleProfile} className={p.linkProfile}> {name} <br /> <small>{email}</small> </div>

                    : <div>| Ingresar</div>
            }
        </div>
    )
}

export default Nav
