import { NavLink, useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import L from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Card2 from '../../components/card2/Card2';
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from 'react';
import { codeToOrder } from '../../utils/codes';
import { createOrder, cleanCart, getUser1, postReview } from '../../redux/actions';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const Cart = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch();
    const codeOrder = codeToOrder();
    const myCart = useSelector(state => state.cart);
    const fav = useSelector(state => state.favorite);
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
    const [showCart, setShowCart] = useState(true);


    const sendOrder = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Quieres generar esta orden: ${input.codeOrder}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, generar orden',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(createOrder(input));

                Swal.fire({
                    title: `Orden ${input.codeOrder} creada`,
                    text: '¿Qué quieres hacer a continuación??',
                    showDenyButton: true,
                    confirmButtonText: 'Abrir reseña',
                    denyButtonText: 'Terminar operación',
                }).then((innerResult) => {
                    if (innerResult.isConfirmed) {
                        setShowReviewForm(true);
                        setShowCart(false)
                    } else if (innerResult.isDenied) {

                        dispatch(cleanCart());
                        localStorage.removeItem('cart');


                    }
                });
            }
        });
    };


    const clean_Cart = () => {
        dispatch(cleanCart());
        localStorage.removeItem('cart');

    };

    const handleReviewChange = (e) => {
        setReviews({
            ...reviews,
            review: e.target.value
        });
    };

    const submitReview = () => {
        try {
            (postReview(reviews));

            dispatch(cleanCart());
            localStorage.removeItem('cart');
            setShowReviewForm(false)
            // Crea una alerta utilizando SweetAlert para informar al usuario que la revisión se ha creado con éxito
            Swal.fire({
                title: `¡La reseña se creó con éxito!`,
                icon: 'success',
                confirmButtonText: 'Inicio'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirige al usuario a la página '/user1' después de hacer clic en el botón "Volver a User1"
                    navigate('/user1');

                    // Limpia el estado de las reseñas
                    setReviews({
                        review: "",
                        userId: Profile.id,
                        codeOrder: codeOrder
                    });
                }
            });
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir durante la creación de la revisión
            console.error('Error al crear la revisión:', error);
        }
    };




    if (Profile.id === undefined) {
        return <div>Error: Debes iniciar sesión para continuar.</div>;
    }

    return (
        <div className={L.cart}>
            <div className={L.headerCart}>
                <Nav />
                <div className={L.SubNav} >
                    <NavLink className={L.back} to='/user1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                    </NavLink>
                    <div className={L.title}>
                        Orden De Compra
                    </div>

                    <div>
                        <NavLink to={'/fav'} >
                            {
                                fav.length <= 0
                                    ? <div className={L.fav}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-bookmark" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg>
                                    </div>
                                    : <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                        </svg>
                                    </div>
                            }

                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={L.bodyCart}>
                <div className={L.divInfo}>



                    {
                        myCart.length > 0 ? <div className={L.container}>
                            {myCart.map(item => (
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
                        </div> : <div className={L.emptyCart}>

                            <p>Carrito vacío, dirígete a <NavLink className={L.backToHome} to={'/user1'}>Inicio</NavLink> para agregar productos</p>
                        </div>
                    }
                </div>

                {showReviewForm && (


                    <div className={L.reviewForm}>
                        <h2>Crear Reseña</h2>
                        <textarea
                            placeholder="Escribe tu reseña aquí"
                            value={reviews.review}
                            onChange={handleReviewChange}
                        />
                        <button onClick={() => submitReview()}>Enviar Pedido</button>
                    </div>

                )}

                {showCart && <div className={L.divButtons}>
                    {myCart.length > 0 && (
                        // <button className={L.cartProfileFooter_Approve} onClick={() => sendOrder()}>Enviar</button>
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => sendOrder()}>Enviar Orden</button>
                    )}
                    {myCart.length > 0 && (
                        // <button className={L.cartProfileFooter_disapprove} onClick={() => clean_Cart()}>Vaciar carrito</button>
                        <button type="button" class="btn btn-secondary btn-sm" onClick={() => clean_Cart()}>Vaciar carrito</button>
                    )}
                </div>}

            </div>
            <Footer />








        </div>
    );
};

export default Cart;
