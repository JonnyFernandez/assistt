import { useEffect, useState } from 'react'
import w from './HistoryUser2.module.css'
import History_orders from './history_/History_orders'
import More_Seller from './more_seller/More_Seller'
import MyOrders from './orders/MyOrders'
import { useDispatch, useSelector } from 'react-redux'
import { more_seller, history_order } from '../../../redux/actions'


const HistoryUser2 = () => {
    const dispatch = useDispatch()

    const [showHistory, setShowHistory] = useState(false)
    const [showMoreSeller, setshowMoreSeller] = useState(false)
    const [showOrders, setshowOrders] = useState(false)

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const email = userInfo?.email || ''

    useEffect(() => {
        setShowHistory(true)
        dispatch(more_seller())
        dispatch(history_order(email))
    }, [])



    const info = useSelector(state => state.moreSeller)
    console.log(info);
    const orderSelled = useSelector(state => state.historyOrder)


    const totalMonto = orderSelled.reduce((accumulator, currentOrder) => {
        // Convierte el valor de 'monto' a número antes de sumarlo
        const montoAsNumber = parseFloat(currentOrder.monto);

        // Verifica si la conversión fue exitosa antes de sumarlo
        if (!isNaN(montoAsNumber)) {
            return accumulator + montoAsNumber;
        } else {
            // Si hay algún valor no numérico, puedes manejarlo de alguna manera, por ejemplo, ignorándolo o tratándolo como 0
            return accumulator;
        }
    }, 0);


    const selector = (data) => {
        switch (data) {
            case "History":
                setShowHistory(true)
                setshowMoreSeller(false)
                setshowOrders(false)
                break;
            case "Seller":
                setShowHistory(false)
                setshowMoreSeller(true)
                setshowOrders(false)
                break;
            case "Orders":
                setShowHistory(false)
                setshowMoreSeller(false)
                setshowOrders(true)
                break;
        }
    }


    return (
        <div className={w.history}>
            <div className={w.header} >
                <select onChange={(e) => selector(e.target.value)}>
                    <option value="History">Opciones</option>
                    <option value="History">Historial</option>
                    <option value="Seller">Mas venidos</option>
                    <option value="Orders">Ordenes</option>
                </select>
                <div>Historial</div>
                <div>Monto $ {totalMonto}.00</div>
            </div>

            <div className={w.body}>
                <div className={w.bodyRight}>
                    {showHistory && <History_orders />}
                    {showMoreSeller && <More_Seller products={info} />}
                    {showOrders && <MyOrders order={orderSelled} />}

                </div>
            </div>
        </div>
    )
}

export default HistoryUser2