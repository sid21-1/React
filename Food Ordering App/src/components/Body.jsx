import ResturantCard from "./ResturantCard";
import restrautList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        {restrautList.map((restraut) => (
          <ResturantCard key={restraut.data.id} resData={restraut} />
        ))}
      </div>
    </div>
  );
};

export default Body;
