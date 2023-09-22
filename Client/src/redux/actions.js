
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
    BY_TYPE,
    GET_REVIEWS,
    PUT_REVISOR1,
    PUT_REVISOR2
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

export const getOrderDetail = (id) => {
    return async (dispatch) => {
      try {
        if (!id) {
          throw new Error('ID inválido');
        }
 
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
        let res = await axios( `/user1` )
        return dispatch( { type: GET_PROFILE, payload: res.data } )
    }
}


// export const getUser1 = (userCode) => {
//     return async (dispatch) => {
//         let res = await axios(`/user1?codeUser=${userCode}`)
//         return dispatch({ type: GET_PROFILE, payload: res.data })
//     }
// }
// export const getUser2 = (userCode) => {
//     return async (dispatch) => {
//         let res = await axios(`/user1?codeUser=${userCode}`)
//         return dispatch({ type: GET_PROFILE, payload: res.data })
//     }
// }
// export const getUser3 = (userCode) => {
//     return async (dispatch) => {
//         let res = await axios(`/user1?codeUser=${userCode}`)
//         return dispatch({ type: GET_PROFILE, payload: res.data })
//     }
// }
// export const getUser4 = (userCode) => {
//     return async (dispatch) => {
//         let res = await axios(`/user1?codeUser=${userCode}`)
//         return dispatch({ type: GET_PROFILE, payload: res.data })
//     }
// }



//------------------------REVIEW-----------------------------------

export const getReviews = () => {
    return async function (dispatch) {
      try {
        const res = await axios.get("/review");
  
        // Mapea las revisiones para agregar la información del usuario a cada una
        const reviewsWithUserInfo = await Promise.all(
          res.data.map(async (review) => {
            // Suponemos que `userReviewId` es el ID del usuario que hizo la revisión
            const user = await getUserInfo(review.userReviewId); // Debes implementar esta función
            return {
              ...review,
              user, // Agregamos la información del usuario a la revisión
            };
          })
        );
  
        dispatch({ type: GET_REVIEWS, payload: reviewsWithUserInfo });
      } catch (error) {
        console.error("Error al obtener las reseñas:", error);
      }
    };
  };
  
  
//------------------------fliter by Sopplies type------------------
export const prodByType = (payload) => {
    return { type: BY_TYPE, payload: payload }
}

export const putRevisor2 = (id, dataRevisor2) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/user3/order/${id}`, dataRevisor2);
    return dispatch({ type: PUT_REVISOR2, payload: data });
  };
};

export const putRevisor1 = (id, dataRevisor1) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/user2/order/${id}`, dataRevisor1);
    return dispatch({ type: PUT_REVISOR1, payload: data });
  };
};


