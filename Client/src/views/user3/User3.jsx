import style from './User3.module.css';
import Nav from "../../components/nav/Nav";
import Nav3 from "../../components/nav/Nav3";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, searchByNameUser } from '../../redux/actions'; // Importa la acción searchByNameUser
import { Link } from 'react-router-dom';
import OrderDetail from '../orders/orderDetail';
import UserList from './userList'; // Importa el componente UserList
import Footer from '../../components/footer/Footer';

const User3 = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.Orders);
  const searchResults = useSelector((state) => state.allUsers);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Cuando el componente se monta, obtén las órdenes
    dispatch(getOrders());
  }, [dispatch]);

  // Estado para el seguimiento de la aprobación de cada orden
  const [approvalStatus, setApprovalStatus] = useState({});

  const handleSearch = (searchQuery) => {
    // Realiza una búsqueda y luego dispara la acción para actualizar los resultados de búsqueda
    dispatch(searchByNameUser(searchQuery)); // Dispara la acción para buscar usuarios
  };

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
              {orders.map((order) => (
                <li className={style.reviewListItem} key={order.id}>
                  Código de Órden:{" "}
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
              {selectedOrder ? (
                <OrderDetail
                  approvalStatus={approvalStatus}
                  updateApprovalStatus={updateApprovalStatus}
                />
              ) : searchResults?.length > 0 ? (
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








