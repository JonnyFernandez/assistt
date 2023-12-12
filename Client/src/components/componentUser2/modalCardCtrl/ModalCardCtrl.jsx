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
    const dispatching = productDetails?.dispatching
    // console.log(dispatching);
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
                    <div onClick={() => onClose(false)} className={c.closeM}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </div>

                    <p>Codigo: {productDetails.code}</p>
                    <p>Fecha: {productDetails.date}</p>
                    <p>Estado: {!productDetails.status ? 'Disponible' : 'No Disponible'}</p>
                    <p className={c.reseña} onClick={openReview}>{review.length > 0 ? <div><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="greenyellow" class="bi bi-card-text" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                    </svg></div> : ''}</p>
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


                    {showReview && <div >
                        {
                            review.length > 0
                                ? <div className={c.review}>

                                    {review.map(item => <div >
                                        <div className={c.reviewContainer}>
                                            <div className={c.reviewHeader}>
                                                <div className={c.titleReview}>Reseña</div>
                                                <div className={c.close} onClick={() => closeReview()}>X</div>
                                            </div>
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
                    {!dispatching && <button onClick={() => finish_Order()}>Despachar</button>}
                    {!dispatching && <button onClick={() => cancelOrder()}>Cancelar</button>}
                    {dispatching && <button onClick={() => generatePDF()}>Descargar PDF</button>}
                </div>
            </div>
        </div>
    );
};

export default ModalCardCtrl;
