import React from 'react';
import CardDetails_list from './CardDetailHistory';

const OrdersDetailProfile = ({ order }) => {
    console.log(order);

    return (
        <div className='orderDetail'>
            <div className='orderDetailHeader'>
                <div>{order.User.name}</div>
                <div>{order.User.email}</div>
                <div>{order.User.email}</div>
            </div>

            <div className='detailContainer'>


                {
                    order && order.Prods.map(item => {
                        return (
                            <div>
                                <CardDetails_list name={item.name} quanty={item.quanty} />
                            </div>
                        )
                    })
                }

                {/* {order ? (
                    <div>
                        <h4>Detalles de la orden</h4>
                        <p>ID de la orden: {order.id}</p>
                        <p>{user}</p>

                    </div>
                ) : (
                    <p>Selecciona una orden para ver los detalles.</p>
                )} */}
            </div>
        </div>
    );
};

export default OrdersDetailProfile;





