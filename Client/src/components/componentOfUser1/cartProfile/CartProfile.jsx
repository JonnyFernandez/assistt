
import { useSelector, useDispatch } from 'react-redux'

import s from './CartProfile.module.css'

import { cleanCart } from "../../../redux/actions"
import Card2 from '../../card2/Card2'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';//carrito
import { NavLink } from 'react-router-dom'


const CartProfile = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const Cart = useSelector(state => state.cart)

    const sendOrder = () => {
        navigate('/cart')
    }

    const clean_Cart = () => {
        dispatch(cleanCart())
    }

    return (
        <div className={s.cart}>

            <div className={s.cartContainer}>
                {Cart.length > 0 ? <div className={s.cartUp}>
                    {
                        Cart && Cart.map(item => {
                            return (

                                <div className={s.cardStyle}>
                                    <Card2
                                        key={item.id}
                                        id={item.id}
                                        code={item.code}
                                        name={item.name}
                                        description={item.description}
                                        quanty={item.quanty}
                                        price={item.price}
                                        stock={item.stock}
                                    />
                                </div>

                            );
                        })
                    }
                </div> :
                    <div className={s.emptyCart}>
                        <FontAwesomeIcon icon={faShoppingCart} size="3x" color="#555" />
                        <p>Carrito vacío, dirígete a <NavLink className={s.backToHome} to={'/user1'}>Inicio</NavLink> para agregar productos</p>
                    </div>}

                <div className={s.cartDown}>
                    {Cart.length > 0 && <div className={s.cartProfileFooter_Approve} onClick={() => sendOrder()}>Finalizar Pedido</div>}
                    {Cart.length > 0 && <div className={s.cartProfileFooter_disapprove} onClick={() => clean_Cart()}>Vaciar Carrito</div>}
                </div>
            </div>

        </div>
    )
}

export default CartProfile












