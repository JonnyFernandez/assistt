import Nav from '../../components/nav/Nav'
import { useSelector } from 'react-redux'
import Card from '../../components/card/Card';
import f from './Fav.module.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Fav = () => {

    const fav = useSelector((state) => state.favorite);



    return (
        <div className={f.Fav}>
            <div className="headerFav">
                <div>
                    <Nav />
                </div>

                <div className={f.backContainer} >
                    <NavLink to={'/user1'} className={f.back}>Inicio</NavLink>
                    <div className={f.title}>Favoritos</div>
                    <NavLink to={'/cart'} className={f.back}>
                        <FontAwesomeIcon icon={faShoppingCart} size="1.7x" color="#fff" />
                    </NavLink>
                </div>




            </div>

            <div className={f.Container}>
                <div className={f.bodyFav}>

                    {
                        fav && fav.map(item => {
                            return (
                                <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
                            )
                        })
                    }



                </div>
            </div>
            <div className="footerFav"></div>


        </div>
    )





}


export default Fav