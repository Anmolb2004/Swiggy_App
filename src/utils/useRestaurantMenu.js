import { useState,useEffect } from "react"

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1646403&lng=72.8530249&restaurantId=${resId}`
    );
        const json=await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;