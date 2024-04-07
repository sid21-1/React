import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch and action
    dispatch(addItem(item));
  };

  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left"
        >
          {/* <img src={CDN_URL + item.card.info.imageId} className="w-14" /> */}
          <div className="py-2 font-semibold">
            <span>{item.card.info.name} - ₹</span>
            <span>
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p>{item.card.info.description}</p>
          <button
            className="px-4 py-1 bg-green-400 rounded-lg hover:bg-green-200 duration-500"
            onClick={() => handleAddItem(item)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
