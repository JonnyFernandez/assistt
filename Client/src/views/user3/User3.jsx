
import style from '../user3/User3.module.css';
import Nav from "../../components/nav/Nav"
import Nav3 from "../../components/nav/Nav3"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions'; // Importa tu acción
import { Link } from 'react-router-dom';
import OrderDetail from '../orders/orderDetail';



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
          {orders.map((order) => (
            <li className={style.reviewListItem} key={order.id}>
              Código de Órden:{" "}
              <Link to={`/detail/${order.id}`} className={`${style.orderLink} ${style.customLink}`}>
                {order.codeOrder}
              </Link>
            </li>
          ))}
        </div>
        <div className={style.right}>
          <div className={style.botonera}>
            <div>boton1</div>
            <div>boton2</div>
            <div>boton3</div>
            <div>botno4</div>
          </div>
          <div className={style.info}>
            <div className={style.infoLeft}>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>
              <div className={style.pepe}></div>

            </div>
            <div className={style.infoRight}>
              <div className={style.infoRightHeader} >hola</div>
              <div className={style.infoRightBody}>
                <div>name</div>
                <div>name</div>
                <div>name</div>
                <div>name</div>
                <div>name</div>
              </div>
              <div className={style.infoRightfooter}></div>
            </div>
          </div>

        </div>

      </div>

      <div className={style.footer}></div>










      {/* <div className={style.user3Container}>
        <div className={style.contenedor1}>
          <div className={style.bodyLeft}>
            <h2 >Órdenes de Compra</h2>
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

          <div className={style.bodyRight}>
            <OrderDetail />
          </div>

        </div>
      </div> */}
    </div>
  );
};

export default User3;

