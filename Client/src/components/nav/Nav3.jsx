import React, { useState, useEffect } from 'react';
import p from './Nav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchByNameUser } from '../../redux/actions';
import SearchBar3 from '../../components/searchBar/SearchBar3';
import { NavLink } from 'react-router-dom';

const Nav3 = () => {
  const dispatch = useDispatch();
  //const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
  const users = useSelector((state) => state.allUsers);

  const handleSearch = () => {
    if (search.trim() !== '') {
      dispatch(searchByNameUser(search));
    }
  };

  // Escucha cambios en el estado global para los resultados de búsqueda
  // useEffect(() => {
  //   setSearchResults(users);
  // }, []); // El segundo argumento debe ser un arreglo vacío si solo deseas que el efecto se ejecute una vez

  return (
    <div className={p.nav1Container}> 
      <SearchBar3 onSearch={handleSearch} searchValue={search} setSearchValue={setSearch} />
      <div>
        <NavLink to={'/profile3'}>
          perfil
        </NavLink>
      </div>
    </div>
  );
};

export default Nav3;





