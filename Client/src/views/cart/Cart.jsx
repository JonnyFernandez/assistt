import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import L from './Cart.module.css'
import { useSelector } from 'react-redux'
import Card from '../../components/card/Card'
import Card2 from '../../components/card2/Card2'

const Cart = () => {

    const myCart = useSelector(state => state.cart)


    return (
        <div className={L.cart}>
            <div className='divHeader'>
                <div>
                    <Nav />
                </div>


                <div className={L.subDiv}>

                    <NavLink to={'/user1'} className={L.inicio} >Inicio</NavLink>

                    <h1 style={{ color: '#ffff' }}>Pedidos</h1>

                    <NavLink to={'/fav'} className={L.inicio} >Favoritos</NavLink>

                </div>

            </div>

            <div className={L.divBody}>
                <div className={L.divBodyLeft}>
                    <h1><strong># Pedido:</strong></h1>
                    {
                        myCart && myCart.map(item => {
                            return (
                                <Card2 key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
                            )
                        })
                    }
                </div>


                <div className={L.divBodyRight}></div>

            </div>









            <div className='divFooter'></div>



        </div>
    )
}


export default Cart