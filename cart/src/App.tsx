import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "./components/Card";
import "./index.scss";
import { Product, productList } from "./products";
import reducer from "./reducer";
const remoteAppScope = "cart";

type SummaryCart = {
  showMenu: boolean;
};
const SummaryCart = ({ showMenu }: SummaryCart) => {
  const navigate = useNavigate();

  const products = useSelector((state: any) =>
    state.host?.idProducts.reduce((acc: Product[], id: string) => {
      const product = productList.find((product: Product) => product.id === id);
      if (product) {
        acc.push(product);
      }
      return acc;
    }, [])
  );
  if (!showMenu) {
    return null;
  }

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <section className="absolute transform bg-white shadow-lg p-6 rounded-lg mt-4 ">
      <p className="text-base font-bold mb-4">My cart ({products.length})</p>

      {products.length > 0 ? (
        <>
          <section className="flex flex-col gap-4 rounded-lg border-solid p-4 border-2 border-gray-200 mb-4 ">
            {products.map((product: any) => (
              <Card key={product.id} {...product} />
            ))}
          </section>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.alert(JSON.stringify(products))}
              className="rounded-3xl border-solid border-2 border-gray-200 py-2 px-4 w-full"
            >
              View All
            </button>
            <button
              onClick={goToCart}
              className="rounded-3xl border-solid border-2 border-gray-200 py-2 px-4 w-full"
            >
              Buy
            </button>
          </div>
        </>
      ) : null}
    </section>
  );
};

const FullCart = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Thanks for buying with us !!!</h1>
      <iframe
        className="w-full max-w-lg"
        src="https://lottie.host/embed/811ace0a-1280-4c55-9e11-843cc9219be2/FB2IiS1VNL.lottie"
        title="animation of deal"
      ></iframe>
    </section>
  );
};

export enum TYPE_CART {
  SUMMARY = "SUMMARY",
  FULL = "FULL",
}

type CartWrapper = {
  store: any;
  type: TYPE_CART;
};

export const CartWrapper = ({ store, type, ...props }: CartWrapper) => {
  const component = {
    [TYPE_CART.SUMMARY]: SummaryCart,
    [TYPE_CART.FULL]: FullCart,
  };

  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);

  if (!component) {
    return null;
  }
  return (
    <Provider store={store || {}}>{component[type](props as any)}</Provider>
  );
};
