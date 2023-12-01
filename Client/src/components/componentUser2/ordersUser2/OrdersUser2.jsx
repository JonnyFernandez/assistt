import m from './OrderUser2.module.css'
import CardOrderCtrl from '../cardOrderCtrl/CardOrderCtrl'


const OrderUser2 = () => {

    const myOrders = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <div className={m.orderControl}>
            <div className={m.header}>
                <h2>Cotizaciones aprobadas</h2>

            </div>

            <div className={m.body}>
                <div className={m.paginateContainer}>
                    <h3>aca pongo cualquier cosas porque soy piola</h3>

                </div>
                <div className={m.card}>
                    {
                        myOrders.length > 0
                            ? <div className={m.CardUser2Container}>
                                {
                                    myOrders.map(item => {
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

        </div>
    )
}

export default OrderUser2