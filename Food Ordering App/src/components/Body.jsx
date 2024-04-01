import ResturantCard from "./ResturantCard";
import restrautList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchtxt, setSearchTxt] = useState("");
  const [filterrestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setList(restrautList);
      setIsLoading(false);
      setFilterRestaurants(restrautList); // Initialize filterrestaurants with the original list
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

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

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchtxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resturant-container">
        {filterrestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
