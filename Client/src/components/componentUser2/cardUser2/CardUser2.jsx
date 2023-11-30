// CardUser2.js
import React, { useState } from 'react';
import t from './CardUser2.module.css';
import Modal from '../modal/Modal';

const CardUser2 = ({ code, date, status, prods, review, id }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const all = { code, date, status, prods, review }


    const handleCloseModal = (action) => {
        console.log(`Producto ${action ? 'aceptado' : 'rechazado'}`);
        setIsModalOpen(false);
    };
    const currentStatus = !status ? 'Disponible' : 'No disponible';
    // console.log(review);

    return (
        <div>
            <div
                className={currentStatus === 'Disponible' ? `${t.card_green}` : `${t.card_blue}`}
                onClick={() => handleCardClick(all)}
            >
                <div>Fecha: {date}</div>
                <div>Orden: {code}</div>
                <div>{currentStatus}</div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} productDetails={selectedProduct} id={id}
            />
        </div>
    );
};

export default CardUser2;
