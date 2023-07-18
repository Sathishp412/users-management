import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css"; // core css

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
