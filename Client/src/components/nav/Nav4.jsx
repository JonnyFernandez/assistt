import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'

const Nav4 = () => {
    return (


        <div className={p.nav1Container}  >

            <div>
                <NavLink to={'/user2'}>
                    Inicio
                </NavLink>

            </div>

            <SearchBar />

            <div>
                <NavLink to={'/orders'}>
                    Pedidos
                </NavLink>
            </div>

            <a href="">
                Profile
            </a>

        </div>
    )
}


export default Nav4