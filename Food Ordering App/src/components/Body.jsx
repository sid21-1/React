import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import restrautList from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchtxt, setSearchTxt] = useState("");
  const [filterrestaurants, setFilterRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    const delay = setTimeout(() => {
      setList(restrautList);
      setIsLoading(false);
      setFilterRestaurants(restrautList); // Initialize filterrestaurants with the original list
    }, 2000);
    return () => clearTimeout(delay);
  }, []);
  // console.log(restrautList);

  const handleSearch = () => {
    // Filter the restaurants based on the search text
    const filteredRestaurants = list.filter((res) =>
      res.data.name.toLowerCase().includes(searchtxt.toLowerCase())
    );
    setFilterRestaurants(filteredRestaurants); // Update filterrestaurants state
  };

  const handleTopRatedRestaurants = () => {
    // Filter the top rated restaurants
    const filterlist = restrautList.filter((res) => res.data.avgRating > 3.9);
    setFilterRestaurants(filterlist); // Update filterrestaurants state
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-black border-solid"
            type="text"
            value={searchtxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            className="px-4 bg-green-200 m-4 rounded-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="filter-btn px-4 bg-green-200 m-4 rounded-sm"
            onClick={handleTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <label htmlFor="">User Name : </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="resturant-container flex flex-wrap">
        {filterrestaurants.map(
          (restaurant) =>
            restaurant.data.promoted ? (
              <RestaurantCardPromoted
                key={restaurant.data.id}
                resData={restaurant}
              />
            ) : (
              <ResturantCard key={restaurant.data.id} resData={restaurant} />
            )
          // <ResturantCard key={restaurant.data.id} resData={restaurant} />
        )}
      </div>
    </div>
  );
};

export default Body;
