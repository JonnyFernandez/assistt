// import { getUser1 } from "../../redux/actions"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import CardCart_Profile from "./CardCart_Profile"
import s from './CartProfile.module.css'
import { codeToOrder } from "../../../utils/codes"
import { createOrder, cleanCart, getUser1, postReview } from "../../../redux/actions"



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

    const [reviews, setReviews] = useState({
        review: '',
        userId: Profile.id,
        codeOrder: codeOrder
    })
    const [showReviewForm, setShowReviewForm] = useState(false);


    const sendOrder = () => {
        dispatch(createOrder(input))
        dispatch(cleanCart())
        alert(`${input.codeOrder}`)
        setShowReviewForm(true);

    }

    const clean_Cart = () => {
        dispatch(cleanCart())
    }

    const handleReviewChange = (e) => {
        setReviews({
            ...reviews,
            review: e.target.value,
        });
    };

    const submitReview = () => {
        setShowReviewForm(false);
        dispatch(postReview(reviews))
        setReviews({
            review: "",
            userId: Profile.id,
            codeOrder: codeOrder,
        });
    };




    return (
        <div className={s.cart}>
            <h1>Orden de Compras</h1>



            <div className={s.cartProfileContainer}>
                {Cart.length < 1 ? <h2>carrito vacio</h2> : ''}
                {
                    Cart && Cart.map(item => {
                        return (
                            <CardCart_Profile
                                key={item.id}
                                id={item.id}
                                code={item.code}
                                name={item.name}
                                description={item.description}
                                quanty={item.quanty}
                                price={item.price}
                                stock={item.stock}
                            />

                        );
                    })
                }
            </div>
            <div className={s.cartProfileFooter}>
                {Cart.length > 0 && <div className={s.cartProfileFooter_Approve} onClick={() => sendOrder()}>Aprobar</div>}
                {Cart.length > 0 && <div className={s.cartProfileFooter_disapprove} onClick={() => clean_Cart()}>Cancelar</div>}
            </div>
            {showReviewForm && (
                <div className={s.reviewForm}>
                    <h2>Crear una reseña</h2>
                    <textarea
                        placeholder="Escribe tu reseña aquí"
                        value={reviews.review}
                        onChange={handleReviewChange}
                    />
                    <button onClick={() => submitReview()}>Enviar Reseña</button>
                </div>
            )}

        </div>
    )
}

export default CartProfile