import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componants/Layout'
import Home from './componants/Home'
import Notfound from './componants/Notfound'
import RecipeDetail from './componants/RecipeDetail'

export default function App() {

  let routes = createBrowserRouter([{
    path:'/',element:<Layout></Layout>,children:[
      {path:'/', index:true, element:<Home></Home>},  
      {path:'/mealdetails/:idMeal', element:<RecipeDetail></RecipeDetail>},  
      {path:'*', element:<Notfound></Notfound>},  
    ]
  }])
  
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

