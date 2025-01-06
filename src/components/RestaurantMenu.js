import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
//   const [resInfo, setRestInfo] = useState(null);
  const { resId } = useParams(); // Get the restaurant ID from the URL

  const resInfo=useRestaurantMenu(resId);

//   useEffect(() => {
//     fetchMenu();
//   }, [resId]); // Re-fetch the menu if resId changes

//   const fetchMenu = async () => {
//     const data = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1646403&lng=72.8530249&restaurantId=${resId}`
//     );
//     const json = await data.json();
//     console.log(json);
//     setRestInfo(json.data);
//   };

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
