// SearchBar.js

import React, { useState } from 'react';
import d from './searchBarProd.module.css'
const SearchBar = () => {
    const [buscarPorCodigo, setBuscarPorCodigo] = useState(false);
    const [buscarPorNombre, setBuscarPorNombre] = useState(false);
    const [inputBusqueda, setInputBusqueda] = useState('');

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

    const realizarBusqueda = () => {
        const buscarPor = buscarPorCodigo ? 'codigo' : buscarPorNombre ? 'nombre' : 'ninguno';
        console.log('Buscar por:', buscarPor);
        console.log('Texto de búsqueda:', inputBusqueda);
        // Aquí puedes realizar la búsqueda según la opción seleccionada (por código, por nombre o ninguna)
    };

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
                value={inputBusqueda}
                onChange={(e) => setInputBusqueda(e.target.value)}
            />
            {/* <button onClick={realizarBusqueda}>Buscar</button> */}
        </div>
    );
};

export default SearchBar;
