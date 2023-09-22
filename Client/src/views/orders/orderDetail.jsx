import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetail, cleanDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { putRevisor2, putRevisor1 } from "../../redux/actions"; // Asegúrate de importar putRevisor1
import style from "./orderDetail.module.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { codeOrder, stimate_date, pay, User1, Prods, ReviewGeneral } = useSelector((state) => state.orderDetail);
    const [revisor1Approved, setRevisor1Approved] = useState(false); // Estado para verificar si revisor1 aprobó la orden
    const [revisor2Approved, setRevisor2Approved] = useState(false);
    const revisor1 = useSelector((state) => state.revisor1);

    useEffect(() => {
        dispatch(getOrderDetail(id));
        
        return () => dispatch(cleanDetail());
    }, [dispatch, id]);

    useEffect(() => {
        // Verifica si revisor1 aprobó la orden
        setRevisor1Approved(revisor1 === true);
    }, [revisor1]);

    const handleApproveOrder = () => {
        if (revisor1Approved) {
            // Verifica si el revisor 2 ya ha aprobado la orden
            if (revisor2Approved) {
                Swal.fire({
                    icon: 'info',
                    title: 'Info',
                    text: 'La orden ya ha sido aprobada por el revisor 2.',
                    position: 'center',
                    customClass: {
                        popup: 'custom-popup',
                    },
                    timer: 3000,
                });
            } else {
                // Pide confirmación al revisor 2
                Swal.fire({
                    title: '¿Estás seguro de aprobar la orden?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3CB371', // Color verde para confirmar
                    cancelButtonColor: '#FF4500', // Color naranja para cancelar
                    confirmButtonText: 'Sí, aprobar',
                    cancelButtonText: 'Cancelar',
                    position: 'center',
                    customClass: {
                        popup: 'custom-popup',
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Llama a la acción putRevisor2 para aprobar la orden
                        dispatch(putRevisor2(id, { approved: true })).then(() => {
                            // Actualiza el estado de revisor 2 para indicar que ha aprobado la orden
                            setRevisor2Approved(true);
    
                            Swal.fire({
                                icon: 'success',
                                title: 'Éxito',
                                text: 'La orden ha sido aprobada por el revisor 2.',
                                position: 'center',
                                customClass: {
                                    popup: 'custom-popup',
                                },
                                timer: 3000,
                            });
                        }).catch((error) => {
                            // Maneja los errores de la acción putRevisor2 aquí
                            console.error("Error al aprobar la orden por revisor 2:", error);
                        });
                    }
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El revisor 1 aún no ha aprobado la orden.',
                position: 'center',
                customClass: {
                    popup: 'custom-popup',
                },
                timer: 3000,
            });
        }
    };
    

    const handleRejectOrder = () => {
        // Llama a la acción putRevisor2 para desaprobar la orden
        dispatch(putRevisor2(id, { approved: false })).then(() => {
            // Realiza aquí cualquier lógica adicional que necesites cuando el revisor 2 desapruebe la orden
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'La orden ha sido desaprobada por el revisor 2.',
                position: 'center',
                customClass: {
                    popup: 'custom-popup',
                },
                timer: 3000,
            });
        }).catch((error) => {
            // Maneja los errores de la acción putRevisor2 aquí
            console.error("Error al desaprobar la orden por revisor 2:", error);
        });
    };
    
// ----------------------------------------------------------LO LLEVA JONNY---------------------------------------------
    // const handleApproveRevisor1 = () => {
    //     if (!revisor1Approved) {
    //         // Llama a la acción putRevisor1 para aprobar la orden por revisor1
    //         dispatch(putRevisor1(id, { approved: true })).then(() => {
    //             // Actualiza el estado de revisor 1 para indicar que ha aprobado la orden
    //             setRevisor1Approved(true);
    
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Éxito',
    //                 text: 'La orden ha sido aprobada por el revisor 1.',
    //                 position: 'center',
    //                 customClass: {
    //                     popup: 'custom-popup',
    //                 },
    //                 timer: 3000,
    //             });
    //         }).catch((error) => {
    //             // Maneja los errores de la acción putRevisor1 aquí
    //             console.error("Error al aprobar la orden por revisor 1:", error);
    //         });
    //     } else {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Error',
    //             text: 'El revisor1 ya ha aprobado la orden.',
    //             position: 'center',
    //             customClass: {
    //                 popup: 'custom-popup',
    //             },
    //             timer: 3000,
    //         });
    //     }
    // };

    // const handleRejectOrder = () => {
    //     // Llama a la acción putRevisor1 para desaprobar la orden
    //     dispatch(putRevisor2(id, { approved: false })).then(() => {
    //         // Realiza aquí cualquier lógica adicional que necesites cuando el revisor 2 desapruebe la orden
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Éxito',
    //             text: 'La orden ha sido desaprobada por el revisor 2.',
    //             position: 'center',
    //             customClass: {
    //                 popup: 'custom-popup',
    //             },
    //             timer: 3000,
    //         });
    //     }).catch((error) => {
    //         // Maneja los errores de la acción putRevisor2 aquí
    //         console.error("Error al desaprobar la orden por revisor 2:", error);
    //     });
    // };
                   {/* Botón para aprobar la orden por revisor1 */}
            {/* <button onClick={handleApproveRevisor1} disabled={revisor1Approved}> */}
                {/* Aprobar por Revisor 1
            </button> */}
    
    return (
        <div className={style.contenedor}>
            <h1 className={style.h1}>Detalles de la Orden</h1>
            <div className={style.contenedor1}>
                <div className={style.bodyLeft}>
                    <div className={style.div}>
                        <h2 className={style.hs}>Código de orden:</h2>
                        <p className={style.p}>{codeOrder}</p>
                    </div>  
                    <div className={style.div}>
                        <h2 className={style.h2}>Entrega estimada:</h2>
                        <p className={style.p}>{stimate_date}</p>
                    </div>
                    <div className={style.div} >
                        <h2 className={style.h2}>Forma de pago:</h2>
                        <p className={style.p}>{pay}</p>
                    </div> 
                    <div className={style.div}>
                        <h2 className={style.h2}>Usuario solicitante:</h2>
                        <p className={style.productList}>Nombre: {User1?.name}</p>
                        <p className={style.productList}>Código: {User1?.usercode}</p>
                    </div>
                    <div className={style.div}>
                    <h2 className={style.h2}>Revisor 1:</h2>
                    {revisor1Approved ? (
                        <p className={style.p}>Aprobó la orden</p>
                    ) : (
                        <p className={style.p}>No ha aprobado la orden</p>
                    )}
                </div>
                    <div className={style.div}>
                    <h2 className={style.h2}>Revisor 2:</h2>
                    {revisor2Approved ? (
                        <p className={style.p}>Aprobó la orden</p>
                    ) : (
                        <p className={style.p}>No ha aprobado la orden</p>
                    )}
                </div>
                
                    <div className={style.div}>
                    <button className={style.approveButton} onClick={handleApproveOrder}>Aprobar</button>
                        <button className={style.rejectButton} onClick={handleRejectOrder}>Desaprobar</button>
                    </div>
                </div>
                <div className={style.bodyRight}>
                    {Prods && (
                        <div>
                            <h2 className={style.h2}>Detalles de los Productos:</h2>
                            <ul className={style.productList}>
                                {Prods.map((producto, index) => (
                                    <li key={index} className={style.productListItem}>
                                        <p className={style.p}>Nombre: {producto.name}</p>
                                        <p className={style.p}>Precio: {producto.price}</p>
                                        <p className={style.p}>Cantidad: {producto.quanty}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {ReviewGeneral && ReviewGeneral.length > 0 && (
                        <div>
                            <h2 className={style.h2}>Reseñas</h2>
                            <ul className={style.reviewList}>
                                {ReviewGeneral.map((review, index) => (
                                    <li key={index} className={style.reviewListItem}>
                                        {review.review}
                                        <p className={style.p}>Usuario: {review.user?.name}</p>
                                        <p className={style.p}>Código de usuario: {review.user?.usercode}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>   
        </div>
    );
}

export default OrderDetail;





