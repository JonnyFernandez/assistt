import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetail, cleanDetail, putRevisor } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./orderDetail.module.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orderDetailState = useSelector((state) => state.orderDetail);

    // Obtener los datos de la orden cuando se monta el componente
    useEffect(() => {
        dispatch(getOrderDetail(id));  
        return () => dispatch(cleanDetail());
    }, [dispatch, id]);

   
    const [Approved, setApproved] = useState(false);

    const handleCheckboxChange = () => {
        const newApprovalStatus = !orderDetailState?.[0]?.revisor1;
    
        // Llama a la acción putRevisor para aprobar o desaprobar la orden según el nuevo estado
        dispatch(putRevisor(id, { revisor1: newApprovalStatus }))
            .then(() => {
                const message = newApprovalStatus
                    ? 'La orden ha sido aprobada.'
                    : 'La orden ha sido desaprobada.';
    
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: message,
                    position: 'center',
                    customClass: {
                        popup: 'custom-popup',
                    },
                    timer: 3000,
                });
            })
            .catch((error) => {
                console.error("Error al aprobar/desaprobar la orden:", error);
            });
    };
    

    return (
        <div className={style.contenedor}>
            <h1 className={style.h1}>Detalles de la Orden</h1>
            <div className={style.contenedor1}>
                <div className={style.bodyLeft}>
                    <h2 className={style.h2}>Usuario solicitante:</h2>
                    <div className={style.div}>
                        <h2 className={style.h2}>Entrega estimada:</h2>
                        <p className={style.p}>{orderDetailState?.[0]?.stimate_date}</p>
                    </div>
                    <div className={style.div}>
                        <h2 className={style.h2}>Forma de pago:</h2>
                        <p className={style.p}>{orderDetailState?.[0]?.pay}</p>
                    </div>
                    <div className={style.div}>
                        <h2 className={style.h2}>Usuario solicitante:</h2>
                        <p className={style.productList}>Nombre: {orderDetailState?.[0]?.User?.name}</p>
                        <p className={style.productList}>Email: {orderDetailState?.[0]?.User?.email}</p>
                    </div>
                    <div className={style.toggler}>
                        <input
                            id="toggler-1"
                            name="toggler-1"
                            type="checkbox"
                            checked={Approved}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="toggler-1">
                            <svg className={`${style["toggler-on"]} ${Approved ? style["toggler-on-visible"] : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <polyline className={style["path"]} points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                            </svg>
                            <svg className={`${style["toggler-off"]} ${!Approved ? style["toggler-off-visible"] : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
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
                                        {review.review}
                                        <p className={style.p}>Usuario: {review.user?.name}</p>
                                        <p className={style.p}>Email de usuario: {review.user?.email}</p>
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






