import React from "react";
import { Product } from "../../products";

export const Card = ({ image, name, price, rating }: Product) => {
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
    </section>
  );
};
