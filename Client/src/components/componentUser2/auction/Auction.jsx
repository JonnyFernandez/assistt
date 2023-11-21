import a from './Auction.module.css'
// import SearchByCode from '../../componentOfUser1/histoyOrderProfile1/searchBycode/SearchByCode'
import CardUser2 from '../cardUser2/CardUser2'
import SearchCode_user2 from '../searchCode/searchCode'


import { getOrdersUser2, filter_By_Type_user2, filter_By_MinMax_user2, filter_By_Status_user2 } from '../../../redux/actions'
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

    const handleType = (e) => {
        const value = e.target.value
        dispatch(filter_By_Type_user2(value))
    }
    const handleMaxMin = (e) => {
        dispatch(filter_By_MinMax_user2(e.target.value))
    }
    const handleStatus = (e) => {
        dispatch(filter_By_Status_user2(e.target.value))
    }

    return (
        <div className={a.auction}>
            <div className={a.header}>
                <div className={a.rubro}>
                    <select onChange={handleType}>
                        <option value="all">Rubro</option>
                        <option value="almacen">Almacen</option>
                        <option value="medico">Medico</option>
                        <option value="limpieza">Limpieza</option>
                        <option value="libreria">Libreria</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>

                <div className={a.minMax}>
                    <select onChange={handleMaxMin}>
                        <option value="all">Min-Max</option>
                        <option value="MAX">Max</option>
                        <option value="MIN">Min</option>
                    </select>
                </div>

                <div className={a.status}>
                    <select onChange={handleStatus}>
                        <option value="All">Estado</option>
                        <option value="on">Disponible</option>
                        <option value="Off">No Disponible</option>
                    </select>
                </div>
                <div className={a.seach}>
                    <SearchCode_user2 />
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
                                                    date={item.order_date ? item.order_date.toString().slice(0, 10) : ''}

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