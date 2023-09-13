import c from './Card2.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav, addCart, removeCard } from '../../redux/actions'



const Card2 = ({ id, code, name, description, quanty, price }) => {


    const dispatch = useDispatch()

    const myList = useSelector((state) => state.cart)



    const [cart, setCart] = useState(false)

    const [input, setInput] = useState({
        codeOrder: 234,
        stimate_date: "24-9-1598",
        pay: "efectivo",
        userId: "39f523e6-8712-470b-8373-fc6700308ef2",
        "prodId": ["1"]
    })



    useEffect(() => {
        myList.forEach((item) => {
            if (item.id === id) {
                setCart(true);
            }
        });
    }, [myList]);




    const handleCart = () => {
        if (cart) {
            setCart(false)
            dispatch(removeCard(id))
        } else {
            setCart(true)
            dispatch(addCart({ id, code, name, description, quanty, price }))
        }
    }



    // console.log(myFav);

    return (
        <div className={c.cardContainer} >

            <div className={c.card} >

                <div className={c.divCode1} >
                    <h3 className={c.code}>Code: {code}</h3>
                </div>

                <div className={c.divCode}>
                    <h3 className={c.name}>Nombre: {name}</h3>
                </div>

                <div className={c.divCode}>
                    <h3 className={c.descrip}>Descripcion: {description}</h3>
                </div>



            </div>


            <div className={c.divBotones}>
                <div className={c.buttoContainer}>

                    <input type="number" min={1} name="" />

                    {cart
                        ? (<button className={c.classCart1} onClick={handleCart}> quitar </button>)
                        : (<button className={c.classCart2} onClick={handleCart}> agregar </button>)}


                </div>
            </div>


        </div>
    )




}


export default Card2