import React, { useState, useEffect } from 'react';
import style from './userList.module.css';
import SearchBar3 from '../../components/searchBar/SearchBar3';

const UserList = ({ users }) => {
  const [activeUsers, setActiveUsers] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users && Array.isArray(users)) {
      // Inicializa el estado de activeUsers con valores predeterminados
      const initialActiveUsers = users.reduce((initialState, user) => {
        initialState[user.id] = true; // Por defecto, todos los usuarios están inactivos
        return initialState;
      }, {});
      setActiveUsers(initialActiveUsers);
    }
  }, [users]);

  // Función para manejar la búsqueda de usuarios
  const handleSearch = (searchValue) => {
    if (users && Array.isArray(users)) {
      // Filtra los usuarios cuyos nombres contengan la cadena de búsqueda (ignorando mayúsculas y minúsculas)
      const filteredResults = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredUsers(filteredResults);
    }
  };

  // Función para cambiar el estado del usuario activo/inactivo
  const toggleActive = (userId) => {
    setActiveUsers((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId], // Cambia el estado del usuario
    }));
  };

  const usersToRender = filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <div className={style.contenedor}>
      <SearchBar3 onSearch={handleSearch} />
      <div className={style.contenedor1}>
        <ul className={style.productList}>
          {Array.isArray(users) &&
            usersToRender.map((user) => (
              <li className={style.productListItem} key={user.id}>
                <p className={style.p}>{user.name}</p>
                <p className={style.p}>{user.type}</p>
                <p className={`${style.p} ${style.email}`}>{user.email}</p>
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







