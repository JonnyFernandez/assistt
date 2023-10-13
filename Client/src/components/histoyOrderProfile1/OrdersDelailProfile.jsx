import React from 'react';

const OrdersDetailProfile = ({ order }) => {
    return (
        <div>
            {order ? (
                <div>
                    <h4>Detalles de la orden</h4>
                    <p>ID de la orden: {order.id}</p>
                    {/* Otros detalles de la orden */}
                </div>
            ) : (
                <p>Selecciona una orden para ver los detalles.</p>
            )}
        </div>
    );
};

export default OrdersDetailProfile;





