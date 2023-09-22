import { NavLink } from 'react-router-dom'
import p from './Nav.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Nav = () => {

    const dispatch = useDispatch()
    const myProf = useSelector((state) => state.profile)




    return (
        <div className={p.navContainer} >
            <NavLink className={p.logo} to={'/'} >
                <img className={p.logo} to={'/'} src="/logo3.png" alt="logo" />
            </NavLink>


        </div>
    )
}

export default Nav