import React, { useEffect, useState } from 'react';
import j from '../price/ModalPrice.module.css';
import { useDispatch } from 'react-redux';
import { approveQuote, disapproveQuote } from '../../../redux/actions';

const ModalPrice = ({ isOpen, onClose, productDetails, id }) => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userEmail = userInfo?.email || '';

  const review = productDetails?.review || [];
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    setShowReview(false);
  }, [productDetails]);

  const openReview = () => {
    setShowReview(true);
  };

  const closeReview = () => {
    setShowReview(false);
    onClose(); // Cierra el modal al hacer clic en "Cerrar Detalle"
  };

  if (!isOpen || !productDetails) {
    return null;
  }

  const handleQuoteAction = (approve) => {
    if (approve) {
      dispatch(approveQuote(id, userEmail));
    } else {
      dispatch(disapproveQuote(id));
    }

    onClose(false);
  };

  return (
    <div className={j.modalOverlay}>
      <div className={j.modalContent}>
        <div className={j.header}>
          <p>Codigo: {productDetails.code}</p>
          <p>Fecha: {productDetails.date}</p>
          <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
          <p className={j.reseña} onClick={openReview}>
            Ver Reseña
          </p>
        </div>

        <div className={j.details}>
          {productDetails.prods && productDetails.prods.length > 0 ? (
            <div>
              {productDetails.prods.map((item) => (
                <div key={item.id} className={j.card}>
                  <div className={j.info}>Codigo: {item.code}</div>
                  <div className={j.info}>Nombre: {item.name} </div>
                  <div className={j.info}>Cantidad: {item.quanty} </div>
                  <div className={j.info}>precio: $ {item.price} </div>
                  <div className={j.info}>total: $ {item.price * item.quanty}.00 </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No hay detalles de la orden disponibles.</div>
          )}

          {showReview && (
            <div>
              {Array.isArray(review) && review.length > 0 ? (
                <div>
                  {review.map((item) => (
                    <div key={item.id} className={j.review}>
                      <div className={j.reviewContainer}>
                        <div className={j.reviewContent}>{item.review}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <p className={j.reviewContent}>Esta Orden de compra no tiene reseña asociada</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={j.modalButtons}>
          <button onClick={closeReview}>Cerrar Detalle</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPrice;



