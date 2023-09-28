import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'

import { store } from './redux/store.js'
import { Landing, User1, User2, User3, User4, Profile1, Cart, Orders, Fav, Login, Signup } from './views/index.jsx'

import ProtectedRoute from './authAll/ProtectedRoute.jsx'
import { AuthProvider } from './authAll/auth/AuthProvider.jsx'
import Create1User from './components/Formularios/Create1User.jsx'
import Create2User from './components/Formularios/Create2User.jsx';
import Create3User from './components/Formularios/Create3User.jsx';
import Create4User from './components/Formularios/Create4User.jsx';


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
    path: '/landin',
    element: <Landing />
  },
  {
    path: '/user1',
    element: <User1 />
  },
  {
    path: '/user2',
    element: <User2 />
  },
  {
    path: '/user3',
    element: <User3 />
  },
  {
    path: '/user4',
    element: <User4 />
  },
  {
    path: '/Profile1',
    element: <Profile1 />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/detail/:id',
    element: <User3 />
  },
  {
    path: '/register1',
    element: <Create1User />
  },
  {
    path: '/register2',
    element: <Create2User />
  },
  {
    path: '/register3',
    element: <Create3User />
  },
  {
    path: '/register4',
    element: <Create4User />
  },
  {
    path: '/fav',
    element: <Fav />
  },
  // {
  //   path: '/',
  //   element: <ProtectedRoute />,
  //   children: [
  //     {
  //       path: '/user1',
  //       element: <User1 />
  //     },
  //     {
  //       path: '/fav',
  //       element: <Fav />
  //     },
  //   ]
  // },


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