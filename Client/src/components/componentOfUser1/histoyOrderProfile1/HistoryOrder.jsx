import h from './HistoryOrder.module.css'
import CardHistoryOrder from './CardHistoryOrder'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderUserById } from '../../../redux/actions'
import OrdersDetailProfile from './OrdersDelailProfile'
import { useState } from 'react'


const HistoryOrder = () => {
    const dispatch = useDispatch();
    const Profile = useSelector((state) => state.profile);
    const Orders = useSelector((state) => state.OrdersUser);
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [updatedOrders, setUpdatedOrders] = useState([]);

    useEffect(() => {
        dispatch(getOrderUserById(Profile.id));
    }, [dispatch, Profile.id, updatedOrders]);

    const handleUpdateOrders = () => {
        dispatch(getOrderUserById(Profile.id));
        setUpdatedOrders([]);
    };

    const ordersToShow = Orders.filter(
        (el) => el.revisor1 === null || el.revisor1 === true
    ).filter((el) => el.active !== false);

    // logica para los fintrados
    const ordersApprove = Orders.filter(
        (el) => el.revisor1 === null || el.revisor1 === true
    ).filter((el) => el.active !== false);

    const ordersDisapprove = Orders.filter(
        (el) => el.revisor1 === null || el.revisor1 === true
    ).filter((el) => el.active !== false);

    const ordersPause = Orders.filter(
        (el) => el.revisor1 === null || el.revisor1 === true
    ).filter((el) => el.active !== false);
    // logica para los fintrados


    const handleCardClick = (order) => {
        setSelectedOrder(order);
        setShowOrderDetail(true);
    };



    return (
        <div className={h.history}>

            <div className={h.historyContainer}>


                <div className={h.historyHeader}>

                    <select>
                        <option>Filtrar por Estado</option>
                        <option>Pausadas</option>
                        <option>Aprobado</option>
                        <option>Desaprobado</option>
                    </select>

                    <input type="text" name="" id="" placeholder='Buscar por Code' />

                    <select>
                        <option> Filtrar por Rubro</option>
                        <option>Almacen</option>
                        <option>Libreria</option>
                        <option>medico</option>
                        <option>Limpieza</option>
                        <option>otros</option>
                    </select>

                </div>


                <div className={h.historyBody}>
                    <div className={h.BodyLeft}>
                        <div className={h.listContainer}>
                            {
                                ordersToShow && ordersToShow.map(item => (
                                    <CardHistoryOrder
                                        key={item.id}
                                        id={item.id}
                                        code={item.codeOrder}
                                        date={item.order_date}
                                        status={item.aprobado}
                                        providerC={item.providerCode}
                                        OnClick={() => handleCardClick(item)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className={h.BodyRight}>
                        {showOrderDetail && <OrdersDetailProfile order={selectedOrder} onUpdate={handleUpdateOrders} />}
                    </div>
                </div>


            </div>


        </div>
    )
}

export default HistoryOrder