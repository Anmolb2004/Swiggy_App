import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    // console.log(props);
    const{resData}=props;
  
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return(
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
  
        <img 
        className="rounded-lg" 
        src={CDN_URL +cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} min</h4>
      </div>
    )
  }

  export default RestaurantCard;