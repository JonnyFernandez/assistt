import {
  GET_PROD,
  GET_ORDER,
  ADD_FAV,
  REMOVE_FAV,
  ADD_CART,
  REMOVE_CART,
  GET_PROFILE,
  ORDER_DETAIL,
  CLEAN_DETAIL,
  BY_TYPE,
  GET_REVIEWS,
  PUT_REVISOR2,
  PUT_REVISOR1,
  POST_USER1,
  POST_USER2,
  POST_USER3,
  POST_USER4,
  GET_ENTITY,
  SUMA,
  RESTA,
  CLEAN_CART,
  SEARCH_PROD
} from '../redux/actionsType';

const InitialState = {
  Product: [],
  Orders: [],
  orderDetail: {},
  backupProduct: [],
  favorite: [],
  cart: [],
  allUsers: [],
  allEntity: [],
  error: null,
  reviewsWithUserInfo: [],
  profile: {}

};

const reducer = (state = InitialState, action) => {
  switch (action.type) {

    case GET_REVIEWS:
      const reviewsWithUserInfo = action.payload.map((review) => {
        const user = getUserInfo(review.userReviewId); // Debes implementar esta función
        return {
          ...review,
          user,
        };
      });

      return {
        ...state,
        reviewsWithUserInfo,
      };
    case GET_ENTITY:
      return {
        ...state,
        allEntity: action.payload,
      };
    case GET_PROD:
      return {
        ...state,
        Product: action.payload,
        backupProduct: action.payload,
      };
    case GET_ORDER:
      return {
        ...state,
        Orders: action.payload,
      };
    case ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        orderDetail: {},
      };
    case POST_USER1:
      return {
        ...state,
      };
    case POST_USER2:
      return {
        ...state,
      };
    case POST_USER3:
      return {
        ...state,
      };
    case POST_USER4:
      return {
        ...state,
      };
    case ADD_FAV:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case REMOVE_FAV:
      const fav = state.favorite.filter((item) => item.id !== action.payload);

      return {
        ...state,
        favorite: fav,
      };
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_CART:
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case BY_TYPE:
      const typeSupplies = state.backupProduct.filter(
        (item) => item.supplie_type === action.payload
      );
      return {
        ...state,
        Product: typeSupplies,
      };
    case PUT_REVISOR2:
      return {
        ...state,
      };
    case PUT_REVISOR1:
      return {
        ...state,
      };
    case SUMA:
      const aux = state.cart;
      let source = aux.find((item) => item.id === action.payload);
      source ? source.quanty++ : '';
      return {
        ...state,
        cart: [...state.cart],
      };
    case RESTA:
      const aux1 = state.cart;
      let source1 = aux1.find((item) => item.id === action.payload);
      source1 ? source1.quanty-- : '';
      return {
        ...state,
        cart: [...state.cart],
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };
    case SEARCH_PROD:
      const name = action.payload;
      let searchByfilter = (name == null
        ? state.Product = state.backupProduct
        : state.Product.filter(products => products.name.toLowerCase().includes(name.toLowerCase()))
      )
      return {
        ...state,
        Product: searchByfilter
      }
    default:
      return state;
  }
};

export default reducer;

// searchName: (state, action) => {
//   const name = action.payload;
//   if (name == null) {
//     state.products = state.productsAll;
//   } else {
//     state.products = state.productsAll.filter(products => products.name.toLowerCase().includes(name.toLowerCase()))
//   }