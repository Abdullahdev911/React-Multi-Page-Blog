import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import {BlogPost,blogDataLoad} from './components/BlogPost.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    errorElement: <Layout/>,
    children:[
      {
          path:'',
          element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
    },
     {
      path:'about',
      element:<About/>
  },
  {
    path:'blog',
    element:<Blog/>,
   
},
{
  path:'blog/:blogid',
  element:<BlogPost/>,
  loader: blogDataLoad
}
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>    
  </StrictMode>,
)
