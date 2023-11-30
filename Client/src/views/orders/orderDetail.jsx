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
    
    // Intentar cargar el  de aprobación desde LocalStorage
    const storedApprovalStatus = localStorage.getItem(`approvalStatus_${id}`);
    
    // Si se encuentra el estado almacenado en LocalStorage, úsalo
    if (storedApprovalStatus !== null) {
        setApprovalStatus(JSON.parse(storedApprovalStatus));
    }
    
    return () => dispatch(cleanDetail());
}, [dispatch, id]);

const handleApprove = () => {
    handleApproval(true);
  };
  
  const handleDisapprove = () => {
    handleApproval(false);
  };
  
  const handleApproval = (isApproved) => {
    const newApprovalStatus = isApproved;
  
    dispatch(putRevisor(id, { aprobado: newApprovalStatus }))
      .then(() => {
        const message = isApproved
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
                    <div className={style.header}>
        <h2 className={style.h2}>Usuario solicitante</h2>
        <h1 className={style.h1}>Detalles de la Orden</h1>
    </div>
            <div className={style.contenedor1}>
                <div className={style.bodyLeft}>
                    <div className={style.div}>
                      <p className={style.productList}>
                            <span className={style.keyword}>Orden: </span> {orderDetailState?.[0]?.codeOrder}
                        </p>
                    </div>
                    <div className={style.div}>
                       
                        <p className={style.productList}>
                            <span className={style.keyword}>Nombre: </span> {orderDetailState?.[0]?.User?.name}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Email: </span> {orderDetailState?.[0]?.User?.email}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Companía: </span> {orderDetailState?.[0]?.User?.company}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Dirección: </span> {orderDetailState?.[0]?.User?.address}
                        </p>
                        <p className={style.productList}>
                            <span className={style.keyword}>Teléfono: </span> {orderDetailState?.[0]?.User?.phone}
                        </p>
                        </div>

                    <div className={style.toggler}>
                        <button className={style.approveButton} onClick={handleApprove}>Aprobar</button>
                        <button className={style.disapproveButton} onClick={handleDisapprove}>Desaprobar</button>
                        </div>
                </div>
                <div className={style.bodyRight}>
                    {orderDetailState?.[0] && (
                        <div>
                            <h2 className={style.h2t}>Productos solicitados:</h2>
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
          {orderDetailState[0]?.ReviewGeneral?.length > 0 && (
                <div>
                    <h2 className={style.h2t}>Reseñas</h2>
                    <ul className={style.reviewList}>
                    {orderDetailState[0].ReviewGeneral.map((review, index) => (
                        <li key={index} className={style.reviewListItem}>
                        <p className={style.reviewText}>{review.review}</p>
                        <div>
                            <p className={style.p}><strong>Usuario:</strong> {orderDetailState[0].User.name}</p>
                            <p className={style.p}><strong>Email: </strong> {orderDetailState[0].User.email}</p>
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





