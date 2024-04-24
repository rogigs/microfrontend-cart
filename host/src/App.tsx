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
      <main>
        <Menu />

        {productList.map((product: Product) => (
          <Card key={product.id} {...product} />
        ))}
      </main>
    </Provider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
