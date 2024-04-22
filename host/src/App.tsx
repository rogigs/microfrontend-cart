import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import { store } from "./store";

const Dashboard = React.lazy(() => import("dashboard/App"));

const App = () => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <main>
        <h1>Host</h1>
        <Suspense fallback={"loading..."}>
          <Dashboard store={store} />
        </Suspense>
      </main>
    </Provider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
