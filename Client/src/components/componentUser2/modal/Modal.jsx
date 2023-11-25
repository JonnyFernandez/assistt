// Modal.js
import React, { useEffect, useState } from 'react';
import j from './Modal.module.css';

const Modal = ({ isOpen, onClose, productDetails }) => {
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

    return (
        <div className={j.modalOverlay}>

            <div className={j.modalContent}>
                <div className={j.header}>
                    <p>Codigo: {productDetails.code}</p>
                    <p>Fecha: {productDetails.date}</p>
                    <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
                    <p onClick={openReview}>reseña</p>
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
                                                    <div className={j.info}>Prod-Codigo: {item.code}</div>
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
                                            <div className={j.titleReview}>Reseña de Orden</div>
                                            <div className={j.reviewContent}>{item.review}</div>
                                            <div className={j.closeR} onClick={closeReview}>back</div>
                                        </div>
                                    </div>)}
                                </div>
                                : <div> <p>Esta Orden de compra no tiene reseña asociada</p>  </div>
                        }
                    </div>
                    }

                </div>
                <div className={j.modalButtons}>
                    <button onClick={() => onClose(true)}>Aceptar</button>
                    <button onClick={() => onClose(false)}>Rechazar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
