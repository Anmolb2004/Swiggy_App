import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const[btn,setbtn]=useState("Login");
    console.log("Header Render")

    const onlineStatus=useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is [btn] => called everytime btn is updated
    useEffect(()=>{
      console.log("useEffect Called");
    },[btn]);

    return(
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
        <div className="logo-container">
          <img className="w-40" 
          src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus === true ? "✅" : "❌"}
            </li>
            <li className="px-4">
             <Link to="/">Home</Link> 
              </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
              </li>
            
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
              </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
              </li>
            <li className="px-4">Cart</li>
         
            <button className="button2" onClick={()=>{
                btn==="Login" ? setbtn("Logout") : setbtn("Login") 
            }}>{btn}</button>
               </ul>
        </div>
      </div>
    )
  }

  export default Header;