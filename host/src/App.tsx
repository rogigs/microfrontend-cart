import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Card } from "./components/Card";
import { Menu } from "./components/Menu";
import "./index.scss";
import { Product, productList } from "./products";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
