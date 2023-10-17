import c from './Card2.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeCard, quantityDB } from '../../redux/actions'



const Card2 = ({ id, code, name, description, quanty, price, stock }) => {

    const dispatch = useDispatch()
    const myList = useSelector((state) => state.cart)
    const [cart, setCart] = useState(false)

    const [inputs, setInputs] = useState({
        quanty: '1'
    });

    useEffect(() => {
        setInputs({ "quanty": quanty })
        //-------------------------------
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
    };

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
        <div className={c.cardContainer} >

            <div className={c.card} >

                <div className={c.divCode} >
                    <h4 className={c.code}>Code: {code}</h4>
                </div>

                <div className={c.divCode}>
                    <h4 className={c.name}> {name}</h4>

                </div>

                <div className={c.divCode}>
                    <h4 className={c.descrip}>Stock: {stock}</h4>
                </div>

                <div className={c.divCode}>
                    <h4 className={c.descrip}>{description}</h4>
                </div>

                <div className={c.buttoContainer}>

                    <div className={c.inputsNum}>
                        <button onClick={handlerDecrese}>-</button>
                        <input className={c.input} type="text" onChange={handleInputChange} value={inputs.quanty} />
                        <button onClick={handlerIncrese}>+</button>
                    </div>

                    <button className={c.deleteCart} onClick={handleCart}> quitar </button>

                </div>


            </div>




        </div>
    )




}


export default Card2