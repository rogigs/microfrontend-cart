import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { Card } from "./components/Card";
import "./index.scss";
import { Product, productList } from "./products";
import reducer from "./reducer";
const remoteAppScope = "dashboard";

const App = () => {
  const showMenu = useSelector((state: any) => state.dashboard?.showMenu);
  const products: Product[] = useSelector((state: any) =>
    state.host.idProducts.reduce((acc: Product[], id: string) => {
      const product = productList.find((product: Product) => product.id === id);
      if (product) {
        acc.push(product);
      }
      return acc;
    }, [])
  );

  const cart = useSelector((state: any) => state?.[remoteAppScope]?.cart);

  if (!showMenu) {
    return null;
  }

  return (
    <section className="absolute transform bg-white shadow-lg p-6 rounded-lg mt-4 ">
      <p className="text-base font-bold mb-4">My cart ({products.length})</p>

      {products.length > 0 ? (
        <>
          <section className="flex flex-col gap-4 rounded-lg border-solid p-4 border-2 border-gray-200 mb-4 ">
            {products.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </section>

          <div className="flex flex-col gap-4">
            <button className="rounded-3xl border-solid border-2 border-gray-200 py-2 px-4 w-full">
              View All
            </button>
            <button
              onClick={() => window.alert(JSON.stringify(cart))}
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

const AppWrapper = ({ store }: { store: any }) => {
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
