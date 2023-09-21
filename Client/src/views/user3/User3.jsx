
import style from '../user3/User3.module.css';
import Nav from '../../components/nav/Nav';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions'; // Importa tu acción
import { Link } from 'react-router-dom';


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
    <div className={style.user3Container}>
      <Nav />
      
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

        <div className={style.providersSection}>
          <h2 className={style.sectionTitle}>Proveedores</h2>
          <ul className={style.list}>
            <li>Proveedor 1</li>
            <li>Proveedor 2</li>
          </ul>
        </div>
        <div className={style.approvalsSection}>
          <h2 className={style.sectionTitle}>Aprobaciones Anteriores</h2>
          <ul className={style.list}>
            <li>Aprobación 1 - <span className={style.statusApproved}>Aprobada</span></li>
            <li>Aprobación 2 - <span className={style.statusRejected}>Rechazada</span></li>
         
          </ul>
        </div>

        <div className={style.orderStatusSection}>
          <h2 className={style.sectionTitle}>Estado de las Órdenes</h2>
          <ul className={style.list}>
            <li>Orden 1 - <span className={style.statusInProgress}>En Proceso</span></li>
            <li>Orden 2 - <span className={style.statusApproved}>Aprobada</span></li>
        
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default User3;

