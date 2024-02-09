import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RestCountriesProvider } from "./context/restCountries";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RestCountriesProvider>
      <App />
    </RestCountriesProvider>
  </React.StrictMode>
);
