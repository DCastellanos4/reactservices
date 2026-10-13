import React, { Component } from "react";

export default class CollatzComponent extends Component {
  state = {
    lista: [],
  };
  generarCollatz = () => {
    let numero = parseInt(this.props.numero);
    let aux = [];
    do {
      if (numero % 2 === 0) {
        numero = numero / 2;
        aux.push(numero);
      } else {
        numero = numero * 3 + 1;
        aux.push(numero);
      }
    } while (numero !== 1);
    this.setState({
      lista: aux,
    });
  };
  componentDidMount = () => {
    this.generarCollatz();
  };
  render() {
    return (
      <div>
        <h2>Conjetura de collatz</h2>
        <h2>NUMERO: {this.props.numero}</h2>
        <ul className="list-group">
          {this.state.lista.map((index, key) => {
            return <li className="list-group-item" key={key}>{index}</li>;
          })}
        </ul>
      </div>
    );
  }
}
