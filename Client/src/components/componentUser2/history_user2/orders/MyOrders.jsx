import x from './MyOrders.module.css'
import { history_order } from '../../../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import CardOrderCtrl from '../../cardOrderCtrl/CardOrderCtrl'

const MyOrders = () => {
    const dispatch = useDispatch()

    const userData = JSON.parse(localStorage.getItem('userInfo'))
    const email = userData?.email || ''
    useEffect(() => {
        dispatch(history_order(email))
        // return () => alert('cerrando');
    }, [])

    const data = useSelector(state => state.historyOrder)





    return (
        <div className={x.history}>
            <div className={x.header}></div>
            <div className={x.body}>

                {
                    data.length > 0
                        ? <div className={x.CardUser2Container}>
                            {
                                data.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <CardOrderCtrl
                                                code={item.codeOrder}
                                                date={item.order_date ? item.order_date.toString().slice(0, 10) : ''}
                                                id={item.id}
                                                status={item.providerCode}
                                                prods={item.Prods}
                                                review={item.ReviewGeneral}
                                            />
                                        </div>

                                    )
                                })
                            }
                        </div>
                        : 'No tienes Cotizaciones Aceptadas por el Admin'
                }


            </div>
        </div>
    )
}

export default MyOrders