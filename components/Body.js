import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restaurantList from "../utilis/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendering");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.google-analytics.com/j/collect?v=1&_v=j101&a=582924952&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Fcity%2Fkolkata&dr=https%3A%2F%2Fin.search.yahoo.com%2F&ul=en-us&de=UTF-8&dt=Order%20Food%20Online%20In%20Kolkata%20%7C%20Food%20Home%20Delivery%20%7C%20Swiggy&sd=24-bit&sr=110x464&vp=110x464&je=0&_u=QACAAEABAAADACAAI~&jid=1230632891&gjid=516490218&cid=698749712.1719807331&tid=UA-53591212-9&_gid=1521183251.1720506086&_r=1&_slc=1&gtm=45He4730n81WGCN3LHv77032815za200&cd1=unsupported&cd2=-&cd3=-&cd4=-&gcd=13l3l3l3l1&dma=0&tag_exp=0&z=1748455537"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return ListOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          {" "}
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
