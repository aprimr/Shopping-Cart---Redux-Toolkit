import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import App from './App.jsx'
import Body from './components/Body.jsx'
import Cart from './components/Cart.jsx'
import Trending from './components/Trending.jsx'
import Favourites from './components/Favourites.jsx'
import Help from './components/Help.jsx'
import Loader from './components/Loader.jsx'
import BodySkeleton from './components/BodySkeleton.jsx'
import Login from './components/Login.jsx'
import store from './Store/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/trending',
        element: <Trending />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/help',
        element: <Loader />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
