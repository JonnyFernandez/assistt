import style from './User3.module.css';
import Nav from "../../components/nav/Nav";
import Nav3 from "../../components/nav/Nav3";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions';
import { Link } from 'react-router-dom';
import OrderDetail from '../orders/orderDetail';
import UserList from './userList';
import Footer from '../../components/footer/Footer';


const User3 = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.Orders);
  const searchResults = useSelector((state) => state.allUsers);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showUserList, setShowUserList] = useState(false); 
  const [showOrdersList, setShowOrdersList] = useState(false);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const [approvalStatus, setApprovalStatus] = useState({});

  const updateApprovalStatus = (orderId, newStatus) => {
    setApprovalStatus({
      ...approvalStatus,
      [orderId]: newStatus,
    });
  };

  const showUserListOnClick = () => {
    setShowUserList(true); // Cuando el usuario selecciona "Lista de Usuarios", mostramos la lista de usuarios
    setShowOrdersList(false);
    setSelectedOrder(null);
  };

  const showOrdersListOnClick = () => {
    setShowUserList(false);
    setShowOrdersList(true); // Cuando el usuario selecciona "Órdenes de Compra", mostramos las órdenes de compra
    setSelectedOrder(null);
  };

  return (
    <div>
      <Nav />
      <div className={style.body}>
        {showOrdersList && (
          <div className={style.left}>
            <h1 className={style.h1}>Órdenes de Compra</h1>
            {Array.isArray(orders) && orders.length > 0 ? (
              <ul className={style.reviewList}>
                {orders.map((order) => (
                  <li className={style.reviewListItem} key={order.id}>
                    Órden:  {" "}
                    <Link
                      to={`/detail/${order.id}`}
                      className={`${style.orderLink} ${style.customLink}`}
                      onClick={() => setSelectedOrder(order)}
                    >
                      {order.codeOrder}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
        <div className={style.right}>
          <div className={style.botonera}>
            {selectedOrder ? (
              <button className={style.button} onClick={showUserListOnClick}>
                Lista de Usuarios
              </button>
            ) : (
              <button className={style.button} onClick={showUserListOnClick}>
                Lista de Usuarios
              </button>
            )}
            <div>
              <button className={style.button} onClick={showOrdersListOnClick}>
                Órdenes de Compra
              </button>
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
              {selectedOrder ? (
                <OrderDetail
                  approvalStatus={approvalStatus}
                  updateApprovalStatus={updateApprovalStatus}
                />
              ) : showUserList ? (
                <UserList users={searchResults} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User3;















