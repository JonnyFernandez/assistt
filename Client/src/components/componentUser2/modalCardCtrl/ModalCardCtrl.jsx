// Modal.js
import React, { useEffect, useState } from 'react';
import c from './ModalCardCtrl.module.css'
import { useDispatch } from 'react-redux';
import { dispatchOrder, abolish_Order } from '../../../redux/actions';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';
import logo from '../../../assets/imageLogo/LOGO4.png'


const ModalCardCtrl = ({ isOpen, onClose, productDetails, id }) => {
    const dispatch = useDispatch()
    const [numeroRemito, setNumeroRemito] = useState(1); // Número consecutivo de remito


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
                const margin = 20;
                const lineHeight = 12; // Se aumentó la altura de línea
                const titleSpacing = 10; // Espaciado adicional entre títulos y contenido
    
                // Configuración de la hoja
                const pageWidth = doc.internal.pageSize.width;
                const pageHeight = doc.internal.pageSize.height;
    
                // Agregar bordes alrededor del remito
                doc.setDrawColor(0); // Negro
                doc.setLineWidth(0.5);
                doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin, 'D');
    
                // Agregar el logo en la parte superior izquierda del PDF
                const logoImg = new Image();
                logoImg.src = logo;
                doc.addImage(logoImg, 'PNG', margin + 8, margin + 10, 50, 35); // Ajusta el tamaño y la posición según sea necesario
    
                // Información del remito (lado izquierdo)
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(12);
                doc.text('Remito N°: 12345', margin + 20, margin + 10);
                doc.text('Fecha: 14/12/2023', margin + 20, margin + 15);
    
                // Línea divisoria entre el logo y la información del remito
                doc.setLineWidth(0.2);
                doc.line(margin, margin + 50, pageWidth - margin, margin + 50);
    
                // Información del cliente (lado derecho)
                doc.setFont('helvetica', 'normal');
                const clienteX = pageWidth / 2 + 15;
                const clienteY = margin + 10;
                doc.text('Datos del Cliente', clienteX, clienteY);
                doc.text('Nombre: Juan Pérez', clienteX, clienteY + lineHeight);
                doc.text('Dirección: Calle 123, Ciudad', clienteX, clienteY + 2 * lineHeight);
    
                // Espaciado adicional entre el cliente y los detalles de los productos
                doc.text('', clienteX, clienteY + 3 * lineHeight + titleSpacing);
    
                // Detalles de la compra (lado derecho)
                let y = margin + 40 + titleSpacing; // Posición vertical inicial para el contenido del remito
    
                // Detalles de la compra (lado izquierdo)
                doc.setFontSize(16);  // Tamaño de letra más grande
                doc.setFont('helvetica', 'bold');  // Fuente en negrita
                doc.text('Detalle de Productos', margin + 60, y + lineHeight);  // Ajusta la posición vertical según sea necesario
                y += 2 * lineHeight;  // Incremento en la posición vertical

    
                productDetails.prods.forEach(item => {
                    // Código
                    doc.setFont('helvetica', 'bold');
                    doc.text('Código:', margin + 10, y);
                    doc.setFont('helvetica', 'normal');
                    doc.text(item.code, margin + 40, y);
    
                    // Nombre
                    y += lineHeight;
                    doc.setFont('helvetica', 'bold');
                    doc.text('Nombre:', margin + 10, y);
                    doc.setFont('helvetica', 'normal');
                    doc.text(item.name, margin + 40, y);
    
                    // Cantidad
                    y += lineHeight;
                    doc.setFont('helvetica', 'bold');
                    doc.text('Cantidad:', margin + 10, y);
                    doc.setFont('helvetica', 'normal');
                    doc.text(item.quanty.toString(), margin + 40, y);
    
                    // Precio
                    y += lineHeight;
                    doc.setFont('helvetica', 'bold');
                    doc.text('Precio:', margin + 10, y);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`$${item.price}`, margin + 40, y);
    
                    // Total
                    y += lineHeight;
                    doc.setFont('helvetica', 'bold');
                    doc.text('Total:', margin + 10, y);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`$${item.price * item.quanty}.00`, margin + 40, y);
    
                    // Separación entre productos
                    y += 5 * lineHeight;
                });
    
                // Agregar información adicional, como el monto total
                doc.text(`Monto Total: $${totalAmount}.00`, margin + 10, pageHeight - margin - 15);
    
                // Guardar y descargar el PDF
                doc.save('remito.pdf');
    
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
                    {  productDetails.prods.length > 0 ? (<div>
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
