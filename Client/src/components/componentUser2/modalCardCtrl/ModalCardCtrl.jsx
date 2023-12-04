

// Modal.js
import React, { useEffect, useState } from 'react';
import c from './ModalCardCtrl.module.css'
import { useDispatch } from 'react-redux';
// import { acceptOrder_user2 } from '../../../redux/actions';

const ModalCardCtrl = ({ isOpen, onClose, productDetails, id }) => {
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
        // dispatch(acceptOrder_user2(id, userEmail))
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
        <div className={c.modalOverlay}>

            <div className={c.modalContent}>
                <div className={c.header}>
                    <p>Codigo: {productDetails.code}</p>
                    <p>Fecha: {productDetails.date}</p>
                    <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
                    <p className={c.reseña} onClick={openReview}>Ver Reseña</p>
                    <div>Monto total: ${totalAmount}.00</div>
                </div>


                <div className={c.details}>
                    {
                        productDetails.prods.length > 0 ? (<div>
                            {
                                productDetails.prods
                                    .map((item) => {
                                        return (
                                            <div>
                                                <div key={item.id} className={c.card}>
                                                    <div className={c.info}>Codigo: {item.code}</div>
                                                    <div className={c.info}>Nombre: {item.name} </div>
                                                    <div className={c.info}>Cantidad: {item.quanty} </div>
                                                    <div className={c.info}>precio: $ {item.price} </div>
                                                    <div className={c.info}>total: $ {item.price * item.quanty}.00 </div>
                                                </div>

                                            </div>
                                        )
                                    })
                            }
                        </div>) : <div></div>
                    }


                    {showReview && <div>
                        {
                            review.length > 0
                                ? <div>
                                    {review.map(item => <div className={j.review}>
                                        <div className={c.reviewContainer}>
                                            <div className={c.reviewContent}>{item.review}</div>
                                        </div>
                                    </div>)}
                                </div>
                                : <div> <p className={c.reviewContent}>Esta Orden de compra no tiene reseña asociada</p>  </div>
                        }
                    </div>
                    }

                </div>
                <div className={c.modalButtons}>
                    <button onClick={() => alert('acepta')}>Aceptar</button>
                    <button onClick={() => onClose(false)}>Ignorar</button>
                    {/* <button onClick={() => onClose(false)}>Descargar</button> */}
                </div>
            </div>
        </div>
    );
};

export default ModalCardCtrl;
