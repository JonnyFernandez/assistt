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
    const { codeOrder, stimate_date, pay, Prods, ReviewGeneral, User } = useSelector((state) => state.orderDetail);

    const [revisor1Approved, setRevisor1Approved] = useState(false);

    useEffect(() => {
        dispatch(getOrderDetail(id));
        return () => dispatch(cleanDetail());
    }, [dispatch, id]);

    const handleCheckboxChange = () => {
        // Cambia el estado del checkbox cuando se marca o desmarca
        setRevisor1Approved(!revisor1Approved);

        // Envía la solicitud para aprobar o desaprobar la orden según corresponda
        if (!revisor1Approved) {
            dispatch(putRevisor(id, { approved: true })).then(() => {
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
                console.error("Error al aprobar la orden por revisor 2:", error);
            });
        } else {
            dispatch(putRevisor(id, { approved: false })).then(() => {
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
                console.error("Error al desaprobar la orden:", error);
            });
        }
    };

    return (
        <div className={style.contenedor}>
            <h1 className={style.h1}></h1>
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
                    <div className={style.div}>
                        <h2 className={style.h2}>Forma de pago:</h2>
                        <p className={style.p}>{pay}</p>
                    </div>
                    <div className={style.div}>
                        <h2 className={style.h2}>Usuario solicitante:</h2>
                        <p className={style.productList}>Nombre: {User?.name}</p>
                        <p className={style.productList}>Email: {User?.email}</p>
                    </div>
                   
                    <div className={style.toggler}>
                        <input id="toggler-1" name="toggler-1" type="checkbox" checked={revisor1Approved} onChange={handleCheckboxChange} />
                        <label htmlFor="toggler-1">
                            <svg className={`${style["toggler-on"]} ${revisor1Approved ? style["toggler-on-visible"] : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <polyline className={style["path"]} points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                            </svg>
                            <svg className={`${style["toggler-off"]} ${!revisor1Approved ? style["toggler-off-visible"] : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <line className={style["path"]} x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                <line className={style["path"]} x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                            </svg>
                        </label>
                    </div>



                </div>
                <div className={style.bodyRight}>
                    {Prods && Prods.length > 0 && (
                        <div>
                            <h2 className={style.h2}>Detalles de los Productos:</h2>
                            <ul className={style.productList}>
                                {Prods?.map((producto, index) => (
                                    <li key={index} className={style.productListItem}>
                                        <p className={style.p}>Nombre: {producto?.name}</p>
                                        <p className={style.p}>Cantidad: {producto?.quanty}</p>
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





