import { searchByNameProd } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getProd } from "../../redux/actions";

const SearchBar = () => {
   const dispatch = useDispatch();
   const [search, setSearch] = useState('');

   useEffect(() => {
      // Si la búsqueda está vacía, obtén todos los productos en lugar de buscar
      if (search.trim() === '') {
         dispatch(getProd()); // Utiliza una acción para obtener todos los productos
      } else {
         dispatch(searchByNameProd(search)); // Realiza la búsqueda en tiempo real si hay texto en la búsqueda
      }
   }, [search, dispatch]);

   const handleChange = (e) => {
      const value = e.target.value;
      setSearch(value);
   };

   return (
      <div>
         <input
            className='nav_search_input'
            type='text'
            placeholder='Buscar Producto'
            value={search}
            onChange={handleChange}
         />
      </div>
   )
}

export default SearchBar;
