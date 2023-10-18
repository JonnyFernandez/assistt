import h from './HistoryOrder.module.css'
import CardHistoryOrder from './CardHistoryOrder'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderUserById } from '../../../redux/actions'
import OrdersDetailProfile from './OrdersDelailProfile'
import { useState } from 'react'



const HistoryOrder = () => {
    const dispatch = useDispatch()
    const Profile = useSelector((state) => state.profile)
    const id = Profile.id
    useEffect(() => {
        dispatch(getOrderUserById(id))
    }, [])

    const Orders = useSelector((state) => state.OrdersUser)

    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleCardClick = (order) => {
        setSelectedOrder(order);
        setShowOrderDetail(true);
    };


    return (
        <div className={h.historyOrder}>
            <div className={h.historyOrderHeader}>
                <div>HistoryOrder</div>
            </div>

            <div className={h.historyOrderBody}>
                <div className={h.historyOrderBodyLeft}>

                    <div className={h.listOrderHeader}>
                        <h3>Ordenes</h3>
                    </div>


                    <div className={h.listContainer}>
                        {
                            Orders && Orders.map(item => (
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
                <div className={h.historyOrderBodyRight}>
                    {showOrderDetail && <OrdersDetailProfile order={selectedOrder} />}
                </div>

            </div>



        </div>
    )
}

export default HistoryOrder