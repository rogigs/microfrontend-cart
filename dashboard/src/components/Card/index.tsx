import React, { useEffect, useState } from "react";
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

  console.log("Renderizado", id);
  useEffect(() => {
    dispatch({ type: "SET_QUANTITY_ITEM", payload: { id, quantity } });
  }, [quantity]);

  const changeQuantityItem = (operation: string) => () => {
    setQuantity((val) => {
      if (operation === "increase") {
        return val + 1;
      }

      const decreased = val - 1;
      return decreased < 0 ? val : decreased;
    });
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

      <div>
        <p className="text-2xl font-bold text-nowrap">$ {price}</p>

        <div className="flex justify-evenly items-center	rounded-xl border-solid border-2 border-gray-200 bg-gray-100">
          <button onClick={changeQuantityItem("decrease")}>-</button>
          <span>{quantity}</span>
          <button onClick={changeQuantityItem("increase")}>+</button>
        </div>
      </div>
    </article>
  );
};
