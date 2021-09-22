import React from "react";

import axios from "axios";
import Tela from "./components/Tela/Tela";
import PaginaComLista from "./components/PaginaComLista/PaginaComLista";

const headers = {
  headers: {
    Authorization: "paula-rabelo-maryam",
  },
};

export default class App extends React.Component {
  state = {
    trocaTela: "cadastro",
  
    
  };

 

 

  getUserById = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ nameList: res.data.result });
        this.setState({ emailList: res.data.result });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getSearchUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState(
          { nameList: res.data.result },
          this.setState({ emailList: res.data.result })
        );
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  putEditUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id;";
    const body = {
      name: this.state.nameList,
      email: this.state.emailList,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ nameList: "" });
        this.setState({ emailList: "" });
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  escolheTela = () => {
    switch (this.state.trocaTela) {

      case "cadastro":
        return <Tela irParaPaginaComLista={this.irParaPaginaComLista } />;
      case "lista":
        return <PaginaComLista irParaTela={this.irParaTela} />;
    

      default:
        return <div> Erro! Página não encontrada. </div>;
    }
  };

  irParaTela = () => {
    this.setState({ trocaTela: "cadastro" });
  };

  irParaPaginaComLista = () => {
    this.setState({ trocaTela: "lista" });
  };

  render() {
    return (
      <>
       

        {this.escolheTela()}

       
      </>
    );
  }
}
