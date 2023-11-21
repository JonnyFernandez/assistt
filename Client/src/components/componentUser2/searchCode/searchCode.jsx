// import { searchByNameProd } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getProd } from "../../redux/actions";
// import { getOrderUserById, searchByCode } from "../../../../redux/actions";
import { getOrders, searchCode_user2 } from "../../../redux/actions";


const SearchCode_user2 = () => {

    const dispatch = useDispatch();
    // const Profile = useSelector((state) => state.profile)
    const [code, setCode] = useState('');

    useEffect(() => {

        if (code.trim() === '') {
            dispatch(getOrders());
        } else {
            dispatch(searchCode_user2(code));
        }
    }, [code, dispatch]);

    const handleChange = (e) => {
        const value = e.target.value;
        setCode(value);
    };

    return (
        <div>
            <input
                className={''}
                type='text'
                placeholder='Buscar por Codigo2'
                value={code}
                onChange={handleChange}
            />
        </div>
    )




}

export default SearchCode_user2