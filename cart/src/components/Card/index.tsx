import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../products";

export const Card = ({
  id,
  image,
  name,
  price,
  category,
  type,
  color,
}: Product) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS_CART", payload: { id, quantity, price } });
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_QUANTITY_ITEM", payload: { id, quantity } });
  }, [quantity]);

  const changeQuantityItem = useCallback(
    (operation: string) => () => {
      setQuantity((val) => {
        if (operation === "increase") {
          return val + 1;
        }

        const decreased = val - 1;
        return decreased < 1 ? val : decreased;
      });
    },
    []
  );

  const removeItem = () => {
    dispatch({ type: "SET_REMOVE_ITEM", payload: id });
    dispatch({ type: "SET_REMOVE_ITEM_CART", payload: id });
  };

  return (
    <article className="flex flex-wrap flex-1 gap-4 ">
      <img
        src={image}
        alt={`Product ${name}`}
        loading="lazy"
        className="rounded-lg w-24 h-24"
      />
      <div>
        <span className="inline-block rounded-3xl border-solid border-2 border-gray-200 px-2">
          {category}
        </span>

        <h1 className="text-xl text-ellipsis font-bold w-36">{name}</h1>
        <p className="text-sm">
          <span className="text-gray-400 font-bold">Type: </span>
          {type}
        </p>
        <p className="text-sm">
          <span className="text-gray-400 font-bold">Color: </span>
          {color}
        </p>
      </div>

      <div className="flex flex-col justify-between items-end">
        <p className="text-2xl font-bold text-nowrap">$ {price}</p>

        <div className="flex justify-evenly items-center	rounded-xl border-solid border-2 border-gray-200 bg-gray-100 w-full">
          <button onClick={changeQuantityItem("decrease")}>-</button>
          <span>{quantity}</span>
          <button onClick={changeQuantityItem("increase")}>+</button>
        </div>

        <svg
          onClick={removeItem}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </article>
  );
};
