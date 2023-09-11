import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'


const Cart = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <h1>Lista de Compras</h1>
            </div>
            <div>
                <NavLink to={'/user1'}>Back</NavLink>
            </div>

        </div>
    )
}


export default Cart