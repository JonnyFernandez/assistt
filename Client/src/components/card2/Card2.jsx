import c from './Card2.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeCard, quantity } from '../../redux/actions'
import { codeToOrder } from '../../utils/codes'



const Card2 = ({ id, code, name, description, price }) => {

    const OrderCode = codeToOrder()

    const dispatch = useDispatch()

    const myList = useSelector((state) => state.cart)



    const [cart, setCart] = useState(false)

    const [inputs, setInputs] = useState({
        quanty: '1'

    })

    // console.log(inputs);



    useEffect(() => {
        myList.forEach((item) => {
            if (item.id === id) {
                setCart(true);
            }
        });
    }, [myList]);

    const handleChange = (e) => {
        let property = e.target.name;
        let value = e.target.value

        setInputs({
            ...inputs,
            [property]: value
        })

    }

    const sendUpdate = () => {
        if (!inputs.quanty) return alert('poner cantidad')
        dispatch(quantity(id, inputs))

        setInputs({ "quanty": '' })
    }


    const handleCart = () => {
        if (cart) {
            setCart(false)
            dispatch(removeCard(id))
        } else {
            setCart(true)
            dispatch(addCart({ id, code, name, description, price }))
        }
    }





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

                    <input type="number" min={1} onChange={handleChange} name="quanty" value={inputs.quanty} placeholder='cantidad' />
                    <button onClick={() => sendUpdate()}>agregar</button>



                    {cart
                        ? (<button className={c.classCart1} onClick={handleCart}> quitar </button>)
                        : (<button className={c.classCart2} onClick={handleCart}> agregar </button>)}


                </div>
            </div>


        </div>
    )




}


export default Card2