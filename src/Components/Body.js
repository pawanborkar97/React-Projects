import Restaurantcard from "./restaurantcard";
import reslist from "../utils/mockdata.js";

const Body = () => {
    return (
        <div className="body">
        <div className="search"> Search </div>
        <div className="res-container">
            {reslist.map ((restaurant, index) =>
               (<Restaurantcard key={restaurant.info.id}resData = {restaurant}/>))
            }
        </div>
        </div>
    )
};

export default Body;