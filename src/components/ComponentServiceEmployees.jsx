import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
export default class ComponentServiceEmployees extends Component {
  state = {
    empleados: [],
    departamentos: [],
  };
  url = Global.urlApiEmpleados;
  request = this.url + "api/Empleados/EmpleadosDepartamento/";
  urlDep = Global.urlApiDepartamentos;
  dep = React.createRef();
  cargar = (event) => {
    let ID = parseInt(this.dep.current.value);
    axios.get(this.request + ID).then((response) => {
      this.setState({ empleados: response.data });
    });
    event.preventDefault();
  };
  componentDidMount = () => {
    this.cargarDep();
  };
  cargarDep = () => {
    axios.get(this.urlDep + "webresources/departamentos").then((response) => {
      this.setState({ departamentos: response.data });
    });
  };
  render() {
    return (
      <div>
        <h1>Busqueda de empleados por departamento</h1>
        <form onSubmit={this.cargar}>
          <label>Busca el ID del departamento</label>
          <br></br>
          <select ref={this.dep}>
            {this.state.departamentos.map((index, key) => {
              return (
                <option value={index.numero} key={key}>
                  {index.nombre}
                </option>
              );
            })}
          </select>
          <button>Buscar</button>
        </form>
        {this.state.empleados.length !== 0 ? (
          this.state.empleados.map((emp, index) => {
            return (
              <h4 key={index}>
                Nombre: {emp.apellido}
                <br></br>
                Oficio: {emp.oficio}
              </h4>
            );
          })
        ) : (
          <h4>No hay registros</h4>
        )}
      </div>
    );
  }
}
