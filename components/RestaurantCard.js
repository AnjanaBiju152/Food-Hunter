import { CDN_URL } from "../utilis/constants";
const RestaurantCard=(props)=>{
    const{resData}=props;
      const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo}=resData.data;
      return(
      <div className="res-container">
  
          <div className="res-card"style={{backgroundColor:"#f0f0f0"}}>
          <img  className="card-img"src={ CDN_URL +
            cloudinaryImageId}></img> 
           <h4>{name}</h4>
           <h4>{cuisines.join(', ')}</h4>
           <h4>{avgRating} ⭐ {deliveryTime} minutes</h4>
           <h4>₹{costForTwo/100} For two</h4>
          </div>
      </div>
      )
  };
   export default RestaurantCard;