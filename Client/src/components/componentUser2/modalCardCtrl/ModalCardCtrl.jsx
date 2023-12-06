

// Modal.js
import React, { useEffect, useState } from 'react';
import c from './ModalCardCtrl.module.css'
import { useDispatch } from 'react-redux';
import { dispatchOrder, abolish_Order } from '../../../redux/actions';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';


const ModalCardCtrl = ({ isOpen, onClose, productDetails, id }) => {
    const dispatch = useDispatch()


    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userEmail = userInfo?.email || ''

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
        // dispatch(acceptOrder_user2(id, userEmail))
    }

    const calculateTotal = () => {
        let total = 0;
        productDetails.prods.forEach(item => {
            total += item.quanty * item.price;
        });
        return total;
    };
    const totalAmount = calculateTotal();




    const generatePDF = () => {
        Swal.fire({
            title: '¿Desea generar el PDF?',
            text: 'Una vez generado, el archivo PDF se descargará automáticamente.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Generar PDF',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                const doc = new jsPDF();
                doc.text('Lista de Productos', 10, 10);

                // Contenido de la lista de productos
                let y = 30; // Posición vertical inicial para el contenido de los productos

                productDetails.prods.forEach(item => {
                    doc.text(`Código: ${item.code}`, 10, y);
                    doc.text(`Nombre: ${item.name}`, 10, y + 10);
                    doc.text(`Cantidad: ${item.quanty}`, 10, y + 20);
                    doc.text(`Precio: $${item.price}`, 10, y + 30);
                    doc.text(`Total: $${item.price * item.quanty}.00`, 10, y + 40);
                    doc.line(10, y + 45, 200, y + 45); // Línea separadora entre productos
                    y += 60; // Incremento en la posición vertical para el siguiente producto
                });
                doc.text(`Monto Total: $${totalAmount}.00`, 10, y + 50);

                doc.save('lista_productos.pdf');

                Swal.fire({
                    title: '¡PDF Generado!',
                    text: 'El archivo PDF se ha generado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                });
            }
        });
    };



    const finish_Order = () => {
        Swal.fire({
            title: 'Despachar orden',
            text: 'Tienes un máximo de 3 días para hacerle llegar la orden al administrador.',
            icon: 'info',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#3085d6',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes realizar la acción de despachar la orden si el usuario confirma
                dispatch(dispatchOrder(id, totalAmount));
                Swal.fire(
                    '¡Orden despachada!',
                    'La orden ha sido despachada correctamente.',
                    'success'
                );
            }
        });
    };

    const cancelOrder = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Una vez cancelada la orden volverá a estar disponible para otros usuarios y se eliminará de tus asignaciones.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cancelar orden',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes realizar la acción de cancelar la orden si el usuario confirma
                dispatch(abolish_Order(id, 'cancelar'));
                Swal.fire(
                    '¡Orden cancelada!',
                    'La orden ha sido cancelada correctamente.',
                    'success'
                );
            }
        });
    };


    return (
        <div className={c.modalOverlay}>

            <div className={c.modalContent}>
                <div className={c.header}>
                    <button onClick={() => onClose(false)}>X</button>

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
                                            <div key={item.id} className={c.card}>

                                                <div className={c.info}>Codigo: {item.code}</div>
                                                <div className={c.info}>Nombre: {item.name} </div>
                                                <div className={c.info}>Cantidad: {item.quanty} </div>
                                                <div className={c.info}>precio: $ {item.price} </div>
                                                <div className={c.info}>total: $ {item.price * item.quanty}.00 </div>


                                            </div>
                                        )
                                    })
                            }
                        </div>) : ''
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
                    <button onClick={() => finish_Order()}>Despachar</button>
                    <button onClick={() => cancelOrder()}>Cancelar</button>
                    <button onClick={() => generatePDF()}>Descargar PDF</button>
                </div>
            </div>
        </div>
    );
};

export default ModalCardCtrl;
