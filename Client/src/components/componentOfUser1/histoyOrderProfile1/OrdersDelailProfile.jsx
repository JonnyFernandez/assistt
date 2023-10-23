import React from 'react';
import CardDetailsList from './CardDetailHistory';
import d from './OrderDetail.module.css'

const OrdersDetailProfile = ({ order }) => {
    let status = order.aprobado ? 'Aprobado' : order.aprobado === false ? 'Orden rechazada' : 'Pendiente';
    console.log(order);
    return (
        <div className={d.order}>

            <div className={d.header}>

                <div className={d.header1}>

                    <div>Estado</div>
                    <div>{status}</div>

                    <select name="" id="">
                        <option value="">administar</option>
                        <option value="">Pausar</option>
                        <option value="">reanudar</option>
                        <option value="">Eliminar</option>
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







            {/* 
            <button>Eliminar</button>
            <button>Editar</button> */}
        </div>
    );
};

export default OrdersDetailProfile;
