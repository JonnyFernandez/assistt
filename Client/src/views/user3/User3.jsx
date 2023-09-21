
import style from '../user3/User3.module.css';
import Nav from "../../components/nav/Nav"
import Nav1 from "../../components/nav/Nav1"
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

      const getUserNameById = (userId) => {
        const user = user.find((user) => user.id === userId);
        return user ? user.name : ""; // Si se encuentra el usuario, devuelve su nombre; de lo contrario, devuelve una cadena vacía.
    };

      
  return (
    <div>
      <Nav />
      <Nav1 />
    <div className={style.user3Container}>
      <div className={style.contenedor1}>
        <div className={style.bodyLeft}>
          <h2 >Órdenes de Compra</h2>
          <ul className={style.reviewList}>
              {orders.map((order) => (
              <li className={style.reviewListItem} key={order.id}>
                Código de Órden:{" "}
                <Link to={`/detail/${order.id}`} className={style.orderLink}>
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
    </div>
    </div>
  );
};

export default User3;

