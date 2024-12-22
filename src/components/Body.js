import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body=()=>{
    const [listofRestaurants,setlistofRestaurants]=useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7211568&lng=76.7863078&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //Optional chaining
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    if(listofRestaurants == 0){
        return <h2>Loading.....</h2>
    }
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList=listofRestaurants.filter(
                (res) => res.info.avgRating>4.5
            );
            setlistofRestaurants(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {
          listofRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          )
  
          )
        }
        </div>
      </div>
    )
  }

  export default Body;