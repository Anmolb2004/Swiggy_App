import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    //Local State Variable - Super powerful variable
    const [listofRestaurants,setlistofRestaurants]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("")


  //Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered",listofRestaurants);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is [btn] => called everytime btn is updated
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7211568&lng=76.7863078&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);

        //Optional chaining
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
      return<h1>You are offline</h1>
    }

    //Condition Rendering
    if(!listofRestaurants || listofRestaurants.length === 0){
        return <h2>Loading.....</h2>
    }
    return(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input 
            type="text" 
            className="border border-solid border-black" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}></input>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={()=>{
              //Filter the restaurant cards and update the UI
              //searchText
              console.log(searchText)
              const filteredList=listofRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}>Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100" 
            onClick={()=>{
            const filteredList=listofRestaurants.filter(
            (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
            }}>
            Top Rated Restaurants
          </button>
          </div>
          
        </div> 
        <div className="res-container flex flex-wrap">
        {
          filteredRestaurant.map((restaurant)=>(
            <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard  resData={restaurant}/>
               </Link>
          )
          )
        }
        </div>
      </div>
    )
  }

  export default Body;