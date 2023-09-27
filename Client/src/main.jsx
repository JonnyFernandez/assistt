import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';

import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Landing, User1, User2, User3, User4, Profile1, Cart, Orders, Fav, Login } from './views/index.jsx'
import Create1User from './components/Formularios/Create1User.jsx'






import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './authAll/ProtectedRoute.jsx'
import { AuthProvider } from './authAll/auth/AuthProvider.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Create1User />
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/user1',
        element: <User1 />
      },
      {
        path: '/fav',
        element: <Fav />
      },
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/user2',
        element: <User2 />
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/user3',
        element: <User3 />
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >

    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </React.StrictMode>

  </Provider>

)
//-----------------------------------------------------------------------------------
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import { store } from './redux/store.js'
// // import './index.css'



// import { BrowserRouter } from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store} >
//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </Provider>

// )