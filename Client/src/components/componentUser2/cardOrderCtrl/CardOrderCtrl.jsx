import v from './CardOrderCtrl.module.css'
import ModalCardCtrl from '../modalCardCtrl/ModalCardCtrl'
import { useState } from 'react'


const CardOrderCtrl = ({ code, date, id, status, prods, review, dispatching }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const all = { code, date, status, prods, review, id, dispatching }

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
            <div className={v.header}>{dispatching ? '' : 'pendiente'}</div>
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

            </div>

        </div>
    )
}



export default CardOrderCtrl