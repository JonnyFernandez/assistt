import x from './Prod.module.css'
import CardProd from './cardProd/CardProd'
import { useSelector, useDispatch } from 'react-redux'
import Paginado from '../paginate/Paginate'
import { getProdUser2 } from '../../../redux/actions'
import { useEffect } from 'react'
import SearchBar from './searchBarProd/SearchBarProd'


const Prod = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProdUser2())
    }, [])
    const prod = useSelector(state => state.ProductUser2)

    const currentPage = useSelector((state) => state.currentPage)

    // PAGINATION VARS
    const cardsInPage = 10;
    const totalCards = prod.length;
    const lastIndex = currentPage * cardsInPage;
    const firstIndex = lastIndex - cardsInPage;
    const cardsShowed = prod.slice(firstIndex, lastIndex);






    return (
        <div className={x.prod}>
            <div className={x.header}>
                <div>Productos</div>
                <div>Agregar</div>

                <SearchBar />
                <select name="" id="">
                    <option value="">Filtros</option>
                    <option value="">Sin stock</option>
                    <option value="">max</option>
                    <option value="">min</option>
                </select>
            </div>
            <div className={x.body}>
                <div className={x.bodyHeader}>
                    <Paginado
                        cardsInPage={cardsInPage}
                        totalCards={totalCards}
                        currentPage={currentPage}
                    />
                </div>
                <div className={x.bodyCard}>
                    {
                        prod.length > 0
                            ? <div className={x.cardContailer} >
                                {
                                    cardsShowed.map(item =>

                                        <CardProd
                                            key={item.id}
                                            code={item.code}
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            description={item.description}
                                            supplie_type={item.supplie_type}
                                            active={item.active}
                                            stock={item.stock}
                                        />

                                    )

                                }
                            </div>
                            : <div>No hay productos para mostrar</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Prod