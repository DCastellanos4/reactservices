import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Peticion from "./components/Peticion";
// import ComponentServiceCustomer from "./components/ComponentServiceCustomer";
// import ComponentServiceSuppliers from "./components/ComponentServiceSuppliers";
// import ComponentServiceEmployees from "./components/ComponentServiceEmployees";
// import ComponentServiceJobs from "./components/ComponentServiceJobs";
// import CochesComponent from "./components/maestrodetalle/CochesComponent";
// import homeComponent from "./components/HomeComponent";
import HomeComponent from "./components/HomeComponent";
import MenuComponent from "./components/MenuComponent";
import Router from "./components/Router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    style={{
      backgroundColor: "lightblue",
      margin: "auto",
      width: "50%",
      padding: "10px",
    }}
  >
    <MenuComponent />
    <Router />
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
