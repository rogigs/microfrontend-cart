import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
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

  if (!showMenu) {
    return null;
  }

  console.log("🚀 ~ App ~ products:", products);

  return (
    <section className="absolute transform  bg-white shadow-lg p-6 rounded-lg">
      My cart ({products.length})
      {products.map(({ name }) => (
        <p>{name}</p>
      ))}
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
