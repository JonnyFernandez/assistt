import c from './Card.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav, addCart, removeCard } from '../../redux/actions'



const Card = ({ id, code, name, description, quanty, price }) => {


    const dispatch = useDispatch()
    const myFav = useSelector((state) => state.favorite)
    const myList = useSelector((state) => state.cart)


    console.log(myList);

    const [fav, setFav] = useState(false)
    const [cart, setCart] = useState(false)

    useEffect(() => {
        myFav.forEach((el) => {
            if (el.id === id) {
                setFav(true);
            }
        });
    }, [myFav]);

    useEffect(() => {
        myList.forEach((item) => {
            if (item.id === id) {
                setCart(true);
            }
        });
    }, [myList]);



    const handleFav = () => {
        if (fav) {
            setFav(false)
            dispatch(removeFav(id))
        } else {
            setFav(true)
            dispatch(addFav({ id, code, name, description, quanty, price }))
        }
    }
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

                    {cart
                        ? (<button className={c.classCart1} onClick={handleCart}> quitar </button>)
                        : (<button className={c.classCart2} onClick={handleCart}> agregar </button>)}

                    {fav
                        ? (<button className={c.classCart1} onClick={handleFav}> noFav </button>)
                        : (<button className={c.classCart2} onClick={handleFav}> fav </button>)}
                </div>
            </div>


        </div>
    )




}


export default Card