import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'
import Home from './routes/home.jsx'
import Login from './components/login.jsx'
import SignUp from './components/signup.jsx'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'



const Router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/LogIn',
    element:<Login/>
  },
   {
    path:'/SignUp',
    element:<SignUp/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
