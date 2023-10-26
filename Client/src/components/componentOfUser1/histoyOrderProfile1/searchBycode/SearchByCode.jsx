// import { searchByNameProd } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getProd } from "../../redux/actions";
import { getOrderUserById, searchByCode } from "../../../../redux/actions";



const SearchByCode = () => {

    const dispatch = useDispatch();
    const Profile = useSelector((state) => state.profile)
    const [code, setCode] = useState('');

    useEffect(() => {

        if (code.trim() === '') {
            dispatch(getOrderUserById(Profile.id));
        } else {
            dispatch(searchByCode(code));
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
                placeholder='Buscar por Codigo'
                value={code}
                onChange={handleChange}
            />
        </div>
    )




}

export default SearchByCode