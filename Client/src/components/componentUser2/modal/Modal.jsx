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

    return (
        <div className={j.modalOverlay}>

            <div className={j.modalContent}>
                <div className={j.header}>
                    <p>Codigo: {productDetails.code}</p>
                    <p>Fecha: {productDetails.date}</p>
                    <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
                    <p className={j.reseña} onClick={openReview}>Ver Reseña</p>
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
                                                    <div className={j.info}>precio: $ 159.111 </div>
                                                    <div className={j.info}>total: $ 159.111 </div>
                                                </div>

                                            </div>
                                        )
                                    })
                            }
                        </div> : <div></div>
                    }

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
