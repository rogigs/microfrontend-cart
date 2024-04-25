import React from "react";
import { Card } from "./components/Card";
import { Menu } from "./components/Menu";
import "./index.scss";
import { Product, productList } from "./products";

export const Layout = () => {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <div className="flex justify-end my-4">
        <Menu />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productList.map((product: Product) => (
          <Card key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
};
