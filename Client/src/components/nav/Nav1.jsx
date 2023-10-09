import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'

const Nav1 = () => {
    return (
        <div className={p.nav1Container}  >
            <div>
                <a> Inicio </a>
            </div>

            <div>
                <NavLink to={'/orders'}>
                    <a> Pedidos </a>
                </NavLink>
            </div>


            <div>
                <NavLink to={'/cart'}>
                    <a href="#"> Carrito </a>
                </NavLink>

            </div>
            <div>
                <NavLink to={'/fav'}>
                    🤍
                </NavLink>

            </div>

            <SearchBar />





        </div>


    )
}

export default Nav1