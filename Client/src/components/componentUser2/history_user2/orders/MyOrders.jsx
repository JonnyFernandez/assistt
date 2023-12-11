import x from './MyOrders.module.css'
import CardOrderCtrl from '../../cardOrderCtrl/CardOrderCtrl'
import SearchBarSelled from './searchBarSelled/SearchSelled'

const MyOrders = ({ order }) => {


    return (
        <div className={x.history}>
            <div className={x.header}>
                <div className={x.title}>Orderes Despachadas</div>

                <div className={x.headerSearch}>
                    <SearchBarSelled />
                </div>

            </div>
            <div className={x.body}>

                {
                    order.length > 0
                        ? <div className={x.CardUser2Container}>
                            {
                                order.map(item => {
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
                        : <div className={x.message}>Orden no encontrada</div>
                }


            </div>
        </div>
    )
}

export default MyOrders