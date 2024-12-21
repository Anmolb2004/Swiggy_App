import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    console.log(props);
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
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
  
        <img className="res-logo" src={CDN_URL +cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} min</h4>
      </div>
    )
  }

  export default RestaurantCard;