import React, { Component } from "react";

export default class MenuComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tabla/21">Tabla de multiplicar</a>
          </li>
          <li>
            <a href="/tabla/12">Tabla de multiplicar</a>
          </li>
          <li>
            <a href="/tabla/25">Tabla de multiplicar</a>
          </li>
          <li>
            <a href="/collatz/12">Collatz</a>
          </li>
          <li>
            <a href="/collatz/25">Collatz</a>
          </li>
          <li>
            <a href="/collatz/1216731723">Collatz</a>
          </li>
        </ul>
      </div>
    );
  }
}
