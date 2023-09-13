import { GET_PROD, ADD_FAV, REMOVE_FAV, ADD_CART, REMOVE_CART } from '../redux/actionsType'

const InitialState = {
    Product: [],
    backupProduct: [],
    favorite: [],
    cart: []
}


const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_PROD:
            return {
                ...state,
                Product: action.payload,
                backupProduct: action.payload
            }
        case ADD_FAV:
            return {
                ...state,
                favorite: [...state.favorite, action.payload]

            }
        case REMOVE_FAV:
            const fav = state.favorite.filter((item) => item.id !== action.payload)

            return {
                ...state,
                favorite: fav
            }
        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_CART:
            const newCart = state.cart.filter((item) => item.id !== action.payload)
            return {
                ...state,
                cart: newCart
            }

        default: {
            return { ...state }
        }
    }
}

export default reducer;