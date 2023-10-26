import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './redux/store.js';
import { Landing, User1, User2, User3, User4, Profile1, Profile3, Cart, Orders, Fav, Login, Signup, OrderDetail } from './views/index.jsx';
import ProtectedRoute from './authAll/ProtectedRoute.jsx';
import { AuthProvider } from './authAll/auth/AuthProvider.jsx';
import AllOrderHistory from './components/componentUser3/AllOrders/AllOrderHistory.jsx';
import UserList from './views/user3/userList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
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
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/Profile1',
        element: <Profile1 />
      },
      {
        path: '/orders',
        element: <Orders />
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
      },

    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/user3',
        element: <User3 />
      },

      {
        path: '/Profile3',
        element: <Profile3 />
      },
      {
        path: '/user/:id/order',
        element: <AllOrderHistory />
      },
      {
        path: '/detail/:id',
        element: <User3 />
      },
      {
        path: '/orders',
        element: <Orders />
      },

      {
        path: '/usersList',
        element: <UserList />
      },
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