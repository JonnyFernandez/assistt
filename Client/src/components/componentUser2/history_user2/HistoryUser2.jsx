import { useEffect, useState } from 'react'
import w from './HistoryUser2.module.css'
import History_orders from './history_/History_orders'
import More_Seller from './more_seller/More_Seller'
import MyOrders from './orders/MyOrders'

const HistoryUser2 = () => {

    const [showHistory, setShowHistory] = useState(false)
    const [showMoreSeller, setshowMoreSeller] = useState(false)
    const [showOrders, setshowOrders] = useState(false)

    useEffect(() => {
        setShowHistory(true)
    }, [])

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
                    <option value="">Opciones</option>
                    <option value="History">Historial</option>
                    <option value="Seller">Mas venidos</option>
                    <option value="Orders">Ordenes</option>
                </select>
                <div>Historial De Ventas</div>
                <div>$ 00.00</div>
            </div>
            <div className={w.body}>

                <div className={w.bodyRight}>
                    {showHistory && <History_orders />}
                    {showMoreSeller && <More_Seller />}
                    {showOrders && <MyOrders />}

                </div>
            </div>
        </div>
    )
}

export default HistoryUser2