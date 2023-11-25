import React, { useState, useEffect } from 'react';
import CardDetailsList from './CardDetailHistory';
import d from './OrderDetail.module.css';
import { pause_order, getOrderUserById } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const OrdersDetailProfile = ({ order, onUpdate }) => {



    const dispatch = useDispatch();

    let status = order.revisor1 === false ? 'Pausada' : order.aprobado ? 'Aprobado' : order.aprobado === false ? 'Orden rechazada' : order.revisor1 === null ? 'Pendiente' : order.revisor1 === true ? 'Reactivada' : ''

    // const handleRevisor1 = (e) => {
    //     if (order.aprobado === true && e.target.value === 'pause') {
    //         return alert("esta orde ya fue aprobada")
    //     }
    //     dispatch(pause_order(order.id, e.target.value)).then(() => {
    //         onUpdate();
    //     });
    // };
    const handleRevisor1 = (e) => {
        if (order.aprobado === true && e.target.value === 'pause') {
            return alert("Esta orden ya fue aprobada");
        }
        let value = e.target.value;
        let message = value === 'pause' ? "Pausar" : value === 'resume' ? "Reanudar" : value === 'delete' ? "Eliminar" : ''

        const pauseOrderConfirmation = async () => {
            const confirmation = await Swal.fire({
                title: '¿Estás seguro?',
                text: `¿Deseas ${message} esta orden?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: `Sí, ${message}`,
                cancelButtonText: 'Cancelar',
            });

            if (confirmation.isConfirmed) {
                dispatch(pause_order(order.id, e.target.value)).then(() => {
                    onUpdate();
                });
            }
        };

        pauseOrderConfirmation();
    };

    return (
        <div className={d.order}>
            <div className={d.header}>
                <div className={d.header1}>
                    <div>Estado</div>
                    <div>{status}</div>
                    <select onChange={handleRevisor1}>

                        <option value=''>administrar</option>

                        {order.revisor1 || order.revisor1 === null ? <option value='pause'>Pausar</option> : ''}
                        {order.revisor1 === false ? <option value='resume'>Reanudar</option> : ''}

                        <option value="delete">Eliminar</option>
                    </select>
                </div>

                <div className={d.header2}>
                    <div>Cod: {order.codeOrder} </div>
                    <div> <small>{order.order_date}</small> </div>
                </div>

                <div className={d.header3}>
                    <div>{order.User.name}</div>
                    <div>{order.User.email}</div>
                </div>

            </div>
            <div className={d.body}>
                <div>
                    {order && order.Prods.map(item => (
                        <div key={item.id}>
                            <CardDetailsList name={item.name} quanty={item.quanty} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default OrdersDetailProfile;



























