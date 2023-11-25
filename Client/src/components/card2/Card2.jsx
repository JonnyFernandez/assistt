import c from './Card2.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeCard, quantityDB, getProd } from '../../redux/actions'



const Card2 = ({ id, code, name, description, quanty, price, stock }) => {

    console.log(stock);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

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
        dispatch(quantityDB(id, 1))
    }, [myList, dispatch]);

    const handleCart = () => {
        if (cart) {
            setCart(false)
            dispatch(removeCard(id))
        } else {
            setCart(true)
            dispatch(addCart({ id, code, name, description, price }))
        }
        const updatedCart = cart
            ? storedCart.filter(item => item.id !== id)
            : [...storedCart, { id, code, name, description, quanty, price, stock, type }];

        localStorage.setItem('cart', JSON.stringify(updatedCart));
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
            setInputs({ ...inputs, quanty: (newQuantity) });
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

                <div className={c.divCode1} >
                    <h5 className={c.code}> <small>Code: {code}</small> </h5>
                </div>

                <div className={c.divCode2}>
                    <h5 className={c.name}> <small>{name}</small> </h5>

                </div>

                <div className={c.divCode3}>
                    <h5 className={c.descrip}> <small>{description}</small> </h5>
                </div>
                {/* <div className={c.divCode4}>
                    <h5 className={c.descrip}> <small>Stock: {stock}</small> </h5>
                </div> */}


                <div className={c.buttoContainer}>

                    <div className={c.inputsNum}>
                        <div>
                            <button className={c.decrece} onClick={handlerDecrese}>-</button>
                            <input className={c.input} type="text" onChange={handleInputChange} value={inputs.quanty} />
                            <button className={c.crece} onClick={handlerIncrese}>+</button>
                        </div>
                    </div>

                    {/* <button>confirmar</button> */}


                </div>

                <button className={c.deleteCart} onClick={handleCart}> X </button>

            </div>




        </div>
    )




}


export default Card2