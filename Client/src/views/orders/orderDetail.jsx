import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetail, cleanDetail, putRevisor, getOrders } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./orderDetail.module.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orderDetailState = useSelector((state) => state.orderDetail);
    const [approvalStatus, setApprovalStatus] = useState(false);

    // Obtener los datos de la orden y el estado de aprobación cuando se monta el componente
useEffect(() => {
    dispatch(getOrderDetail(id));
    
    // Intentar cargar el estado de aprobación desde LocalStorage
    const storedApprovalStatus = localStorage.getItem(`approvalStatus_${id}`);
    
    // Si se encuentra el estado almacenado en LocalStorage, úsalo
    if (storedApprovalStatus !== null) {
        setApprovalStatus(JSON.parse(storedApprovalStatus));
    }
    
    return () => dispatch(cleanDetail());
}, [dispatch, id]);

const handleCheckboxChange = () => {
    const newApprovalStatus = !approvalStatus;
    
    dispatch(putRevisor(id, { aprobado: newApprovalStatus }))
        .then(() => {
            const message = newApprovalStatus
                ? 'La orden ha sido aprobada.'
                : 'La orden ha sido desaprobada.';
            
            dispatch(getOrders());
            dispatch(getOrderDetail(id));
            
            // Actualiza el estado local de aprobación
            setApprovalStatus(newApprovalStatus);
            
            // Almacena el estado de aprobación en LocalStorage
            localStorage.setItem(`approvalStatus_${id}`, JSON.stringify(newApprovalStatus));
            
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: message,
                position: 'center',
                timer: 3000,
            });
        })
        .catch((error) => {
            console.error('Error al aprobar/desaprobar la orden:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al aprobar/desaprobar la orden.',
                position: 'center',
                timer: 3000,
            });
        });
};

    return (
        <div className={style.contenedor}>
            <h1 className={style.h1}>Detalles de la Orden</h1>
            <div className={style.contenedor1}>
                <div className={style.bodyLeft}>
                    <h2 className={style.h2}>Usuario solicitante:</h2>
                    <div className={style.div}>
                        <h2 className={style.h2}>Orden:</h2>
                        <p className={style.p}>{orderDetailState?.[0]?.codeOrder}</p>
                    </div>
                    <div className={style.div}>
                        <h2 className={style.h2}>Usuario solicitante:</h2>
                        <p className={style.productList}>
                            <span className={style.keyword}>Nombre:</span> {orderDetailState?.[0]?.User?.name}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Email:</span> {orderDetailState?.[0]?.User?.email}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Companía:</span> {orderDetailState?.[0]?.User?.company}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Dirección:</span> {orderDetailState?.[0]?.User?.address}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Teléfono:</span> {orderDetailState?.[0]?.User?.phone}
                        </p>
                        </div>

                    {/* <div className={style.div}>
                        <h2 className={style.h2}>Forma de pago:</h2>
                        <p className={style.p}>{orderDetailState?.[0]?.pay}</p>
                    </div> */}
                    <div className={style.toggler}>
                        <input
                            id="toggler-1"
                            name="toggler-1"
                            type="checkbox"
                            checked={approvalStatus}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="toggler-1">
                            <svg className={`${style["toggler-on"]} ${approvalStatus ? style["toggler-on-visible"] : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <polyline className={style["path"]} points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                            </svg>
                            <svg className={`${style["toggler-off"]} ${!approvalStatus ? style["toggler-off-visible"] : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <line className={style["path"]} x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                <line className={style["path"]} x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                            </svg>
                        </label>
                    </div>
                </div>
                <div className={style.bodyRight}>
                    {orderDetailState?.[0] && (
                        <div>
                            <h2 className={style.h2}>Productos solicitados:</h2>
                            <ul className={style.productList}>
                                {orderDetailState[0]?.Prods?.map((producto, index) => (
                                    <li key={index} className={style.productListItem}>
                                        <p className={style.pList}>Nombre: {producto.name}</p>
                                        <p className={style.pList}>Cantidad: {producto.quanty}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
            {orderDetailState?.[0]?.ReviewGeneral?.length > 0 && (
                <div>
                    <h2 className={style.h2}>Reseñas</h2>
                    <ul className={style.reviewList}>
                    {orderDetailState[0].ReviewGeneral.map((review, index) => (
                        <li key={index} className={style.reviewListItem}>
                        <p className={style.reviewText}>{review.review}</p>
                        <div>
                            <p className={style.p}><strong>Usuario:</strong> {review.user?.name}</p>
                            <p className={style.p}><strong>Email de usuario:</strong> {review.user?.email}</p>
                        </div>
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






