import Nav from '../../components/nav/Nav'
import { useSelector } from 'react-redux'
import Card from '../../components/card/Card';
import f from './Fav.module.css'
import { NavLink } from 'react-router-dom';

const Fav = () => {

    const fav = useSelector((state) => state.favorite);



    return (
        <div className={f.Fav}>
            <div className="headerFav">
                <div>
                    <Nav />
                </div>

                <div className={f.subDiv} >

                    <NavLink to={'/user1'} className={f.inicio}>Inicio</NavLink>

                    <h1 style={{ color: '#ffff' }}>Favorite</h1>

                    <NavLink to={'/cart'} className={f.inicio}>Carrito</NavLink>



                </div>


            </div>
            <div className="bodyFav">

                {
                    fav && fav.map(item => {
                        return (
                            <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
                        )
                    })
                }



            </div>
            <div className="footerFav"></div>


        </div>
    )





}


export default Fav