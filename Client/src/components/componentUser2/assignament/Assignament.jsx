import a from './Assignament.module.css'
import CardUser2 from '../cardUser2/CardUser2'
import { useSelector, useDispatch } from 'react-redux'
import { getOrdersUser2 } from '../../../redux/actions'
import { useEffect } from 'react'



const Assignament = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrdersUser2())
    }, [])

    const orders = useSelector((state) => state.Orders)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userEmail = userInfo?.email || ''



    const myOrders = orders.filter(item => item.aprobado && item.active && item.providerCode === userEmail && !item.quotes)

    console.log(myOrders);
    return (
        <div className={a.Assignament}>
            <div className={a.AssignamentHeader}>
                <h1>Mis Asignaciones</h1>
            </div>
            <div className={a.AssignamentBody}>
                <div className={a.card}>
                    {
                        myOrders.length > 0
                            ? <div className={a.CardUser2Container}>
                                {
                                    myOrders.map(item => {
                                        return (
                                            <div key={item.id}>
                                                <CardUser2
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
                            : 'No tienes Ordenes asignadas'
                    }

                </div>
            </div>
        </div>
    )
}

export default Assignament