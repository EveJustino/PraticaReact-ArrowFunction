// Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, { Component } from "react";

export default class Bairro extends Component {
  leste = () => "Cidade Tiradentes, ZL";

  doble = (x, y) => {
    return (
      <div>
        <p>{x * y}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>{this.leste()}</h1>
        <p>{this.doble(2, 7)}</p>
      </div>
    );
  }
}
