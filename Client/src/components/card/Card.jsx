import c from './Card.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav, addCart, removeCard } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, code, name, description, quanty, price, stock, type }) => {

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedFav = JSON.parse(localStorage.getItem('fav')) || [];


    const dispatch = useDispatch()
    const myFav = useSelector((state) => state.favorite)
    const myList = useSelector((state) => state.cart)


    // console.log(myList);

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
            dispatch(addFav({ id, code, name, description, quanty, price, stock, type }))
        };
        const updatedFav = fav
            ? storedFav.filter(item => item.id !== id)
            : [...storedFav, { id, code, name, description, quanty, price, stock, type }];

        localStorage.setItem('fav', JSON.stringify(updatedFav));
    };



    const handleCart = () => {
        if (cart) {
            setCart(false)
            dispatch(removeCard(id))

        } else {
            setCart(true)
            dispatch(addCart({ id, code, name, description, quanty, price, stock, type }))
        }

        const updatedCart = cart
            ? storedCart.filter(item => item.id !== id)
            : [...storedCart, { id, code, name, description, quanty, price, stock, type }];

        localStorage.setItem('cart', JSON.stringify(updatedCart));



    }



    // console.log(myFav);

    return (
        <div className={c.cardContainer} >

            <div className={c.card} >

                <div className={c.divCode1} >
                    <h3 className={c.code}>Code: {code}</h3>
                </div>
                {/* tener en cuanta el manejo de stock */}
                <div>| Stock: {stock} </div>

                <div className={c.divCode}>
                    <h3 className={c.name}>| Nombre: {name}</h3>
                </div>

                <div className={c.divCode}>
                    <h3 className={c.descrip}>| Descripcion: {description}</h3>
                </div>
                <div className={c.divCode}>
                    <h3 className={c.descrip}>| Rubro: {type} </h3>
                </div>



                <div className={c.divBotones}>
                    <div className={c.buttoContainer}>

                        {cart
                            ? (<button className={c.classCart1} onClick={handleCart}>
                                <FontAwesomeIcon className={c.cartButton} icon={faShoppingCart} size="1.7x" color="rgb(100, 229, 100)" />
                            </button>)
                            : (<button className={c.classCart2} onClick={handleCart}>
                                <FontAwesomeIcon className={c.cartButton} icon={faShoppingCart} size="1.5x" color="#fff" />
                            </button>)}

                        {fav
                            ? (<button className={c.favButon} onClick={handleFav}>❤️

                            </button>)

                            : (<button className={c.classCart2} onClick={handleFav}>🤍

                            </button>)}
                    </div>
                </div>
            </div>




        </div>
    )




}


export default Card