import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../products";

export const Card = ({ id, image, name, price, rating }: Product) => {
  const dispatch = useDispatch();

  const addToCart = useCallback(() => {
    dispatch({ type: "SET_PRODUCTS", payload: id });
  }, []);

  return (
    <section>
      <img
        src={image}
        alt={`Product ${name}`}
        loading="lazy"
        width={50}
        height={50}
      />

      <h1 className="text-3xl font-bold underline">{name}</h1>
      <div>
        <p>{rating}</p>
        <p>$ {price}</p>
      </div>
      <button
        className="rounded-3xl border-solid border-2 border-black py-2 px-4"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </section>
  );
};
