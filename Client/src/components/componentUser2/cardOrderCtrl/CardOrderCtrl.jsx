import v from './CardOrderCtrl.module.css'
import ModalCardCtrl from '../modalCardCtrl/ModalCardCtrl'
import { useState } from 'react'


const CardOrderCtrl = ({ code, date, id, status, prods, review }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const all = { code, date, status, prods, review, id }

    const handleCloseModal = (action) => {
        console.log(`Producto ${action ? 'aceptado' : 'rechazado'}`);
        setIsModalOpen(false);
    };
    const currentStatus = !status ? 'Disponible' : 'No disponible';

    const sendOrder = () => {
        alert("despacha la order")
    }
    const cancelOrder = () => {
        alert('cancela todo')
    }

    return (
        <div className={v.cardCtrl}>
            <div className={v.header}>Aprobada</div>
            <div
                className={currentStatus === 'Disponible' ? `${vt.card_green}` : `${v.card_blue}`}
                onClick={() => handleCardClick(all)}
            >
                <div>Fecha: {date ? date : "aaaa - mm - dd"} </div>
                <div>Orden: {code ? code : 'AL-1111'} </div>
            </div>
            <ModalCardCtrl isOpen={isModalOpen} onClose={handleCloseModal} productDetails={selectedProduct} id={id}
            />
            <div className={v.footer}>
                <button className={v.sendBut} onClick={() => sendOrder()}>Despachar</button>
                <button className={v.cancelBut} onClick={() => cancelOrder()}>Cancelar</button>
            </div>

        </div>
    )
}



export default CardOrderCtrl