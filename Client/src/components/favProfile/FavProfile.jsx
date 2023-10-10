
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import Card from "../card/Card"
import s from './FavProfile.module.css'



const FavProfile = () => {

    const Favorite = useSelector(state => state.favorite)




    return (
        <div className={s.cart}>
            <div className={s.cartContainer}>
                {
                    Favorite && Favorite.map(item => {
                        return (
                            <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default FavProfile