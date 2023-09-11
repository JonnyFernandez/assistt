import { GET_PROD } from './actionsType'
import axios from 'axios'


export const getProd = () => {
    return async function (dispatch) {
        let res = await axios("/prod")
        return dispatch({ type: GET_PROD, payload: res.data })
    }
}