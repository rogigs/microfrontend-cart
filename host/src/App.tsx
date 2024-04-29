import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Layout } from "./Layout";
import { store } from "./store";

const FullCart = lazy(() =>
  import("cart/App").then((mod) => ({ default: mod.CartWrapper }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback="loading...">
        <FullCart store={store} type="FULL" />
      </Suspense>
    ),
  },
]);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
