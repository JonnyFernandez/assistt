import c from './Card.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav, addCart, removeCard } from '../../redux/actions'


const Card = ({ id, code, name, description, quanty, price, stock, type }) => {

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedFav = JSON.parse(localStorage.getItem('fav')) || [];


    const dispatch = useDispatch()
    const myFav = useSelector((state) => state.favorite)
    const myList = useSelector((state) => state.cart)



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
                    <div className={c.code}>{code}</div>
                </div>

                <div className={c.divCode}>
                    <div>{name}</div>
                </div>

                <div className={c.divCode}>
                    <div>{description}</div>
                </div>
                <div className={c.divCodeType}>
                    <div> {type} </div>
                </div>
                <div className={c.divCodeStock}>
                    <div> stock: {stock} </div>
                </div>



                <div className={c.botones}>
                    <div className={c.cartButton} >
                        {cart
                            ? (<div className={c.classCart1} onClick={handleCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6aab0a" class="bi bi-cart-check" viewBox="0 0 16 16">
                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>)
                            : (<div className={c.classCart2} onClick={handleCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>)}
                    </div>

                    <div className={c.favButton}>
                        {fav
                            ? (<div className={c.favButon} onClick={handleFav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(41, 132, 244)" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>

                            </div>)

                            : (<div className={c.classCart2} onClick={handleFav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                                </svg>

                            </div>)}
                    </div>
                </div>

            </div>




        </div>
    )




}


export default Card