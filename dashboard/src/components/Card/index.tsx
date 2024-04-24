import React from "react";
import { Product } from "../../products";

export const Card = ({
  image,
  name,
  price,
  category,
  type,
  color,
}: Product) => {
  return (
    <article className="flex flex-wrap flex-1 gap-4">
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

        <h1 className="text-xl text-ellipsis font-bold">{name}</h1>
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
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
      </div>
    </article>
  );
};
