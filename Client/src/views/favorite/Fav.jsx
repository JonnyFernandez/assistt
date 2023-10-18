import Nav from '../../components/nav/Nav'
import { useSelector } from 'react-redux'
import Card from '../../components/card/Card';
import f from './Fav.module.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Fav = () => {

    const fav = useSelector((state) => state.favorite);



    return (
        <div className={f.Fav}>
            <div>
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
                {fav.length > 0 ? <div className={f.bodyFav}>
                    {
                        fav && fav.map(item => {
                            return (
                                <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} type={item.type} />
                            )
                        })
                    }
                </div> :
                    <div className={f.emptyFav}>
                        <FontAwesomeIcon icon={faHeart} size="3x" color="#555" />
                        <p>No tienes Productos favoritos aun, dirígete a <NavLink className={f.backToHome} to={'/user1'}>Inicio</NavLink> para seleccionar productos</p>
                    </div>}





            </div>
            <div className="footerFav"></div>


        </div>
    )





}


export default Fav