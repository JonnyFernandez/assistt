import {
    GET_PROD,
    ADD_FAV,
    REMOVE_FAV,
    ADD_CART,
    REMOVE_CART,
    GET_PROFILE,
    GET_ORDER,
    CLEAN_DETAIL,
    ORDER_DETAIL,
} from './actionsType'
import axios from 'axios'


export const getProd = () => {
    return async function ( dispatch ) {
        let res = await axios( "/prod" )
        return dispatch( { type: GET_PROD, payload: res.data } )
    }
}

export const getOrders = () => {
    return async function ( dispatch ) {
        try {
            const res = await axios.get( "/order" );
            dispatch( { type: GET_ORDER, payload: res.data } );
        } catch ( error ) {
            console.error( "Error al obtener las órdenes:", error );
        }
    }
}

// export const getOrderDetail = ( id ) => {
//     return async ( dispatch ) => {
//         try {
//             let response = await axios( `/order/${id}` );
//             console.log(response.data);
//             return dispatch( { type: ORDER_DETAIL, payload: response.data } );
//         } catch ( error ) {
//             return error.message;
//         }
//     };
// };

export const getOrderDetail = (id) => {
    return async (dispatch) => {
      try {
        // Asegúrate de que id sea un valor válido (por ejemplo, un número o una cadena)
        if (!id) {
          throw new Error('ID inválido');
        }
  
        // Realiza la solicitud axios con el valor de id
        let response = await axios(`/order/${id}`);
        console.log(response.data);
        return dispatch({ type: ORDER_DETAIL, payload: response.data });
      } catch (error) {
        return error.message;
      }
    };
  };

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

// -------------------favorites---------------------
export const addFav = ( payload ) => {

    return { type: ADD_FAV, payload: payload };

};

export const removeFav = ( id ) => {

    return { type: REMOVE_FAV, payload: id }
}
// ------------------------Cart-----------------
export const removeCard = ( id ) => {

    return { type: REMOVE_CART, payload: id }
}

export const addCart = ( payload ) => {

    return { type: ADD_CART, payload: payload };

};


// ----------------------profile------------------
export const getUserProfile = () => {
    return async ( dispatch ) => {
        let res = await axios( `/user1?codeUser=H5640` )
        return dispatch( { type: GET_PROFILE, payload: res.data } )
    }
}
