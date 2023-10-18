import { searchByNameProd } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getProd } from "../../redux/actions";
import s from './SearchBar.module.css'

const SearchBar = () => {
   const dispatch = useDispatch();
   const [search, setSearch] = useState('');

   useEffect(() => {

      if (search.trim() === '') {
         dispatch(getProd());
      } else {
         dispatch(searchByNameProd(search));
      }
   }, [search, dispatch]);

   const handleChange = (e) => {
      const value = e.target.value;
      setSearch(value);
   };

   return (
      <div>
         <input
            className={s.nav_search_input}
            type='text'
            placeholder='¿Que estas buscando?'
            value={search}
            onChange={handleChange}
         />
      </div>
   )
}

export default SearchBar;
