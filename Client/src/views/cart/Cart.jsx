import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import L from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Card2 from '../../components/card2/Card2'
import { useState, useEffect } from 'react'
import { codeToOrder } from '../../utils/codes'
import { getUser1, createOrder, cleanCart } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate = useNavigate()

    const codeOrder = codeToOrder()

    const dispatch = useDispatch()
    const myCart = useSelector(state => state.cart)


    const prod_ID = myCart.map(item => item.id)

    useEffect(() => {
        dispatch(getUser1("H3474")) //le mando el userCode de forma manual!!! hay que mejorar
    }, [])

    const profile = useSelector(state => state.profile)

    const idUser1 = profile[0]?.id

    // console.log(idUser1);

    const [input, setInput] = useState({
        codeOrder: codeOrder,
        stimate_date: "",
        pay: "efectivo",
        userId: idUser1,
        prodId: prod_ID
    })
    // console.log(input);

    const handleChange = (e) => {
        setInput({
            ...input,
            stimate_date: e.target.value
        })
    }

    const sendInput = () => {
        if (!input.stimate_date) return alert("poner fecha")
        dispatch(createOrder(input))
        dispatch(cleanCart())
        alert(`${input.codeOrder}`)
        navigate('/user1')
    }



    return (
        <div className={L.cart}>
            <div className='divHeader'>
                <div>
                    <Nav />
                </div>
                <div className={L.subDiv}>

                    <NavLink to={'/user1'} className={L.inicio} >Inicio</NavLink>

                    <h1 style={{ color: '#ffff' }}>Pedidos</h1>

                    <NavLink to={'/fav'} className={L.inicio} >Favoritos</NavLink>

                </div>
            </div>




            <div className={L.divBody}>
                <div className={L.divBodyLeft}>

                    {
                        myCart && myCart.map(item => {
                            return (
                                <Card2 key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
                            )
                        })
                    }
                </div>


                <div className={L.divBodyRight}>


                    <label htmlFor="">Codigo de Orden: </label>

                    <label htmlFor="">Fecha estimada</label>
                    {/* <input type="text" value={input.stimate_date} onChange={HandlerChange} /> */}
                    <input type="date" placeholder="dd/mm/aaaa..." value={input.stimate_date} onChange={handleChange} />


                    {/* <label htmlFor="">Comentario</label>
                    <textarea /> */}


                    <button onClick={() => sendInput()} >Crear</button>


                </div>

            </div>









            <div className='divFooter'>
                <footer className={L.footer}>Assistt one - Todos los derechos reservados 2023</footer>
            </div>



        </div>
    )
}


export default Cart