import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";

const Body = () => {
   let [listOfRestaurant, setlistOfRestaurant] = useState([]);
   
   
useEffect (() => {
fetchData();
},[]);

const fetchData = async () => {
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1391029&lng=79.0963245&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

const json = await data.json();
console.log(json);
setlistOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

const restaurantsData = json?.data?.cards?.find(
  (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

setlistOfRestaurant(restaurantsData || []);

};
    return (
        <div className="body">
        <div className="filter">  
        <button className="filter-btn" onClick={() => { 
            const filteredlist = listOfRestaurant.filter ( (res) => res.info.avgRating  > 4.3); 
            setlistOfRestaurant(filteredlist);
        }}>Top Rated Restaurant</button> 
        </div>
        <div className="res-container">
               {listOfRestaurant?.map((restaurant) => (
                <Restaurantcard key={restaurant.info.id} resData={restaurant} />)
               )}
        </div>
        </div>
    )
};

export default Body;