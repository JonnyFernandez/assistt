
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
    QUANTITY,
    GET_REVIEWS,
    PUT_REVISOR1,
    PUT_REVISOR2,
    POST_USER1,
    POST_USER2,
    GET_ENTITY,
    SUMA,
    RESTA,
    CLEAN_CART,

} from './actionsType'

import axios from 'axios'
import Swal from 'sweetalert2'


export const getProd = () => {
  return async function (dispatch) {
    let res = await axios("/prod")
    return dispatch({ type: GET_PROD, payload: res.data })
  }
}

//-------------------ORDENES----------------------------------
export const getOrders = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("/order");
      dispatch({ type: GET_ORDER, payload: res.data });
    } catch (error) {
      console.error("Error al obtener las órdenes:", error);
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
export const addFav = (payload) => {

  return { type: ADD_FAV, payload: payload };

};

export const removeFav = (id) => {

  return { type: REMOVE_FAV, payload: id }
}
// ------------------------Cart/ CARRITO-----------------
export const removeCard = (id) => {

  return { type: REMOVE_CART, payload: id }
}

export const addCart = (payload) => {

  return { type: ADD_CART, payload: payload };

};


// ----------------------profile------------------

export const getUser1 = (userCode) => {
  return async (dispatch) => {
    let res = await axios(`/user1?codeUser=${userCode}`)
    return dispatch({ type: GET_PROFILE, payload: res.data })
  }
}
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

//-------------------CREACION DE USUARIOS-------------------
// Crea un nuevo usuario
export const postUser1 = (newUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/user1', newUser);
      Swal.fire({
        text: 'Usuario Creado',
        icon: 'success',
      });

       dispatch({ type: POST_USER1, payload: data });

      return data; // Retorna los datos del nuevo usuario si es necesario
    } catch (error) {
      console.error('Error desconocido al crear usuario:', error);
      Swal.fire({
        text: 'Error desconocido al crear usuario',
        icon: 'error',
      });
      return null;
    }
  };
};

export const postUser2 = (newUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/user2', newUser);
      Swal.fire({
        text: 'Usuario Creado',
        icon: 'success',
      });

       dispatch({ type: POST_USER2, payload: data });

      return data; // Retorna los datos del nuevo usuario si es necesario
    } catch (error) {
      console.error('Error desconocido al crear usuario:', error);
      Swal.fire({
        text: 'Error desconocido al crear usuario',
        icon: 'error',
      });
      return null;
    }
  };
};

// export const postUser1 = (newUser) => {
//   return async (dispatch) => {
//     const res = await axios.post("/user1", newUser);
//     return dispatch({ type: POST_USER1, res });
//   };
// };


export const getEntity = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/entity', {});
      const data = res.data;
      return dispatch({
        type: GET_ENTITY,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};


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



// -----------------MODIFICAR CANTIDAD DE PROD-------------
export const quantity = (id, input) => {
  return async (dispatch) => {
    await axios.put(`/prod/api/${id}`, input)

  }
}


//--------------------APROBACIONES DE ORDENES POR USUARIOS---------------------------
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




export const suma = (id) => {
  return { type: SUMA, payload: id }
}

export const resta = (id) => {
  return { type: RESTA, payload: id }
}



// --------------------------CREAR ORDEN DE COMPRAS-------------

export const createOrder = (input) => {
  return async (dispatch) => {
    try {
      await axios.post(`/order`, input)

    } catch (error) {
      console.log(error.message);
    }

  }
}
// ------------------LIMPIAR CARRITO----------
export const cleanCart = () => {
  return { type: CLEAN_CART }
}