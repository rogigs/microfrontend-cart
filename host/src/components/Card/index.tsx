import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../products";

export const Card = ({ id, image, name, price, rating }: Product) => {
  const dispatch = useDispatch();

  const addToCart = useCallback(() => {
    dispatch({ type: "SET_PRODUCTS", payload: id });
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <img
        src={image}
        alt={`Product ${name}`}
        loading="lazy"
        className="rounded-lg w-full h-64"
      />

      <h1 className="text-3xl font-bold ">{name}</h1>
      <div className="flex justify-between">
        <p>{rating}</p>
        <p className="text-2xl font-bold text-nowrap ">$ {price}</p>
      </div>

      <div className="flex ">
        <button
          className="rounded-3xl border-solid border-2 border-black py-2 px-4 mr-4 w-1/2"
          onClick={addToCart}
        >
          Add to cart
        </button>
        <button
          className="rounded-3xl border-solid border-2 border-black bg-black text-white py-2 px-4 w-1/2"
          onClick={() => {}}
        >
          Buy
        </button>
      </div>
    </section>
  );
};
