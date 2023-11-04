import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import p from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';//carrito
import { useSelector } from 'react-redux';


const Nav1 = () => {


    const cart = useSelector((state) => state.cart)
    const fav = useSelector(state => state.favorite)

    let cartColor = cart.length > 0 ? "rgb(100, 229, 100)" : "#fff"

    return (
        <div className={p.nav1Container}  >
            <div>
                <a> Inicio </a>
            </div>


            <SearchBar />

            <div>
                <NavLink to={'/fav'} className={p.favColor}>
                    {fav.length > 0 ? "❤️" : "🤍"}

                </NavLink>

            </div>
            <div>
                <NavLink to={'/cart'}>
                    <FontAwesomeIcon icon={faShoppingCart} size="1.5x" color={cartColor} />

                </NavLink>

            </div>






        </div>


    )
}

export default Nav1