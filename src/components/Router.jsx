import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import TablaMultiplicar from "./TablaMultiplicar";
import HomeComponent from "./HomeComponent";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import CollatzComponent from "./CollatzComponent";
import MenuComponent from "./MenuComponent";
export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      //Esta funcion sera para capturar los parametros de path y enviarlos mediante props
      let { num } = useParams();
      //Devolvemos el component con props
      return <TablaMultiplicar numero={num} />;
    }
    function CollatzElement() {
      let { numero } = useParams();
      return <CollatzComponent numero={numero} />;
    }
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/tabla/:num" element={<TablaMultiplicarElement />} />
          <Route path="/collatz/:numero" element={<CollatzElement />} />
          {/* PARA 404 SIEMPRE EL ULTIMO Y ASTERISCO EN PATH */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
