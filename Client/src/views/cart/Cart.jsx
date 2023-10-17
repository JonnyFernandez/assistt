import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import L from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Card2 from '../../components/card2/Card2'
import { useState, useEffect } from 'react'
import { codeToOrder } from '../../utils/codes'
import { createOrder, cleanCart, getUser1, postReview } from '../../redux/actions'
// import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const dispatch = useDispatch()
    const codeOrder = codeToOrder()
    const myCart = useSelector(state => state.cart)
    const prod_ID = myCart.map(item => item.id)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || ''

    useEffect(() => {
        dispatch(getUser1(id))
    }, [id]);
    const Profile = useSelector(state => state.profile)

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

    if (Profile.id === undefined) {
        return <div>Error: Debes iniciar sesión para continuar.</div>;
    }


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
        <div className={L.cart}>
            <div className='divHeader'>
                <div>
                    <Nav />
                </div>

            </div>




            <div className={L.divBody}>
                <div className={L.divBodyLeft}>
                    <div className={L.divCarts}>
                        {
                            myCart && myCart.map(item => {
                                return (
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
                                )
                            })
                        }
                    </div>
                </div>


                <div className={L.divBodyRight}>

                    <h1>Orden de Compra</h1>
                    <h3>Datos Solicitante</h3>

                    <h4>Nombre: {Profile.name}</h4>
                    <h4>Email: {Profile.email}</h4>
                    <h4>Empresa: {Profile.company}</h4>
                    <h4>Dirección {Profile.address}</h4>

                    <div className={L.cartProfileFooter}>
                        {myCart.length > 0 && <div className={L.cartProfileFooter_Approve} onClick={() => sendOrder()}>Enviar</div>}
                        {myCart.length > 0 && <div className={L.cartProfileFooter_disapprove} onClick={() => clean_Cart()}>Cancelar</div>}
                    </div>

                    {showReviewForm && (
                        <div className={L.reviewForm}>
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

            </div>









            {/* <div className='divFooter'>
                <footer className={L.footer}>Assistt one - Todos los derechos reservados 2023</footer>
            </div> */}



        </div>
    )
}


export default Cart