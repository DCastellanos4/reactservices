import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  state = {
    tabla: [],
  };
  generarTabla = (props) => {
    let aux = [];
    let numero = parseInt(this.props.numero);
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      aux.push(resultado);
    }
    this.setState({
      tabla: aux,
    });
  };
  componentDidMount = () => {
    this.generarTabla();
  };
  render() {
    return (
      <div>
        <h1>Tabla de multiplicar Routing</h1>
        <h3 style={{ color: "purple" }}>Numero: {this.props.numero}</h3>
        <ul className="list-group">
          {this.state.tabla.map((index, key) => {
            return <li className="list-group-item"key={key}>{index}</li>;
          })}
        </ul>
      </div>
    );
  }
}
