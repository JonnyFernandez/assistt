import React, { useEffect, useState } from 'react';
import j from '../price/ModalPrice.module.css';


const ModalPrice = ({ isOpen, onClose, productDetails}) => {

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
    onClose(); 
  };

  if (!isOpen || !productDetails) {
    return null;
  }


  return (
    <div className={j.modalOverlay}>
      <div className={j.modalContent}>
        <div className={j.header}>
          <p>Codigo: {productDetails.codeOrder}</p>
          <p>Fecha: {productDetails.order_date}</p>
          <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
          <p className={j.reseña} onClick={openReview}>
            Ver Reseña
          </p>
        </div>

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
                  <p className={j.reviewContent}> Esta Orden de compra no tiene reseña asociada</p>
                </div>
              )}
            </div>
          )}

        <div className={j.details}>
          {productDetails.Prods && productDetails.Prods.length > 0 ? (
            <div>
              {productDetails.Prods.map((item) => (
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

        </div>
        <div className={j.modalButtons}>
          <button onClick={closeReview}>Cerrar Detalle</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPrice;



