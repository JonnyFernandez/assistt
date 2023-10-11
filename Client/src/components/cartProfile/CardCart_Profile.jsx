import p from './CardCart_Profile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeCard, suma, resta } from '../../redux/actions'
import { quantityDB } from '../../redux/actions'


const CardCart_Profile = ({ id, code, name, description, quanty, price, stock }) => {

    const dispatch = useDispatch()
    const myList = useSelector((state) => state.cart)

    const [cart, setCart] = useState(false)

    const [inputs, setInputs] = useState({
        quanty: '1'
    })


    useEffect(() => {
        setInputs({ "quanty": quanty })
    }, [myList])

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
            dispatch(addCart({ id, code, name, description, price }))
        }
    }

    const handlerIncrese = () => {
        const newQuantity = parseInt(inputs.quanty) + 1;

        dispatch(quantityDB(id, newQuantity));
        setInputs({ ...inputs, quanty: newQuantity });
    }

    const handlerDecrese = () => {
        if (inputs.quanty > 1) {
            const newQuantity = parseInt(inputs.quanty) - 1;
            dispatch(quantityDB(id, newQuantity));
            setInputs({ ...inputs, quanty: newQuantity });
        } else {
            return alert('Solo numeros mayores que 1')
        }
    };

    const handleInputChange = (e) => {
        setInputs(e.target.value);
    };

    return (
        <div className={p.cardContainer} >

            <div className={p.card} >

                <div className={p.divCode1} >
                    <h3 className={p.code}>Code: {code}</h3>
                </div>

                <div className={p.divCode}>
                    <h3 className={p.name}> {name}</h3>
                </div>

                <div className={p.divCode}>
                    <h3 className={p.descrip}>Stock: {stock}</h3>
                </div>
                <div className={p.divCode}>
                    <h3 className={p.descrip}>Descripcion: {description}</h3>
                </div>

            </div>

            <div className={p.divBotones}>

                <div className={p.buttoContainer}>

                    <div className={p.inputsNum}>
                        <button onClick={handlerDecrese}>-</button>
                        <input className={p.input} type="text" onChange={handleInputChange} value={inputs.quanty} />
                        <button onClick={handlerIncrese}>+</button>
                    </div>

                    <button className={p.deleteCart} onClick={handleCart}> quitar </button>





                </div>
            </div>
        </div>
    )
}
export default CardCart_Profile



































