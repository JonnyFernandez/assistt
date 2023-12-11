import h from './SearchBarSelled.module.css'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { history_order, searchMyOrderCode } from "../../../../../redux/actions";



const SearchBarSelled = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const email = userInfo?.email || ''

    useEffect(() => {
        if (search.trim() === '') {
            dispatch(history_order(email));
        } else {
            dispatch(searchMyOrderCode(search));
        }
    }, [search, dispatch]);


    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    return (
        <div>
            <input
                className={h.nav_search_input}
                type='text'
                placeholder='Ingresar Codigo'
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBarSelled;
