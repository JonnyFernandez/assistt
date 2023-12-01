// Modal.js
import React, { useEffect, useState } from 'react';
import j from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { acceptOrder_user2 } from '../../../redux/actions';

const Modal = ({ isOpen, onClose, productDetails, id }) => {
    const dispatch = useDispatch()


    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userEmail = userInfo?.email || ''


    const review = productDetails?.review

    const [showReview, setShowReview] = useState(false)
    useEffect(() => {
        setShowReview(false)
    }, [])
    console.log(showReview);
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

        // Itera sobre cada producto en productDetails.prods y calcula el subtotal
        productDetails.prods.forEach(item => {
            total += item.quanty * item.price; // Multiplica la cantidad por el precio de cada producto
        });

        return total; // Devuelve el total de la compra
    };

    // Calcula el total de la compra
    const totalAmount = calculateTotal();






    return (
        <div className={j.modalOverlay}>

            <div className={j.modalContent}>
                <div className={j.header}>
                    <p>Codigo: {productDetails.code}</p>
                    <p>Fecha: {productDetails.date}</p>
                    <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
                    <p className={j.reseña} onClick={openReview}>
                        {
                            review.length > 0
                                ? (<div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="greenyellow" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </div>)
                                : ''
                        }
                    </p>
                </div>


                <div className={j.details}>
                    {
                        productDetails.prods.length > 0 ? <div>
                            {
                                productDetails.prods
                                    .map((item) => {
                                        return (
                                            <div>
                                                <div key={item.id} className={j.card}>
                                                    <div className={j.info}>Codigo: {item.code}</div>
                                                    <div className={j.info}>Nombre: {item.name} </div>
                                                    <div className={j.info}>Cantidad: {item.quanty} </div>
                                                    <div className={j.info}>precio:{item.price} </div>
                                                    <div className={j.info}>total: $ {item.quanty * item.price} </div>

                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div> : ''
                    }
                    <div className={j.totalAmount}>Monto total: $ {totalAmount}.00</div>
                    {showReview && <div>
                        {
                            review.length > 0
                                ? <div>
                                    {review.map(item => <div className={j.review}>
                                        <div className={j.reviewContainer}>
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
