import { NavLink } from 'react-router-dom'
import p from './Nav.module.css'

import { useEffect, useState } from 'react'
import { useAuth } from '../../authAll/auth/AuthProvider'

const Nav = () => {

    const auth = useAuth()

    const [name, setName] = useState('')
    useEffect(() => {
        setName(auth.name)
    }, [])



    return (
        <div className={p.navContainer} >
            <NavLink className={p.logo} to={'/'} >
                <img className={p.logo} to={'/'} src="/logo111.png" alt="logo" />
            </NavLink>
            {
                name ? <div>{name}</div> : <div>Perfil</div>
            }

        </div>
    )
}

export default Nav