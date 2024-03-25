import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const App = () => <h1>Dashboard</h1>;

export default App;

const isMainApplication = window.dashboardUrl;

if (!isMainApplication) {
  const rootElement = document.getElementById("app");
  if (!rootElement) throw new Error("Failed to find the root element");

  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(<App />);
}
