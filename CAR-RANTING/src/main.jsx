import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'
import Home from './routes/home.jsx'
import MyProfile , {myCarLoader} from './components/profile.jsx';
import Login from './components/login.jsx'
import SignUp ,{signUpAction} from './components/signup.jsx'
import CarDetail,{CarLoader} from './components/carDetail.jsx'

import { NavProvider } from "../src/context/navContext.jsx";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



const Router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/LogIn',
    element:<Login/>,
    
  },
   {
    path:'/SignUp',
    element:<SignUp/>,
    action:signUpAction,
  },
  {
    path:'/detail/:id',
    element:<CarDetail/>,
    loader:CarLoader
  }
  ,{
    path:'/myProfile',
    element:<MyProfile/> ,
    loader:myCarLoader
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavProvider>
        <RouterProvider router={Router}></RouterProvider>
    </NavProvider>
 
  </StrictMode>,
)
