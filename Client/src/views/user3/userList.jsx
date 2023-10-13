import React, { useState } from 'react';
import style from './userList.module.css';

const UserList = ({ users }) => {
  // Configura el estado inicial para que todos los usuarios inicien en "true"
  const [activeUsers, setActiveUsers] = useState(
    users.reduce((initialState, user) => {
      initialState[user.id] = true;
      return initialState;
    }, {})
  );

  const toggleActive = (userId) => {
    setActiveUsers((prevActiveUsers) => ({
      ...prevActiveUsers,
      [userId]: !prevActiveUsers[userId],
    }));
  };

  return (
    <div className={style.contenedor}>
      <h2>Lista de Usuarios</h2>
      <div className={style.contenedor1}>
        <ul className={style.productList}>
          {users.map((user) => (
            <li className={style.productListItem} key={user.id}>
              <p className={style.p}>{user.name}</p>
              <p className={style.p}>{user.email}</p>
              <div className={style.checkboxCon}>
                <input
                  id={`toggler-${user.id}`}
                  name={`toggler-${user.id}`}
                  type="checkbox"
                  checked={activeUsers[user.id] || false}
                  onChange={() => toggleActive(user.id)}
                />
                <label htmlFor={`toggler-${user.id}`}></label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;




