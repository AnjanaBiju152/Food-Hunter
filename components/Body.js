import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restaurantList from "../utilis/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      "https://www.swiggy.com/mapi/homepage/getCards?lat=9.9185&lng=76.2558"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(
      json?.data?.success?.cards[4]?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.succes?.cards[4]?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ListOfRestaurants.length === 0 ? (
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
              const filteredResturant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
              (val) => val.info.avgRating > 4
            );
            setListOfRestaurant(filter);
          }}
        >
          {" "}
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard ResData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
