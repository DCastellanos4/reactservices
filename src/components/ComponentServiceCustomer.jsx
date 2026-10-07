import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
export default class ComponentServiceCustomer extends Component {
  state = {
    customers: [],
  };
  url = Global.baseURL + "Customers";
  loadCustomers = () => {
    console.log("Antes del servicio");
    axios.get(this.url).then((response) => {
      console.log("Durante el servicio");
      //Los datos del servicio con axios siempre vienen dentro de la propiedad data.
      this.setState({ customers: response.data.value });
    });
    console.log("Despues del servicio");
  };
  componentDidMount = () => {
    //Con esto ya no hace falta cargar el boton
    this.loadCustomers();
  };
  render() {
    return (
      <div>
        <h1>Component Service customer</h1>
        {this.state.customers.map((cliente, index) => {
          return (
            <p style={{ color: "blue" }} key={index}>
              {cliente.ContactName}
              <br></br>
              {cliente.ContactTitle}
              <br></br>+{cliente.Phone}
            </p>
          );
        })}
        <button onClick={this.loadCustomers}>Cargar</button>
      </div>
    );
  }
}
