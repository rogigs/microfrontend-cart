import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const Dashboard = React.lazy(() => import("dashboard/App"));

const App = () => (
  <main>
    <h1>Host</h1>
    <Suspense fallback={"loading..."}>
      <Dashboard />
    </Suspense>
  </main>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
