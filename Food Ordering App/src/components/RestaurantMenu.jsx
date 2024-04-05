import restrautList from "../utils/mockdata";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestuarantCatagory from "./RestuarantCatagory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // console.log(
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   )
  // );

  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(catagories)

  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl my-10">{name}</h1>
      <h3 className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {catagories.map((catagory) => (
        <RestuarantCatagory key={catagory?.card?.card.title} data={catagory?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;

{
  /* <li>{itemCards[0]?.card.info.name}</li>
        <li>{itemCards[1]?.card.info.name}</li>
        <li>{itemCards[3]?.card.info.name}</li> */
}

{
  /* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}={item.card.info.price / 100}
          </li>
        ))}
      </ul> */
}
