import { NavLink } from 'react-router-dom'
import p from './Nav.module.css'

const Nav = () => {
    return (
        <div className={p.navContainer} >
            <NavLink className={p.logo} to={'/'} >
                ASSISTT
            </NavLink>
            <NavLink className={p.perfil} to={'/Profile1'}>
                Perfil
            </NavLink>

        </div>
    )
}

export default Nav