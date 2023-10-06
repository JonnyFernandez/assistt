
import style from '../user3/User3.module.css';
import Nav from "../../components/nav/Nav"
import Nav3 from "../../components/nav/Nav3"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions'; // Importa tu acción
import { Link } from 'react-router-dom';
import OrderDetail from '../orders/orderDetail';
import Footer from '../../components/footer/Footer';




const User3 = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.Orders);

  useEffect(() => {
    // Cuando el componente se monta, obtén las órdenes
    dispatch(getOrders());
  }, [dispatch]);


  return (
    <div>
      <Nav />
      <Nav3 />
      <div className={style.body} >

        <div className={style.left}>
        <h1 className={style.h1} >Órdenes de Compra</h1>
            <ul className={style.reviewList}>
              {orders.map((order) => (
                <li className={style.reviewListItem} key={order.id}>
                  Código de Órden:{" "}
                  <Link to={`/detail/${order.id}`} className={`${style.orderLink} ${style.customLink}`}>
                    {order.codeOrder}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
        <div className={style.right}>
          <div className={style.botonera}>
          <div><button className={style.button}>Cliente</button></div>
          <div><button className={style.button}>Proveedor</button></div>
          <div><button className={style.button}>Cotizaciones</button></div>
          <div><button className={style.button}>Resumen de ventas</button></div>
          </div>
          <div className={style.info}>
            <div className={style.infoLeft}>
           
           <OrderDetail />

            </div>
       
          </div>
          </div>
        </div>
<div> <Footer/> </div>
    </div>
  );
};

export default User3;

