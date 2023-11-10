import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import OrderDetail from '../orders/orderDetail';
import Footer from '../../components/footer/Footer';
import { getOrderUserById } from '../../redux/actions';
import style from './AllOrderHistory.module.css';
import Nav from '../../components/nav/Nav';

const AllOrderHistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.OrdersUser);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Estado para los filtros
  const [filterStatus, setFilterStatus] = useState(''); // Estado de filtro por estado
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    // Cargar las órdenes del usuario específico
    dispatch(getOrderUserById(id))
      .then((orders) => {
        // Actualizar el estado con las órdenes cargadas
        // Puedes guardar las órdenes en el estado local si es necesario
      })
      .catch((error) => {
        console.error('Error al cargar las órdenes del usuario:', error);
      });
  }, [dispatch, id]);

  // Esta función se llama cuando se hace clic en una orden
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const getOrderStatusClassName = (aprobado) => {
    if (aprobado === true) {
      return style.approved; // Verde para órdenes aprobadas
    } else if (aprobado === false) {
      return style.disapproved; // Rojo para órdenes desaprobadas
    } else {
      return style.pending; // Clase pendiente (debes definirla en tu archivo CSS)
    }
  };

  // Filtrar las órdenes en función de los filtros seleccionados
  const filteredOrders = orders.filter((order) => {
    if (selectedFilter === 'Aprobado' && order.aprobado !== true) {
      return false;
    } else if (selectedFilter === 'Desaprobado' && order.aprobado !== false) {
      return false;
    } else if (selectedFilter === 'Pendiente' && order.aprobado !== null) {
      return false;
    }
    if (filterStatus && order.status !== filterStatus) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <Nav />
      <div className={style.body}>

        <div className={style.left}>
          <h1 className={style.h1}>Historial Órdenes</h1>

          {Array.isArray(filteredOrders) && filteredOrders.length > 0 ? (
            <ul className={style.reviewList}>
              {filteredOrders.map((order) => (
                <li className={`${style.reviewListItem} ${getOrderStatusClassName(order.aprobado)}`} key={order.id}>
                  Órden: {' '}
                  <Link
                    to={`/user/${order.id}/order`}
                    className={`${style.orderLink} ${style.customLink}`}
                    onClick={() => handleOrderClick(order)}
                  >
                    {order.codeOrder}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={style.informativeMessage}>No hay órdenes.</p>
          )}
        </div>

        <div className={style.right}>
        <div className={style.selectContainer}>
          <h1 className={style.h1}>Historial órdenes del Usuario</h1>
          <select
            onChange={(e) => setSelectedFilter(e.target.value)}
            value={selectedFilter}
          >
            <option value="">Filtrar por Estado</option>
            <option value="Aprobado">Aprobado</option>
            <option value="Desaprobado">Desaprobado</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>
        {selectedOrder ? <OrderDetail /> : null}
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default AllOrderHistory;









