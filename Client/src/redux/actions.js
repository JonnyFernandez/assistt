import { GET_PROD, ADD_FAV, REMOVE_FAV, ADD_CART, REMOVE_CART, GET_PROFILE } from './actionsType'
import axios from 'axios'


export const getProd = () => {
    return async function (dispatch) {
        let res = await axios("/prod")
        return dispatch({ type: GET_PROD, payload: res.data })
    }
}
//-------------------favorites---------------------
export const addFav = (payload) => {

    return { type: ADD_FAV, payload: payload };

};

export const removeFav = (id) => {

    return { type: REMOVE_FAV, payload: id }
}
//------------------------Cart-----------------
export const removeCard = (id) => {

    return { type: REMOVE_CART, payload: id }
}

export const addCart = (payload) => {

    return { type: ADD_CART, payload: payload };

};


// ----------------------profile------------------
export const getUser1 = (user1Code) => {
    return async (dispatch) => {
        let res = await axios(`/user1?codeUser=${user1Code}`)
        return dispatch({ type: GET_PROFILE, payload: res.data })
    }
}
export const getUser2 = () => {
    return async (dispatch) => {
        let res = await axios(`/user1?codeUser=H5640`)
        return dispatch({ type: GET_PROFILE, payload: res.data })
    }
}
export const getUser3 = () => {
    return async (dispatch) => {
        let res = await axios(`/user1?codeUser=H5640`)
        return dispatch({ type: GET_PROFILE, payload: res.data })
    }
}
export const getUser4 = () => {
    return async (dispatch) => {
        let res = await axios(`/user1?codeUser=H5640`)
        return dispatch({ type: GET_PROFILE, payload: res.data })
    }
}