import {
    createBrowserRouter, useLoaderData,
  } from "react-router-dom";
import Main from "../Components/Layouts/Main/Main";
import Home from "../Components/Layouts/Home/Home";
import Category from "../Components/Category";
import NewsLayout from "../Components/Layouts/NewsLayout";
import News from "../Components/News";
import Login from "../Components/Shared/Login";
import Register from "../Components/Shared/Register";

  const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Category/>,
                loader:()=>fetch('https://the-dragon-news-server-swart.vercel.app/news'),
                // loader:()=>fetch('https://the-dragon-news-server-swart.vercel.app/categories/')
            },
            {
              path:'/category/:id',
              element:<Category/>,
              loader:({params}) =>fetch(`https://the-dragon-news-server-swart.vercel.app/categories/${params.id}`)
                
            }
        ]
    },
    {
      path:'/news',
      element:<NewsLayout/>,
      children:[
        {
          path:':id',
          element:<News/>,
          loader:({params})=>fetch(`https://the-dragon-news-server-swart.vercel.app/news/${params.id}`)
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])

export default router;
