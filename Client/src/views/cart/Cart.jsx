import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import L from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Card2 from '../../components/card2/Card2'
import { useState } from 'react'
import { codeToOrder } from '../../utils/codes'

const Cart = () => {

    const dispatch = useDispatch()
    const myCart = useSelector(state => state.cart)
    const codeOrder = codeToOrder()

    const usersID = myCart.map(item => item.id)
    console.log(usersID);

    const [input, setInput] = useState({
        codeOrder: '',
        stimate_date: "",
        pay: "efectivo",
        userId: "",
        prodId: []
    })

    // const HandlerInput =()=>{

    // }




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
                    <h1><strong>Pedido: {codeOrder} </strong></h1>
                    {/* las card renderizadas */}
                    {
                        myCart && myCart.map(item => {
                            return (
                                <Card2 key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
                            )
                        })
                    }
                </div>


                <div className={L.divBodyRight}>


                    <label htmlFor="">Codigo de Orden: {codeOrder} </label>
                    {/* <input type="text" placeholder='codeOrder' /> */}
                    {/* <label htmlFor="">Tipo de pago</label>
                    <input type="text" placeholder='tipo de pago' /> */}
                    {/* <label htmlFor="">UserID</label>
                    <input type="text" placeholder='User ID' /> */}
                    <label htmlFor="">Fecha estimada</label>
                    <input type="date" />
                    <label htmlFor="">Comentario</label>
                    <textarea />


                    <button>Enviar</button>


                </div>

            </div>









            <div className='divFooter'></div>



        </div>
    )
}


export default Cart