import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'
import Home from './routes/home.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



const Router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
