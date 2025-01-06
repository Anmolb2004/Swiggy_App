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
      <div className="header">
        <div className="logo-container">
          <img className="logo" 
          src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus === true ? "✅" : "❌"}
            </li>
            <li>
             <Link to="/">Home</Link> 
              </li>
            <li>
              <Link to="/about">About Us</Link>
              </li>
            <li>
              <Link to="/contact">Contact Us</Link>
              </li>
            <li>Cart</li>
            </ul>
            <button className="button2" onClick={()=>{
                btn==="Login" ? setbtn("Logout") : setbtn("Login") 
            }}>{btn}</button>
        </div>
      </div>
    )
  }

  export default Header;