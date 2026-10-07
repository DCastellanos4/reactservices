import React, { Component } from "react";
import axios from "axios";
export default class ComponentServiceSuppliers extends Component {
  state = {
    supp: [],
    buscado: null,
  };
  numero = React.createRef();
  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
  cargar = () => {
    axios.get(this.url).then((response) => {
      this.setState({
        supp: response.data.value,
      });
    });
  };
  buscarSupp = (event) => {
    event.preventDefault();
    let ID = parseInt(this.numero.current.value);
    //METODO FIND PARA ENCONTRAR ELEMENTOS EN UN ARRAY
    let proveedorEncontrado = this.state.supp.find(
      //METODO FIND PARA ENCONTRAR ELEMENTOS EN UN ARRAY
      (proveedor) => proveedor.SupplierID === ID,
    );
    if (proveedorEncontrado) {
      this.setState({
        buscado: proveedorEncontrado.ContactName,
      });
    } else {
      this.setState({
        buscado: "No se han encontrado registros",
      });
    }
  };
  componentDidMount = () => {
    this.cargar();
  };
  render() {
    return (
      <div>
        <h1>Suppliers</h1>
        <form onSubmit={this.buscarSupp}>
          <label>Introduce un ID para buscarlo</label>
          <br></br>
          <input type="text" ref={this.numero}></input>
          <button>Enviar</button>
        </form>
        <h5>{this.state.buscado}</h5>
        <hr></hr>
        {this.state.supp.map((supp, index) => {
          return (
            <h4 key={index}>
              {supp.SupplierID}
              <br></br>
              {supp.ContactName}
            </h4>
          );
        })}
      </div>
    );
  }
}
