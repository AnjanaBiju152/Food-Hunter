import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList  from "../utilis/mockData";
const Body = () => {

    const [ListOfResturants,setListOfResturant] = useState(restaurantList);
    
    return (
    <div  className="body">  
     <div className="filter">
         <button 
        className ="filter-btn"
        onClick={()  => {
const filterList = ListOfResturants.filter(
 (res) => res.data.avgRating > 4

);
setListOfResturant(filterList);
        }
         }
        > Top rated Restuarant
        
            </button>
    </div>

    <div className="res-container">
     {ListOfResturants.map((restaurant) => (
      <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
     ))}
    </div>
    
    </div>

    );
};

 export default Body;
