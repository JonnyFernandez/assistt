import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'


const Orders = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <h1>Lista pedidos </h1>
            </div>
            <div>
                <NavLink to={'/user1'}>Back</NavLink>
            </div>

        </div>
    )
}


export default Orders