import x from './Prod.module.css'
import CardProd from './cardProd/CardProd'
import { useSelector, useDispatch } from 'react-redux'
import Paginado from '../paginate/Paginate'
import { getProdUser2, prodStock, filterByPrice } from '../../../redux/actions'
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
    const cardsInPage = 15;
    const totalCards = prod.length;
    const lastIndex = currentPage * cardsInPage;
    const firstIndex = lastIndex - cardsInPage;
    const cardsShowed = prod.slice(firstIndex, lastIndex);


    const handleFilter = (e) => {
        let value = e.target.value
        // console.log(value);
        if (value === "all") dispatch(prodStock(value))
        if (value === "No_Stock") dispatch(prodStock(value))
        if (value === "max") dispatch(filterByPrice(value))
        if (value === "min") dispatch(filterByPrice(value))
    }



    const Refresh = () => {
        dispatch(getProdUser2())
        alert('hola')
    }


    return (
        <div className={x.prod}>
            <div className={x.header}>

                <div className={x.divA} onClick={() => Refresh()}>Productos 🔄</div>

                <div className={x.divH}>
                    <SearchBar />
                    <select name="" id="" onChange={handleFilter}>
                        <option value="all">Filtros</option>
                        <option value="No_Stock">Sin Stock</option>
                        <option value="max">Precio + </option>
                        <option value="min">Precio - </option>
                    </select>
                </div>
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
                                            id={item.id}
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