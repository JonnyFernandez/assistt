import { GET_PROD, ADD_FAV, REMOVE_FAV, ADD_CART, REMOVE_CART, GET_PROFILE } from '../redux/actionsType'

const InitialState = {
    Product: [{
        "id": 1,
        "code": "1235",
        "name": "K-kaution",
        "description": "Cepillo Endocervical Esteril Descartable",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.093Z"
    },
    {
        "id": 2,
        "code": "3456",
        "name": "OXÍMETRO DE PULSO",
        "description": "Oximetro De Pulso Saturometro Con Curva Y Pi. Aprobado Anmat",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.100Z"
    },
    {
        "id": 3,
        "code": "125",
        "name": "Reservorio Adulto ",
        "description": "Bolsa Reservorio Ambu Repuesto Adulto 2000ml",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.104Z"
    },
    {
        "id": 4,
        "code": "127",
        "name": "Barbijo",
        "description": "Barbijo Para Niños Con Elástico Y Clip Nasal 50u Pediátrico",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.109Z"
    },
    {
        "id": 5,
        "code": "128",
        "name": "Barbijo Con Válvula",
        "description": "Barbijo 3m Mascarilla Con Válvula 8511 N95 Caja 10 Unidades",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.113Z"
    },
    {
        "id": 6,
        "code": "126",
        "name": "",
        "description": "para la diarr3",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.110Z"
    },
    {
        "id": 7,
        "code": "110",
        "name": "Tensiómetro Digital",
        "description": "Tensiómetro Digital Maverick YE650D con Voz",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.118Z"
    },
    {
        "id": 8,
        "code": "111",
        "name": "Almohadilla Plantar Grande",
        "description": "Almohadilla Plantar Grande",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.120Z"
    },
    {
        "id": 9,
        "code": "129",
        "name": "Tapon Para Sonda Foley Vesical",
        "description": "Tapon Para Sonda Foley Vesical",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.115Z"
    },
    {
        "id": 10,
        "code": "114",
        "name": "Rodillera Abierta ",
        "description": "Rodillera Abierta Corta R7",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.123Z"
    },
    {
        "id": 11,
        "code": "115",
        "name": "Faja Flexband",
        "description": "Faja Flexband 3 Y 4 Bandas Regulable 3300 Y 3400",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.124Z"
    },
    {
        "id": 12,
        "code": "112",
        "name": "Andador 4 Ruedas",
        "description": "Andador 4 Ruedas Doble Función 425",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.122Z"
    },
    {
        "id": 13,
        "code": "113",
        "name": "Andador Paso A Paso",
        "description": "Andador Paso A Paso Regulable Aluminio / A17",
        "active": true,
        "price": "1.00",
        "quanty": 1,
        "create_date": "2023-09-14T23:15:41.125Z"
    }],
    backupProduct: [],
    favorite: [],
    cart: [],
    profile: [{
        "id": "14848a06-9c73-4c72-9333-0b4d3cc973cd",
        "usercode": "CMSF01",
        "cuit": "20-98388665-5",
        "name": "Toelida gimenez",
        "address": "Ushuaia, Tierra del Fuego",
        "email": "compras.centromedico@hotmail.com",
        "active": true,
        "phone": "2215047727",
        "password": "$2a$10$odgEgXZp9nrUrXcUoer4XeCbsjfQIEciL99nwee1l1e9eFVDklSV.",
        "Review1": [],
        "Entities": [
            {
                "name": "Laboratorio"
            },
            {
                "name": "Hospital"
            }
        ],
        "Orders": [
            {
                "codeOrder": "020"
            },
            {
                "codeOrder": "030"
            }
        ]
    }]
}


const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_PROD:
            return {
                ...state,
                // Product: action.payload,
                // backupProduct: action.payload
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
        case GET_PROFILE:

            return {
                ...state,
                // profile: action.payload
            }

        default: {
            return { ...state }
        }
    }
}

export default reducer;