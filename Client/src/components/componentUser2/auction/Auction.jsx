import a from './Auction.module.css'
import SearchByCode from '../../componentOfUser1/histoyOrderProfile1/searchBycode/SearchByCode'
import CardUser2 from '../cardUser2/CardUser2'


import { getOrdersUser2 } from '../../../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginado from '../paginate/Paginate'


const Auction = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrdersUser2())
    }, [])
    const orders = useSelector((state) => state.Orders)
    const currentPage = useSelector((state) => state.currentPage)

    // PAGINATION VARS
    const cardsInPage = 5;
    const totalCards = orders.length;
    const lastIndex = currentPage * cardsInPage;
    const firstIndex = lastIndex - cardsInPage;
    const cardsShowed = orders.slice(firstIndex, lastIndex);


    return (
        <div className={a.auction}>
            <div className={a.header}>
                <select>
                    <option value="">Rubro</option>
                    <option value="">Almacen</option>
                    <option value="">Medico</option>
                    <option value="">Limpieza</option>
                    <option value="">Libreria</option>
                    <option value="">Otros</option>
                </select>
                <select>
                    <option value="">Min-Max</option>
                    <option value="">Max</option>
                    <option value="">Min</option>
                </select>
                <select>
                    <option value="">Status</option>
                    <option value="">Disponible</option>
                    <option value="">Capturadas</option>
                </select>
                <div>
                    <SearchByCode />
                </div>

            </div>

            <div className={a.body}>
                <div className={a.paginateContainer}>

                    <Paginado
                        cardsInPage={cardsInPage}
                        totalCards={totalCards}
                        currentPage={currentPage}
                    />
                </div>
                <div className={a.card}>
                    {
                        cardsShowed.length > 0
                            ? <div className={a.CardUser2Container}>
                                {
                                    cardsShowed.map(item => {
                                        return (
                                            <div key={item.id}>
                                                <CardUser2
                                                    code={item.codeOrder}
                                                    date={item.order_date.toString().slice(0, 10)}
                                                    status={item.providerCode}
                                                    prods={item.Prods}
                                                    review={item.ReviewGeneral}
                                                />
                                            </div>

                                        )
                                    })
                                }
                            </div>
                            : ''
                    }

                </div>
            </div>

        </div>
    )
}

export default Auction