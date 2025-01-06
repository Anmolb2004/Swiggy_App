import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";


const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Outlet></Outlet>
    </div>
  )
}

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout></AppLayout>,
     
      children:[
        {
          path:"/",
          element:<Body></Body>
        },
        {
          path:"/about",
          element:<About/>,
          
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenu></RestaurantMenu>
        }
      ],
      errorElement:<Error></Error>,
    },
   
  ])

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<RouterProvider router={appRouter}></RouterProvider>);