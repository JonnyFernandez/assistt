import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'

const Nav1 = () => {
    return (
        <div className={p.nav1Container}  >
            <div>
                Inicio
            </div>

            <div>
                <NavLink to={'/orders'}>
                    Pedidos
                </NavLink>
            </div>


            <SearchBar />

            <div>
                <NavLink to={'/cart'}>
                    Carrito
                </NavLink>

            </div>
            <div>
                <NavLink to={'/fav'}>
                    Favoritos
                </NavLink>

            </div>

        </div>
    )
}

export default Nav1