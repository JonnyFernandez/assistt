import { NavLink, useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import L from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Card2 from '../../components/card2/Card2';
import { useState, useEffect } from 'react';
import { codeToOrder } from '../../utils/codes';
import { createOrder, cleanCart, getUser1, postReview } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';//carrito
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const Cart = () => {


    const navigate = useNavigate()
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
        // Muestra una alerta de confirmación
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
            // Si el usuario confirma la orden
            if (result.isConfirmed) {
                // Despacha la acción para crear la orden
                dispatch(createOrder(input));

                // Muestra un nuevo SweetAlert para opciones adicionales después de crear la orden
                Swal.fire({
                    title: `Orden ${input.codeOrder} creada`,
                    text: '¿Qué quieres hacer a continuación??',
                    showDenyButton: true,
                    // showCancelButton: true,
                    confirmButtonText: 'Abrir reseña',
                    denyButtonText: 'Terminar operación',
                    // cancelButtonText: 'Cancelar'
                }).then((innerResult) => {
                    // Si el usuario elige abrir la reseña
                    if (innerResult.isConfirmed) {
                        // Muestra el formulario de revisión
                        setShowReviewForm(true);
                    } else if (innerResult.isDenied) {
                        // Si el usuario elige terminar la operación
                        // Limpia el carrito
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
            <div className='divHeader'>
                <div>
                    <Nav />
                </div>
                <div className={L.backContainer} >
                    <NavLink className={L.back} to={'/user1'}>Inicio</NavLink>

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
                                <button className={L.cartProfileFooter_disapprove} onClick={() => clean_Cart()}>Vaciar carrito</button>
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
                                <button onClick={() => submitReview()}>Enviar Pedido</button>
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
