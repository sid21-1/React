import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;
  return (
    <div className="resturant-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}minutes </h4>
    </div>
  );
};

export default ResturantCard;
