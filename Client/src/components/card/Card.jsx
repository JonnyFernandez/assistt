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
                        ? (<button className={c.classCart1} onClick={handleFav}>❤️
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hearts-off" width="44" height="13" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14.017 18l-2.017 2l-7.5 -7.428a5 5 0 0 1 .49 -7.586m3.01 -1a5 5 0 0 1 4 2.018a5 5 0 0 1 8.153 5.784" />
                                <path d="M11.814 11.814a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238l2.01 -2.021m1.977 -1.99l.211 -.212a2.81 2.81 0 0 0 0 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.283 .178" />
                                <path d="M3 3l18 18" />
                            </svg> */}
                        </button>)

                        : (<button className={c.classCart2} onClick={handleFav}>🤍
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="13" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg> */}
                        </button>)}
                </div>
            </div>


        </div>
    )




}


export default Card