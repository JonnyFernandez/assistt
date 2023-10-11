import style from '../user3/User3.module.css';
import Nav from "../../components/nav/Nav";
import Nav3 from "../../components/nav/Nav3";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions'; 
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

  // Estado para el seguimiento de la aprobación de cada orden
  const [approvalStatus, setApprovalStatus] = useState({});

  // Función para actualizar el estado de aprobación de una orden
  const updateApprovalStatus = (orderId, newStatus) => {
    setApprovalStatus({
      ...approvalStatus,
      [orderId]: newStatus,
    });
  };

  return (
    <div>
      <Nav />
      <Nav3 />
      <div className={style.body}>
        <div className={style.left}>
          <h1 className={style.h1}>Órdenes de Compra</h1>
          {Array.isArray(orders) && orders.length > 0 ? (
            <ul className={style.reviewList}>
              {orders?.map((order) => (
                <li className={style.reviewListItem} key={order.id}>
                  Código de Órden:{" "}
                  <Link
                    to={`/detail/${order.id}`}
                    className={`${style.orderLink} ${style.customLink}`}
                  >
                    {order.codeOrder}
                  </Link>
                  {approvalStatus[order.id] !== undefined ? (
                    <span>
                      Orden {approvalStatus[order.id] ? 'Aprobada' : 'Desaprobada'}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className={style.right}>
          <div className={style.botonera}>
            <div>
              <button className={style.button}>Cliente</button>
            </div>
            <div>
              <button className={style.button}>Proveedor</button>
            </div>
            <div>
              <button className={style.button}>Cotizaciones</button>
            </div>
            <div>
              <button className={style.button}>Resumen de ventas</button>
            </div>
          </div>
          <div className={style.info}>
            <div className={style.infoLeft}>
              <OrderDetail
                approvalStatus={approvalStatus}
                updateApprovalStatus={updateApprovalStatus}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User3;




