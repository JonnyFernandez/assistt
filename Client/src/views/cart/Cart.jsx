import { NavLink } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import L from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Card2 from '../../components/card2/Card2';
import { useState, useEffect } from 'react';
import { codeToOrder } from '../../utils/codes';
import { createOrder, cleanCart, getUser1, postReview } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';//carrito

const Cart = () => {
    const dispatch = useDispatch();
    const codeOrder = codeToOrder();
    const myCart = useSelector(state => state.cart);
    const prod_ID = myCart.map(item => item.id);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const id = userInfo?.id || '';

    useEffect(() => {
        dispatch(getUser1(id));
    }, [dispatch, id]);

    const Profile = useSelector(state => state.profile);

    const [input, setInput] = useState({
        codeOrder: codeOrder,
        userId: Profile.id,
        prodId: prod_ID
    });

    const [reviews, setReviews] = useState({
        review: '',
        userId: Profile.id,
        codeOrder: codeOrder
    });
    const [showReviewForm, setShowReviewForm] = useState(false);

    const sendOrder = () => {
        dispatch(createOrder(input));
        // dispatch(cleanCart());
        setShowReviewForm(true);
    };

    const clean_Cart = () => {
        dispatch(cleanCart());
    };

    const handleReviewChange = (e) => {
        setReviews({
            ...reviews,
            review: e.target.value
        });
    };

    const submitReview = () => {
        dispatch(cleanCart());
        setShowReviewForm(false);

        dispatch(postReview(reviews));
        setReviews({
            review: "",
            userId: Profile.id,
            codeOrder: codeOrder
        });

    };

    if (Profile.id === undefined) {
        return <div>Error: Debes iniciar sesión para continuar.</div>;
    }

    return (
        <div className={L.cart}>
            <div className='divHeader'>
                <div>
                    <Nav />
                </div>
                <div className={L.backContainer} >
                    <NavLink className={L.back} to={'/user1'}>Inicio</NavLink>
                    {/* <h1 className={L.title}>Carrito</h1> */}
                    {/* <NavLink className={L.back} to={'/user1'}></NavLink> */}
                </div>

            </div>
            {/*  */}
            {myCart.length > 0 ? (<div className={L.divBody}>
                <div className={L.divBodyLeft}>
                    <div className={L.divCarts}>
                        {myCart && myCart.map(item => (
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
                        ))}
                    </div>
                </div>

                <div className={L.divBodyRight}>

                    <div className={L.divBodyInfo}>
                        <h1>Orden de Compra</h1>
                        <h3>Datos Solicitante</h3>
                        <h4>Nombre: {Profile.name}</h4>
                        <h4>Email: {Profile.email}</h4>
                        <h4>Empresa: {Profile.company}</h4>
                        <h4>Dirección: {Profile.address}</h4>
                        <div className={L.Buttons}>
                            {myCart.length > 0 && (
                                <button className={L.cartProfileFooter_Approve} onClick={() => sendOrder()}>Enviar</button>
                            )}
                            {myCart.length > 0 && (
                                <button className={L.cartProfileFooter_disapprove} onClick={() => clean_Cart()}>Cancelar</button>
                            )}
                        </div>
                    </div>




                    <div className={L.divBodyReview}>
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
            </div>) :
                <div className={L.emptyCart}>
                    <FontAwesomeIcon icon={faShoppingCart} size="3x" color="#555" />
                    <p>Carrito vacío, dirígete a <NavLink className={L.backToHome} to={'/user1'}>Inicio</NavLink> para agregar productos</p>
                </div>
            }

            {/*  */}
        </div>
    );
};

export default Cart;
