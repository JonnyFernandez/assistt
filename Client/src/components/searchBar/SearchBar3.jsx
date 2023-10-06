import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { setSearchTerm } from '../../redux/actions';
import Style from '../searchBar/SearchBar3.module.css'

const SearchBar3 = () => {
  const searchTerm = useSelector((state) => state.allUsers.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className={Style.searchbar}>
    <div className={Style.searchbarWrapper}>
      <div className={Style.searchbarLeft}>
        <div className={Style.searchIconWrapper}>
          <span className={`${Style.searchIcon} ${Style.searchbarIcon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div className={Style.searchbarCenter}>
        <div className={Style.searchbarInputSpacer}></div>

        <input
          type="text"
          className={Style.searchbarInput}
          maxLength="2048"
          name="q"
          autoCapitalize="off"
          autoComplete="off"
          title="Search"
          role="combobox"
          placeholder="Buscar usuarios por nombre"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  </div>
);
};

export default SearchBar3;