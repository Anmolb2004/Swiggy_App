import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";


//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading

const Grocery =lazy(()=>import('./components/Grocery'))

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
          path:"/grocery",
          element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>,
          
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