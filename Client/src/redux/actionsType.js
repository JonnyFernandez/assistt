

// Aprobar y despaproar cotizaciones
export const APPROVE_QUOTE_REQUEST = 'APPROVE_QUOTE_REQUEST';
export const APPROVE_QUOTE_SUCCESS = 'APPROVE_QUOTE_SUCCESS';
export const APPROVE_QUOTE_FAILURE = 'APPROVE_QUOTE_FAILURE';

export const DISAPPROVE_QUOTE_REQUEST = 'DISAPPROVE_QUOTE_REQUEST';
export const DISAPPROVE_QUOTE_SUCCESS = 'DISAPPROVE_QUOTE_SUCCESS';
export const DISAPPROVE_QUOTE_FAILURE = 'DISAPPROVE_QUOTE_FAILURE';

//-------PRODUCTOS--------------------------
export const GET_PROD = "GET_PROD"
export const GET_PROD_USER2 = "GET_PROD_USER2"
export const BY_TYPE = "BY_TYPE"
export const QUANTITY = "QUANTITY"

export const SEARCH_PROD_CODE = "SEARCH_PROD_CODE"
export const SEARCH_PROD_NAME = "SEARCH_PROD_NAME"
export const SEARCH_STOCK = "SEARCH_STOCK"
export const FILTER_BY_PRICE = "FILTER_BY_PRICE"


//-------AGRGAR PROD FAVORITOS USER 1 -------
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

//-------CARRITO------------------------------
export const REMOVE_CART = "REMOVE_CART"
export const ADD_CART = "ADD_CART"

//------------ USERS--------------------------
export const GET_PROFILE = "GET_PROFILE"
export const GET_USERS_NAME = "GET_USERS_NAME"
export const SEARCH_USER = "SEARCH_USER"
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"
export const PUT_USER_BANNED = "PUT_USER_BANNED"
export const DELETE_USER = "DELETE_USER"
export const PROFILE_UPDATED = "PROFILE_UPDATED"


//----PARA QUE LOS USUARIOS APRUEBEN ORDENES----
export const PUT_REVISOR = "PUT_REVISOR"

//----------CREAR USUARIOS--------
export const POST_USER = "POST_USER"

//------------- ORDENES------------------------
export const GET_ORDER = "GET_ORDER"
export const ORDER_DETAIL = "ORDER_DETAIL"
export const CLEAN_DETAIL = "CLEAN_DETAIL"

//-----------RESEÑAS A LAS ORDENES--------------
export const GET_REVIEWS = "GET_REVIEWS"

//---------ENTIDAD-----------------------------
export const GET_ENTITY = "GET_ENTITY"

export const SUMA = "SUMA"
export const RESTA = "RESTA"
export const CLEAN_CART = "CLEAN_CART"


//---------BUSQUEDA EN TIEMPO REAL-----------------------------
export const SEARCH_PROD = "SEARCH_PROD";

//---------ORDENES DE UN USUARIO-----------------------------
export const ORDER_BY_ID_USER = "ORDER_BY_ID_USER"


export const PAUSE_ORDER = "PAUSE_ORDER"


// ------------Search By Code----------------------
export const SEARCH_BY_CODE = "SEARCH_BY_CODE"


export const SET_CART = "SET_CART"
export const SET_FAV = "SET_FAV"


// ------------------------paginate

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_PREV_PAGE = "SET_PREV_PAGE"
export const SET_NEXT_PAGE = "SET_NEXT_PAGE"
// ------------------------paginate

export const FILTER_BY_TYPE = "FILTER_BY_TYPE"
export const FILTER_BY_MIN_MAX = "FILTER_BY_MIN_MAX"
export const FILTER_BY_STATUS = "FILTER_BY_STATUS"
export const SEACH_CODE_USER2 = "SEACH_CODE_USER2"

export const ACCEPT_ORDER_USER2 = "ACCEPT_ORDER_USER2"
export const GET_ORDER_USER2 = "GET_ORDER_USER2"

export const FINISH_ORDER_USER2 = "FINISH_ORDER_USER2"
export const QUOTES_ORDER_USER3 = "QUOTES_ORDER_USER3"
// 
export const ORDER_HISTORY = "ORDER_HISTORY"
export const MORE_SELLER = "MORE_SELLER"
export const SEARCH_MY_ORDER_CODE = "SEARCH_MY_ORDER_CODE"