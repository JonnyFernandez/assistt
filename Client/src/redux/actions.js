

import {
  GET_PROD, ADD_FAV, REMOVE_FAV, ADD_CART, REMOVE_CART, GET_PROFILE, GET_ORDER, CLEAN_DETAIL, ORDER_DETAIL, BY_TYPE, QUANTITY, POST_USER,
  GET_REVIEWS, PUT_REVISOR, GET_ENTITY, SEARCH_PROD, SEARCH_USER, GET_USERS_NAME, SET_SEARCH_RESULTS, ORDER_BY_ID_USER, CLEAN_CART
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
      let res = await axios(`http://localhost:3001/api/user/`)
      return dispatch({ type: GET_USERS_NAME, payload: res.data })
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
  }
}




//-------------------cargar datos de user-------------------
// Crea un nuevo usuario
export const addInfo = (id, inputs) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:3001/api/user/${id}`, inputs);
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
  console.log(input);
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
    const respuesta = await axios.post("http://localhost:3001/review", reseñas);
    await Swal.fire({
      title: `Reseña para la Orden ${reseñas.codeOrder} creada con éxito`,
      // imageUrl: img2,
      imageUrl: '',
      imageWidth: 100,
      imageHeight: 100,
      confirmButtonText: "Aceptar",
      background: "white",
      width: "30%",
      heightAuto: false,
      height: "1%",
      padding: "3rem",
      buttonsStyling: false,
      customClass: {
        title: "mesageAlert",
        confirmButton: "buttonAlert",
      },
    })
    // .then((resultado) => {
    //   if (resultado.isConfirmed) {

    //   }
    // });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      Swal.fire({
        title: "Error al crear la reseña",
        text: error.response.data.error,
        // imageUrl: img1,
        imageWidth: 100,
        imageHeight: 100,
        background: "white",
        width: "30%",
        heightAuto: false,
        height: "1%",
        padding: "3rem",
        buttonsStyling: false,
        confirmButtonText: "Aceptar",
        customClass: {
          title: "mesageAlert",
          confirmButton: "buttonAlert",
        },
      });
    } else {
      Swal.fire({
        title: "Error al crear la reseña",
        // imageUrl: img1,
        imageWidth: 100,
        imageHeight: 100,
        background: "white",
        width: "30%",
        heightAuto: false,
        height: "1%",
        padding: "3rem",
        buttonsStyling: false,
        customClass: {
          title: "mesageAlert",
          confirmButton: "buttonAlert",
        },
      });
    }

  }
};


//---------------------ORDENES DE UN USUARIO-----------------------------------------

export const getOrderUserById = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`http://localhost:3001/order/api/${id}`);
    // console.log(res.data);
    return dispatch({ type: ORDER_BY_ID_USER, payload: res.data });
  };
};

