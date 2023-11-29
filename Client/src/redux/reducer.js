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
    PUT_REVISOR,
    GET_ENTITY,
    POST_USER,
    SUMA,
    RESTA,
    CLEAN_CART,
    SEARCH_PROD,
    SEARCH_USER,
    SEARCH_BY_CODE,
    GET_USERS_NAME,
    ORDER_BY_ID_USER,
    PUT_USER_BANNED,
    DELETE_USER,
    SET_CART,
    SET_FAV,
    SET_CURRENT_PAGE,
    SET_NEXT_PAGE,
    SET_PREV_PAGE,
    FILTER_BY_TYPE,
    FILTER_BY_MIN_MAX,
    FILTER_BY_STATUS,
    SEACH_CODE_USER2,
    GET_PROD_USER2,
    SEARCH_PROD_CODE,
    SEARCH_PROD_NAME,
    SEARCH_STOCK,
    FILTER_BY_PRICE
} from '../redux/actionsType';

const InitialState = {
    Product: [],
    ProductUser2: [],
    backupProductUser2: [],
    Orders: [],
    backupOrder: [],
    OrdersUser: [],
    backupProduct: [],
    favorite: [],
    cart: [],
    allUsers: [],
    backupUsers: [],
    searchResults: [],
    allEntity: [],
    error: null,
    reviewsWithUserInfo: [],
    profile: {},
    orderDetail: {},
    approvalStatus: {},
    currentPage: 1,


};

const reducer = (state = InitialState, action) => {
    switch (action.type) {

        case GET_PROD_USER2:
            return {
                ...state,
                ProductUser2: action.payload,
                backupProductUser2: action.payload
            }
        case SEARCH_PROD_CODE:
            const prodCode = action.payload;
            // console.log(prodCode);
            const filteredProducts = (prodCode == null
                ? state.backupProductUser2
                : state.backupProductUser2.filter(item =>
                    item.code.toLowerCase().includes(prodCode.toLowerCase())
                )
            );
            return {
                ...state,
                ProductUser2: filteredProducts
            };

        case SEARCH_PROD_NAME:
            const prodName = action.payload;
            let filterProd = (prodName == null ? state.backupProductUser2 : state.backupProductUser2.filter(item => item.name.toLowerCase().includes(prodName.toLowerCase())))
            return {
                ...state,
                ProductUser2: filterProd
            }
        case SEARCH_STOCK:
            let value = action.payload

            let resp = value === "all" ? state.backupProductUser2 : value === "No_Stock" ? state.backupProductUser2.filter(item => item.stock === 0) : ''
            return {
                ...state,
                ProductUser2: resp
            }
        case FILTER_BY_PRICE:
            // console.log(state.backupProductUser2)
            let valuePrice = action.payload === 'min' ?
                state.backupProductUser2.sort(function (a, b) {
                    if (a.price > b.price) { return 1 }
                    if (b.price > a.price) { return -1 }
                    return 0;
                }) :
                state.backupProductUser2.sort(function (a, b) {
                    if (a.price < b.price) { return 1 }
                    if (b.price < a.price) { return -1 }
                    return 0;
                })
            return {
                ...state,
                ProductUser2: [...valuePrice]
            }







        case SEACH_CODE_USER2:
            const code2 = action.payload;
            // console.log(code2);
            let filterCode2 = (code2 == null ? state.backupOrder : state.backupOrder.filter(ord => ord.codeOrder.toLowerCase().includes(code2.toLowerCase())))
            return {
                ...state,
                Orders: filterCode2
            }
        case FILTER_BY_STATUS:
            const filterStatus = action.payload === "on" ? state.backupOrder.filter(item => !item.providerCode) : state.backupOrder.filter(item => item.providerCode !== null)
            const res = action.payload === "All" ? state.backupOrder : filterStatus
            return {
                ...state,
                Orders: res
            }
        case FILTER_BY_MIN_MAX:
            let sortArr2 = action.payload === 'MIN' ?
                state.backupOrder.sort(function (a, b) {
                    if (a.Prods.length > b.Prods.length) { return 1 }
                    if (b.Prods.length > a.Prods.length) { return -1 }
                    return 0;
                }) :
                state.backupOrder.sort(function (a, b) {
                    if (a.Prods.length < b.Prods.length) { return 1 }
                    if (b.Prods.length < a.Prods.length) { return -1 }
                    return 0;
                })
            return {
                ...state,
                Orders: [...sortArr2]
            }
        case FILTER_BY_TYPE:
            const filteredOrders = state.backupOrder.filter(order =>
                order.Prods.some(product => product.supplie_type === action.payload)
            );
            const filter_response = action.payload === "all" ? state.backupOrder : filteredOrders
            return {
                ...state,
                Orders: filter_response
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_PREV_PAGE:
            const prev = --state.currentPage
            return {
                ...state,
                currentPage: prev
            }
        case SET_NEXT_PAGE:
            const next = ++state.currentPage
            return {
                ...state,
                currentPage: next
            }

        case GET_REVIEWS:
            const reviewsWithUserInfo = action.payload.map((review) => {
                const user = getUserInfo(review.userReviewId); // Debes implementar esta función
                return {
                    ...review,
                    user
                };
            });

            return {
                ...state,
                reviewsWithUserInfo
            };
        case GET_ENTITY:
            return {
                ...state,
                allEntity: action.payload
            };
        case GET_PROD:
            return {
                ...state,
                Product: action.payload,
                backupProduct: action.payload
            };
        case GET_ORDER:
            return {
                ...state,
                Orders: action.payload,
                backupOrder: action.payload
            };
        case ORDER_BY_ID_USER:
            return {
                ...state,
                OrdersUser: action.payload
            };
        case POST_USER:
            return {
                ...state,
            };
        case PUT_USER_BANNED:
            return {
                ...state,
                allUsers: state.allUsers.map((user) =>
                    user.id === action.payload.id
                        ? { ...user, active: action.payload.active }
                        : user
                ),
            };
        case ORDER_DETAIL:
            return {
                ...state,
                orderDetail: action.payload
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                orderDetail: {}
            };

        case ADD_FAV:
            return {
                ...state,
                favorite: [
                    ...state.favorite,
                    action.payload
                ]
            };
        case REMOVE_FAV:
            const fav = state.favorite.filter((item) => item.id !== action.payload);

            return {
                ...state,
                favorite: fav
            };
        case ADD_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            };
        case REMOVE_CART:
            const newCart = state.cart.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cart: newCart
            };
        case GET_USERS_NAME:
            return {
                ...state,
                allUsers: action.payload,
                backupUsers: action.payload
            }

        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };

        case BY_TYPE:
            const typeSupplies = state.backupProduct.filter((item) => item.supplie_type === action.payload);
            return {
                ...state,
                Product: typeSupplies
            };
        case PUT_REVISOR:
            return {
                ...state,
                ...state,
                approvalStatus: {
                    ...state.approvalStatus,
                    [action.payload.orderId]: action.payload.approvalStatus
                }
            };
        case SUMA:
            const aux = state.cart;
            let source = aux.find((item) => item.id === action.payload);
            source ? source.quanty++ : '';
            return {
                ...state,
                cart: [...state.cart]
            };
        case RESTA:
            const aux1 = state.cart;
            let source1 = aux1.find((item) => item.id === action.payload);
            source1 ? source1.quanty-- : '';
            return {
                ...state,
                cart: [...state.cart]
            };
        case CLEAN_CART:
            return {
                ...state,
                cart: []
            };
        case SEARCH_PROD:
            const name = action.payload;
            let searchByfilter = (name == null ? state.Product = state.backupProduct : state.Product.filter(products => products.name.toLowerCase().includes(name.toLowerCase())))
            return {
                ...state,
                Product: searchByfilter
            }
        case SEARCH_BY_CODE:
            const code = action.payload;
            let filterCode = (code == null ? state.OrdersUser : state.OrdersUser.filter(ord => ord.codeOrder.toLowerCase().includes(code.toLowerCase())))
            return {
                ...state,
                OrdersUser: filterCode
            }
        case SEARCH_USER:

            const userName = action.payload;
            const searchByfilterUser = userName ?
                state.allUsers.filter(user => user.name && user.name.toLowerCase().includes(userName.toLowerCase())) : state.backupUsers;
            return {
                ...state,
                allUsers: searchByfilterUser,
                searchResults: searchByfilterUser,
            };
        case SET_CART:
            return {
                ...state,
                cart: action.payload
            }
        case SET_FAV:
            return {
                ...state,
                favorite: action.payload
            }

        default:
            return state;
    }
};

export default reducer;

