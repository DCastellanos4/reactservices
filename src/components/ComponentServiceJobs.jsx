import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
export default class ComponentServiceJobs extends Component {
  state = {
    empleados: [],
    oficios: [],
    empleadosBuscados: [],
  };
  employee = React.createRef();
  url = Global.urlApiEmpleados;
  handOffice = () => {
    axios.get(this.url + "/api/empleados").then((response) => {
      this.setState({ empleados: response.data });
      let todosoficios = response.data.map((emp) => emp.oficio);
      this.setState({
        oficios: Array.from(new Set(todosoficios)),
      });
    });
  };
  searchEmployee = (event) => {
    event.preventDefault();
    let employee = this.employee.current.value;
    axios
      .get(this.url + "api/Empleados/EmpleadosOficio/" + employee)
      .then((response) => {
        this.setState({
          empleadosBuscados: response.data,
        });
      });
  };
  componentDidMount = () => {
    this.handOffice();
  };
  render() {
    return (
      <div>
        <h1>Buscador de oficios mediante desplegables</h1>
        <form onSubmit={this.searchEmployee}>
          <select ref={this.employee}>
            {this.state.oficios.map((index, key) => {
              return <option key={key}>{index}</option>;
            })}
          </select>
          <button>Buscar</button>
        </form>
        {this.state.empleadosBuscados.map((index, key) => {
          return (
            <h4 key={key}>
              NOMBRE: {index.apellido}
              <br></br>
              OFICIO: {index.oficio}
              <br></br>
              SALARIO: {index.salario}
            </h4>
          );
        })}
      </div>
    );
  }
}
