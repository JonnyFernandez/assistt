import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';//carrito

const Nav1 = () => {
    return (
        <div className={p.nav1Container}  >
            <div>
                <a> Inicio </a>
            </div>


            <SearchBar />

            <div>
                <NavLink to={'/fav'}>
                    🤍
                </NavLink>

            </div>
            <div>
                <NavLink to={'/cart'}>
                    <FontAwesomeIcon icon={faShoppingCart} size="1.5x" color="#fff" />
                </NavLink>

            </div>






        </div>


    )
}

export default Nav1