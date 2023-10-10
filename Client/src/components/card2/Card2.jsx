import c from './Card2.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeCard, quantityDB, suma, resta } from '../../redux/actions'



const Card2 = ({ id, code, name, description, quanty, price }) => {


    const dispatch = useDispatch()

    const myList = useSelector((state) => state.cart)






    const [cart, setCart] = useState(false)

    const [inputs, setInputs] = useState({
        quanty: '1'

    })

    useEffect(() => {
        setInputs({ "quanty": quanty })
    }, [myList])

    // console.log(inputs);



    useEffect(() => {
        myList.forEach((item) => {
            if (item.id === id) {
                setCart(true);
            }
        });
    }, [myList]);



    const sendUpdate = () => {
        // if (!inputs.quanty) return alert('poner cantidad')
        dispatch(quantityDB(id, inputs))


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

    const handlerIncrese = () => {
        // dispatch(suma(id))
        dispatch(quantityDB(id, inputs))

    }
    const handlerDecrese = () => {
        dispatch(resta(id))



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

                    {/* <input type="number" min={1} onChange={handleChange} name="quanty" value={inputs.quanty} placeholder='cantidad' /> */}

                    <div className={c.inputsNum}>
                        <button onChange={(e) => setInputs(e.target.value)} >-</button>
                        <input type="text" onChange={(e) => setInputs(e.target.value)} />
                        <button onChange={(e) => setInputs(e.target.value)}  >+</button>

                    </div>

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