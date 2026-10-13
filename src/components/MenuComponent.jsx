import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class MenuComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/21">tabla de multiplicar 21</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/12">Tabla de multiplicar</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/25">Tabla de multiplicar</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/12">Collatz</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/25">Collatz</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/1216731723">Collatz</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
