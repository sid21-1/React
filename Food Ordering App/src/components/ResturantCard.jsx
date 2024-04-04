import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;
  return (
    <div className="resturant-card m-4 p-4 w-[200px] bg-[#ECF4E5] rounded-lg hover:bg-gray-300 cursor-pointer duration-200 ease-in-out ">
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h4 className="font-bold">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}minutes </h4>
    </div>
  );
};

export default ResturantCard;
