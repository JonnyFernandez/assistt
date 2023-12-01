// SearchBar.js
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import d from './searchBarProd.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getProdUser2, searchProdCode, searchProdName } from '../../../../redux/actions';


const SearchBar = () => {

    const dispatch = useDispatch()

    const [buscarPorCodigo, setBuscarPorCodigo] = useState(false);
    const [buscarPorNombre, setBuscarPorNombre] = useState(false);
    const [input, setInput] = useState('')


    const handleBuscarPorCodigo = () => {
        setBuscarPorCodigo(!buscarPorCodigo);
        if (!buscarPorCodigo) {
            setBuscarPorNombre(false);
        }
    };
    const handleBuscarPorNombre = () => {
        setBuscarPorNombre(!buscarPorNombre);
        if (!buscarPorNombre) {
            setBuscarPorCodigo(false);
        }
    };

    useEffect(() => {
        if (buscarPorCodigo) {
            if (input.trim() === '') {
                dispatch(getProdUser2());
            } else {
                dispatch(searchProdCode(input));
            }
        }
        if (buscarPorNombre) {
            if (input.trim() === '') {
                dispatch(getProdUser2());

            } else {
                dispatch(searchProdName(input));

            }
        }
        if (buscarPorCodigo === false && buscarPorNombre === false && input !== '') {
            Swal.fire({
                icon: 'warning',
                title: 'Selecciona cómo deseas buscar el producto',
                text: 'Por nombre o por código',
            });
            setInput('')
        }
    }, [input, dispatch]);


    return (
        <div className={d.search}>
            <div className={d.checks}>
                <label>
                    <input
                        type="checkbox"
                        checked={buscarPorCodigo}
                        onChange={handleBuscarPorCodigo}
                    />
                    Buscar por código
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={buscarPorNombre}
                        onChange={handleBuscarPorNombre}
                    />
                    Buscar por nombre
                </label>
            </div>
            <input
                type="text"
                placeholder='¿Qué estás buscando?'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
