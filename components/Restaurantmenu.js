import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis/constants";

const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId + " &submitAction=ENTER");
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo == null) return;
  <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.cards?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard.cardsGroupMap.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join("")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <li>Biriyani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
