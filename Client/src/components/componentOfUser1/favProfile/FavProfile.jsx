
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import Card from "../../card/Card"
import s from './FavProfile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const FavProfile = () => {

    const Favorite = useSelector(state => state.favorite)

    console.log(Favorite);

    return (
        <div className={s.fav}>

            <div className={s.favContainer}>

                {Favorite.length > 0 ? <div className={s.favCard}>
                    {
                        Favorite && Favorite.map(item => {
                            return (
                                <div className={s.divCard}>
                                    <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} type={item.type} />
                                </div>

                            )
                        })
                    }

                </div> :
                    <div className={s.emptyFav}>
                        <FontAwesomeIcon icon={faHeart} size="3x" color="#555" />
                        <p>No tienes favoritos, dirígete a <NavLink className={s.backToHome} to={'/user1'}>Inicio</NavLink> para seleccionar productos</p>
                    </div>}


            </div>




        </div>
    )
}

export default FavProfile