import ResturantCard from "./ResturantCard";
import restrautList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [list, setList] = useState(restrautList);
  return (
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
