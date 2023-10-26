import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './userList.module.css';
import { Link, useParams } from 'react-router-dom';
import SearchBar3 from '../../components/searchBar/SearchBar3';
import { bannedUsers } from '../../redux/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.allUsers);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchValue, setSearchValue] = useState('');
  const [selectedType, setSelectedType] = useState('all'); // Estado para el tipo de usuario seleccionado
  const dispatch = useDispatch();

  useEffect(() => {
    // Establecer filteredUsers en la lista completa de usuarios cuando cambia users
    if (users && users.length > 0) {
      setFilteredUsers(users);
    }
    // Actualizar los usuarios almacenados en localStorage
    users.forEach((user) => {
      const userActive = localStorage.getItem(`userActive_${user.id}`);
      if (userActive !== null) {
        const updatedUser = { ...user, active: JSON.parse(userActive) };
        setFilteredUsers((prevUsers) =>
          prevUsers.map((prevUser) =>
            prevUser.id === user.id ? updatedUser : prevUser
          )
        );
      }
    });
  }, [users]);

  useEffect(() => {
    // Filtrar la lista de usuarios cuando cambia el tipo seleccionado
    if (selectedType === 'all') {
      setFilteredUsers(users);
    } else {
      const filteredResults = users.filter((user) => user.type === selectedType);
      setFilteredUsers(filteredResults);
    }
  }, [selectedType, users]);

  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
    const filteredResults = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filteredResults);
  };

  const toggleActive = (id) => {
    const updatedUsers = filteredUsers.map((user) => {
      if (user.id === id) {
        const updatedUser = { ...user, active: !user.active };
        return updatedUser;
      }
      return user;
    });

    const active = updatedUsers.find((user) => user.id === id).active;

    // Llamar a la acción para actualizar el estado global y el servidor
    dispatch(bannedUsers(id, { active }))
      .then((response) => {
        const message = `Usuario ${active ? 'activado' : 'desactivado'}`;
        const icon = active ? '🟢' : '🔴'; // Ícono para identificar la activación o desactivación
        toast.success(
          <div>
            {icon} {message}
          </div>
        );
      })
      .catch((error) => {
        console.error("Error en la llamada a bannedUsers:", error);
        toast.error("Hubo un error al actualizar el usuario");
      });

    localStorage.setItem(`userActive_${id}`, active);

    setFilteredUsers(updatedUsers);
  };
  

  return (
    <div className={style.contenedor}>
      <SearchBar3 onSearch={handleSearch} />

      {/* Agrega un selector para el tipo de usuario */}
      <div className={style.selectContainer}>

        <label className={style.tipo} >Filtrar por tipo:  </label>
        <select
          id="typeFilter"
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
        >
          <option value="all">Todos</option>
          <option value="client">Cliente</option>
          <option value="admin">Admin</option>
          <option value="supplier">Proveedor</option>
          
        </select>
      </div>

      <div className={style.contenedor1}>
        <ul className={style.productList}>
          {Array.isArray(filteredUsers) &&
            filteredUsers.map((user) => (
              <li className={style.productListItem} key={user.id}>
                <p className={style.p}>{user.name}</p>
                <p className={style.p}>{user.type}</p>
                <p className={`${style.p} ${style.email}`}>{user.email}</p>
                {user.type === "client" && ( 
                    <p>
                      <Link to={`/user/${user.id}/order`} className={style.pedidos}>
                        Historial de Compras
                      </Link>
                    </p>
                  )}

                <div className={style.checkboxCon}>
                  <input
                    id={`toggler-${user.id}`}
                    name={`toggler-${user.id}`}
                    type="checkbox"
                    checked={user.active}
                    onChange={() => toggleActive(user.id)}
                  />
                  <label htmlFor={`toggler-${user.id}`}></label>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeButton={false}
      />
    </div>
  );
};


export default UserList;













