import ResturantCard from "./ResturantCard";
import restrautList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setList(restrautList);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = restrautList.filter(
              (res) => res.data.avgRating > 3.9
            );
            console.log(filterlist);
            setList(filterlist);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resturant-container">
        {list.map((restraut) => (
          <ResturantCard key={restraut.data.id} resData={restraut} />
        ))}
      </div>
    </div>
  );
};

export default Body;
