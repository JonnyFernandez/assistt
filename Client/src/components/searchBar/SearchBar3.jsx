import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { setSearchTerm } from '../../redux/actions';

const SearchBar3 = () => {
  const searchTerm = useSelector((state) => state.allUsers.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Buscar usuarios por nombre"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar3;