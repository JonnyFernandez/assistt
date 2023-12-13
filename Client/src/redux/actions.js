import axios from 'axios'
import Swal from 'sweetalert2'


import {
  GET_PROD, ADD_FAV, REMOVE_FAV, ADD_CART, REMOVE_CART, GET_PROFILE, GET_ORDER, CLEAN_DETAIL, ORDER_DETAIL, BY_TYPE, QUANTITY, POST_USER,
  GET_REVIEWS, PUT_REVISOR, GET_ENTITY, SEARCH_PROD, SEARCH_USER, GET_USERS_NAME, SET_SEARCH_RESULTS, ORDER_BY_ID_USER, CLEAN_CART, PUT_USER_BANNED, SEARCH_BY_CODE, SET_CART, SET_FAV, SET_CURRENT_PAGE, SET_NEXT_PAGE, SET_PREV_PAGE, FILTER_BY_TYPE, FILTER_BY_MIN_MAX, FILTER_BY_STATUS, SEACH_CODE_USER2, GET_PROD_USER2, SEARCH_PROD_CODE, SEARCH_PROD_NAME, SEARCH_STOCK, FILTER_BY_PRICE, ACCEPT_ORDER_USER2, GET_ORDER_USER2, FINISH_ORDER_USER2, QUOTES_ORDER_USER3, ORDER_HISTORY,APPROVE_QUOTE_REQUEST, APPROVE_QUOTE_SUCCESS, APPROVE_QUOTE_FAILURE, DISAPPROVE_QUOTE_REQUEST, DISAPPROVE_QUOTE_SUCCESS, DISAPPROVE_QUOTE_FAILURE
} from './actionsType'


// Acción para aprobar una cotización
export const approveQuoteRequest = () => ({
  type: APPROVE_QUOTE_REQUEST,
});

export const approveQuoteSuccess = (data) => ({
  type: APPROVE_QUOTE_SUCCESS,
  payload: data,
});

export const approveQuoteFailure = (error) => ({
  type: APPROVE_QUOTE_FAILURE,
  payload: error,
});

export const approveQuote = (quoteId, userEmail) => async (dispatch) => {
  dispatch(approveQuoteRequest());

  try {
    // Lógica para aprobar la cotización en el servidor
    const response = await fetch(`http://localhost:3001/order/${quoteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quotes: true, userEmail }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(approveQuoteSuccess(data));
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al aprobar la cotización');
    }
  } catch (error) {
    // Manejar errores y despachar acción de fallo
    dispatch(approveQuoteFailure(error.message || 'Error al aprobar la cotización'));
  }
};

// Acción para desaprobar una cotización
export const disapproveQuoteRequest = () => ({
  type: DISAPPROVE_QUOTE_REQUEST,
});

export const disapproveQuoteSuccess = (data) => ({
  type: DISAPPROVE_QUOTE_SUCCESS,
  payload: data,
});

export const disapproveQuoteFailure = (error) => ({
  type: DISAPPROVE_QUOTE_FAILURE,
  payload: error,
});

export const disapproveQuote = (quoteId) => async (dispatch) => {
  dispatch(disapproveQuoteRequest());

  try {
    // Lógica para desaprobar la cotización en el servidor
    const response = await fetch(`http://localhost:3001/order/${quoteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quotes: false }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(disapproveQuoteSuccess(data));
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al desaprobar la cotización');
    }
  } catch (error) {
    // Manejar errores y despachar acción de fallo
    dispatch(disapproveQuoteFailure(error.message || 'Error al desaprobar la cotización'));
  }
};



export const history_order = (payload) => {
  return { type: ORDER_HISTORY, payload }
};

export const QuotesOrder = (id, data) => {

  return async function (dispatch) {
    try {
      let info = { quotes: data }

      await axios.put(`http://localhost:3001/order/${id}`, info);
      dispatch({ type: QUOTES_ORDER_USER3 });
    } catch (error) {
      console.error("Error al Actualizacion la órdenes:", error);
    }
  }
};

export const dispatchOrder = (id, amout) => {

  return async function (dispatch) {
    try {
      let info = { amout: amout }

      await axios.put(`http://localhost:3001/order/${id}`, info);
      dispatch({ type: FINISH_ORDER_USER2 });
    } catch (error) {
      console.error("Error al finalizar la órdenes:", error);
    }
  }
};
export const abolish_Order = (id, amout) => {

  return async function (dispatch) {
    try {
      let info = { amout: amout }
      // console.log(info);
      await axios.put(`http://localhost:3001/order/${id}`, info);
      dispatch({ type: FINISH_ORDER_USER2 });
    } catch (error) {
      console.error("Error al cancelar la órdenes:", error);
    }
  }
}



export const createProd = async (inputs) => {
  await axios.post("http://localhost:3001/prod/", inputs)
  // console.log(inputs);
}

export const acceptOrder_user2 = (id, userEmail) => {
  return async function (dispatch) {
    try {
      let info = { userEmail: userEmail }
      console.log(info);
      await axios.put(`http://localhost:3001/order/${id}`, info);
      dispatch({ type: ACCEPT_ORDER_USER2 });
    } catch (error) {
      console.error("Error al aceptar la órdenes:", error);
    }
  }
}

export const searchProdCode = (payload) => {
  return { type: SEARCH_PROD_CODE, payload }
}
export const searchProdName = (payload) => {

  return { type: SEARCH_PROD_NAME, payload }
}

export const prodStock = (payload) => {
  return { type: SEARCH_STOCK, payload }
}
export const filterByPrice = (payload) => {
  return { type: FILTER_BY_PRICE, payload }
}
export const setProd = async (id, upDate) => {

  await axios.put(`http://localhost:3001/prod/api/${id}`, upDate)

}
// -------------------------------------------------------------


export const getProd = () => {
  return async function (dispatch) {
    let res = await axios("/prod")
    return dispatch({ type: GET_PROD, payload: res.data })
  }
}
export const getProdUser2 = () => {
  return async function (dispatch) {
    let res = await axios("/prod")
    return dispatch({ type: GET_PROD_USER2, payload: res.data })
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
// import swal from 'sweetalert'; // Importa la librería swal

export const getOrdersUser2 = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/order");
      dispatch({ type: GET_ORDER_USER2, payload: res.data });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        Swal("Error", errorMessage, "error"); // Muestra el mensaje de error con swal
      } else {
        console.error("Error al obtener las órdenes:", error);
        Swal("Error", "Error al obtener las órdenes", "error"); // Mensaje genérico de error si no se pudo obtener el mensaje del servidor
      }
    }
  }
}


export const getOrderDetail = (id) => {
  return async (dispatch) => {

    let res = await axios.get(`http://localhost:3001/order/${id}`);
    //console.log(res.data);
    return dispatch({ type: ORDER_DETAIL, payload: res.data });

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

export const getUser1 = (id) => {
  return async (dispatch) => {
    let res = await axios(`http://localhost:3001/user/${id}`)
    return dispatch({ type: GET_PROFILE, payload: res.data })
  }
}


export const getUserName = () => {
  try {
    return async function (dispatch) {
      let res = await axios(`http://localhost:3001/user/`)
      return dispatch({ type: GET_USERS_NAME, payload: res.data })
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
  }
}





//-------------------cargar datos de user-------------------


export const addInfo = (id, inputs) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:3001/user/${id}`, inputs);
      Swal.fire({

        text: 'Informacion Cargada',
        icon: 'success',
      });

      dispatch({ type: POST_USER, payload: data });

      return data; // Retorna los datos del nuevo usuario si es necesario
    } catch (error) {
      console.error('Error al cargar datos:', error);
      Swal.fire({
        text: 'Error al cargar datos',
        icon: 'error',
      });
      return null;
    }
  };
};




//--------------BANNEAR USUARIO-----------------------------

export function bannedUsers(id, active) {
  // Agrega este log
  return async (dispatch) => {
    try {

      const { data } = await axios.put(`/user/banned/${id}`, active); // Corregida la ruta
      dispatch({
        type: PUT_USER_BANNED,
        payload: {
          id,
          active: data.active,
        },
      });

      return data;  // Asegúrate de que la función devuelva una promesa
    } catch (error) {
      // Imprime información sobre el error en la consola
      console.error("Error en la solicitud HTTP:", error);
      throw error;  // Propaga el error para que pueda ser manejado donde se llama la función
    }
  };
}


//--------------------Todas las entidades-------------------------


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



//------------------------fliter by Sopplies type------------------
export const prodByType = (payload) => {
  return { type: BY_TYPE, payload: payload }
}



// -----------------MODIFICAR CANTIDAD DE PROD-------------
export const quantityDB = (id, newQuantity) => {
  return async (dispatch) => {
    try {
      const updatedData = {
        quanty: newQuantity,
      };

      // Realiza la solicitud PUT con el objeto actualizado
      await axios.put(`/prod/api/${id}`, updatedData);

      // Puedes despachar una acción de Redux aquí si es necesario
      // dispatch(actualizarDatosEnRedux(updatedData));
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error('Error al actualizar la cantidad en la base de datos:', error);
    }
  };
};


//--------------------APROBACIONES DE ORDENES POR USUARIOS---------------------------


export const putRevisor = (orderId, dataAprob) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/order/${orderId}`, dataAprob);
      dispatch({
        type: PUT_REVISOR, payload: {
          orderId,
          approvalStatus: data.aprobado,
        },
      });
    } catch (error) {
      console.error("Error al aprobar/desaprobar la orden:", error);
    }
  };
};






// --------------------------CREAR ORDEN DE COMPRAS-------------

export const createOrder = (input) => {
  // console.log(input);
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

//----------busqueda de pro en tiempo real----------
export const searchByNameProd = (payload) => {
  return { type: SEARCH_PROD, payload }
}

export const searchByNameUser = (searchQuery) => {
  return { type: SEARCH_USER, payload: searchQuery };
};

export const searchByCode = (code) => {
  return { type: SEARCH_BY_CODE, payload: code };
}

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





export const postReview = async (reseñas) => {
  try {
    await axios.post("http://localhost:3001/review", reseñas);

  } catch (error) {

    console.error("Error al crear la reseña:", error);

    throw error;
  }
};


//---------------------ORDENES DE UN USUARIO-----------------------------------------

export const getOrderUserById = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`http://localhost:3001/order/api/${id}`);
    console.log(res.data);
    return dispatch({ type: ORDER_BY_ID_USER, payload: res.data });
  };
};



// export const pause_order = (id, pause) => {
//   return async (dispatch) => {
//     try {
//       const data = { pause }
//       await axios.put(`/order/api/${id}`, data);
//       const message = pause === 'pause' ? "Orden Pausada" : pause === 'resume' ? "Orden Reanudada" : 'Orden eliminada';

//       Swal.fire({
//         title: message,
//         imageUrl: '',
//         imageWidth: 100,
//         imageHeight: 100,
//         confirmButtonText: "Aceptar",
//         background: "white",
//         width: "30%",
//         heightAuto: false,
//         height: "1%",
//         padding: "3rem",
//         buttonsStyling: false,
//         customClass: {
//           title: "mesageAlert",
//           confirmButton: "buttonAlert",
//         },
//       });
//     } catch (error) {
//       console.error("Error al aprobar/desaprobar la orden:", error);
//       const errorMessage = error.response && error.response.data && error.response.data.error
//         ? error.response.data.error
//         : "Error al pausar la orden";

//       Swal.fire({
//         title: "Error al pausar la orden",
//         text: errorMessage,
//         imageWidth: 100,
//         imageHeight: 100,
//         background: "white",
//         width: "30%",
//         heightAuto: false,
//         height: "1%",
//         padding: "3rem",
//         buttonsStyling: false,
//         confirmButtonText: "Aceptar",
//         customClass: {
//           title: "mesageAlert",
//           confirmButton: "buttonAlert",
//         },
//       });
//     }
//   };
// };


// ----------setear carrito con el localStorage-----


export const pause_order = (id, pause) => {
  return async (dispatch) => {
    try {
      const data = { pause };
      await axios.put(`/order/api/${id}`, data);

      const message = pause === 'pause' ? "Orden Pausada" : pause === 'resume' ? "Orden Reanudada" : 'Orden eliminada';
      console.log(message); // Puedes usar esta información para manejar la respuesta en el front-end

      // Ejemplo de cómo podrías manejar la respuesta en el front-end:
      // Realizar acciones adicionales según la respuesta, actualizar el estado, etc.

    } catch (error) {
      console.error("Error al aprobar/desaprobar la orden:", error);
      const errorMessage = error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : "Error al pausar la orden";

      console.error(errorMessage); // Manejar el mensaje de error en caso de fallo en la solicitud
      // Puedes usar esta información para manejar el error en el front-end
    }
  };
};




export const setCartItems = (storeCart) => {
  return { type: SET_CART, payload: storeCart }
}

export const setFavItems = (storedFav) => {
  return { type: SET_FAV, payload: storedFav }
}

// -----------------paginate--------------------------
export const setCurrentPage = (payload) => {
  return { type: SET_CURRENT_PAGE, payload }
}
export const setPrevPage = () => {
  return { type: SET_PREV_PAGE }

}
export const setNextPage = () => {
  return { type: SET_NEXT_PAGE }
}
// -----------------paginate--------------------------


export const filter_By_Type_user2 = (payload) => {
  return { type: FILTER_BY_TYPE, payload }
}
export const filter_By_MinMax_user2 = (payload) => {
  return { type: FILTER_BY_MIN_MAX, payload }

}
export const filter_By_Status_user2 = (payload) => {
  return { type: FILTER_BY_STATUS, payload }

}

export const searchCode_user2 = (payload) => {
  return { type: SEACH_CODE_USER2, payload }
}










