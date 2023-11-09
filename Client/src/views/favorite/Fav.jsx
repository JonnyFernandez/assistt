import Nav from '../../components/nav/Nav'
import { useSelector } from 'react-redux'
import Card from '../../components/card/Card';
import f from './Fav.module.css'
import { NavLink } from 'react-router-dom';
import Footer from '../../components/footer/Footer';


const Fav = () => {

    const fav = useSelector((state) => state.favorite);
    const cart = useSelector((state) => state.cart);



    return (
        <div className={f.Fav}>
            <div className={f.headerFav}>
                <Nav />
                <div className={f.SubNav} >
                    <NavLink className={f.back_cart} to='/user1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                    </NavLink>
                    <div className={f.title}>
                        Productos Guardados
                    </div>

                    <div>
                        <NavLink to={'/cart'} >
                            {
                                cart.length <= 0
                                    ? <div className={f.cart}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </div>
                                    : <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </div>
                            }

                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={f.bodyFav}>
                <div className={f.FavContainer}>
                    {fav.length > 0 ? <div>
                        {
                            fav && fav.map(item => {
                                return (
                                    <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} type={item.type} />
                                )
                            })
                        }
                    </div> :
                        <div className={f.emptyFav}>
                            <div>

                                <p>Ya no tienes Productos guardados, dirígete a <NavLink className={f.backToHome} to={'/user1'}> Inicio </NavLink> para seleccionar productos</p>
                            </div>
                        </div>}
                </div>
            </div>
            <Footer />

        </div>
    )
}


export default Fav