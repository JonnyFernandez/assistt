// import { getUser1 } from "../../redux/actions"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import CardCart_Profile from "./CardCart_Profile"
import s from './CartProfile.module.css'
import { codeToOrder } from "../../utils/codes"
import { createOrder, cleanCart, getUser1 } from "../../redux/actions"



const CartProfile = () => {

    const dispatch = useDispatch()

    const codeOrder = codeToOrder()

    const Cart = useSelector(state => state.cart)
    const prod_ID = Cart.map(item => item.id)

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || ''

    useEffect(() => {
        dispatch(getUser1(id))
    }, []);

    const Profile = useSelector(state => state.profile)
    if (Profile.id === undefined) { return 'tienes que logearte' }


    const [input, setInput] = useState({
        codeOrder: codeOrder,
        userId: Profile.id,
        prodId: prod_ID
    });



    const handleChange = (e) => {
        setInput({
            ...input,
            stimate_date: e.target.value
        })
    };

    const sendOrder = () => {
        dispatch(createOrder(input))
        dispatch(cleanCart())
        alert(`${input.codeOrder}`)

    }

    const cleanCart = () => {
        dispatch(cleanCart())
    }




    // console.log(Cart);

    return (
        <div className={s.cart}>

            <h1>Orden de Compras</h1>
            <div className={s.cartProfileContainer}>
                {
                    Cart && Cart.map(item => {
                        return (

                            <CardCart_Profile key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} stock={item.stock} />
                        )
                    })
                }
            </div>
            <div className={s.cartProfileFooter}>
                <div className={s.cartProfileFooter_disapprove} onClick={cleanCart}>Cancelar</div>
                <div className={s.cartProfileFooter_Approve} onClick={sendOrder}>Aprobar</div>
            </div>

        </div>
    )
}

export default CartProfile