import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'

const Nav2 = () => {
    return (


        <div className={p.nav1Container}  >

            <div>
                <NavLink to={'/user2'}>
                    Inicio
                </NavLink>

            </div>



            <SearchBar />
            {/* 
            <div>
                <NavLink to={'/orders'}>
                    Pedidos
                </NavLink>
            </div> */}

            <a href="">
                <NavLink className={p.perfil} to={'/Profile1'}>
                    Profile
                </NavLink>
            </a>
        </div>
    )
}


export default Nav2