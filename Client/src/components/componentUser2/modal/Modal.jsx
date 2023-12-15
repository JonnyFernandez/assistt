// Modal.js
import React, { useEffect, useState } from 'react';
import j from './Modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { acceptOrder_user2 } from '../../../redux/actions';

const Modal = ({ isOpen, onClose, productDetails, id }) => {
    const dispatch = useDispatch()
    // const profile = useSelector(state => state.profile)
    // const userEmail = profile.email;

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    // const type = userInfo?.type || '';
    const userEmail = userInfo?.email || ''

    // console.log(email);

    const review = productDetails?.review

    const [showReview, setShowReview] = useState(false)
    useEffect(() => {
        setShowReview(false)
    }, [])


    const openReview = () => {
        setShowReview(true)
    }
    const closeReview = () => {
        setShowReview(false)

    }


    if (!isOpen) {
        return null;
    }

    const acceptOrder = () => {
        dispatch(acceptOrder_user2(id, userEmail))
    }

    const calculateTotal = () => {
        let total = 0;
        productDetails.prods.forEach(item => {
            total += item.quanty * item.price;
        });
        return total;
    };
    const totalAmount = calculateTotal();

    return (
        <div className={j.modalOverlay}>

            <div className={j.modalContent}>
                <div className={j.header}>
                    <p>Codigo: {productDetails.code}</p>
                    <p>Fecha: {productDetails.date}</p>
                    <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
                    <p className={j.reseña} onClick={openReview}>{review.length > 0 ? <div><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="greenyellow" class="bi bi-card-text" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                    </svg></div> : ''}</p>
                    <div>Monto total: ${totalAmount}.00</div>
                </div>


                <div className={j.details}>
                    { productDetails.prods.length > 0 ? <div>
                            {
                                productDetails.prods
                                    .map((item) => {
                                        return (
                                            <div>
                                                <div key={item.id} className={j.card}>
                                                    <div className={j.info}>Codigo: {item.code}</div>
                                                    <div className={j.info}>Nombre: {item.name} </div>
                                                    <div className={j.info}>Cantidad: {item.quanty} </div>
                                                    <div className={j.info}>precio: $ {item.price} </div>
                                                    <div className={j.info}>total: $ {item.quanty * item.price} </div>
                                                </div>

                                            </div>
                                        )
                                    })
                            }
                        </div> : <div></div>
                    }

                    {showReview && <div >
                        {
                            review.length > 0
                                ? <div className={j.review}>

                                    {review.map(item => <div >
                                        <div className={j.reviewContainer}>
                                            <div className={j.reviewHeader}>
                                                <div className={j.titleReview}>Reseña</div>
                                                <div className={j.close} onClick={() => closeReview()}>X</div>
                                            </div>
                                            <div className={j.reviewContent}>{item.review}</div>
                                        </div>
                                    </div>)}
                                </div>
                                : <div> <p className={j.reviewContent}>Esta Orden de compra no tiene reseña asociada</p>  </div>
                        }
                    </div>
                    }

                </div>
                <div className={j.modalButtons}>
                    <button onClick={() => acceptOrder()}>Aceptar</button>
                    <button onClick={() => onClose(false)}>Ignorar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
