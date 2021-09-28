import React from "react";
import styled from "styled-components";
import axios from "axios";


const headers = {
  headers: {
    Authorization: "paula-rabelo-maryam",
  },
};

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
`;

export default class PaginaComLista extends React.Component {
  state = {
    listNames: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ listNames: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente");
      });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, headers)
      .then((res) => {
        if (this.deleteUser) {
          alert("Tem certeza que deseja deletar esse usuário(a)?");
        }
        this.getAllUsers();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    const listUsers = this.state.listNames.map((enviar) => {
      return (
        <CardUsuario key={enviar.id}>
          {" "}
          {enviar.name}
          <button onClick={() => this.deleteUser(enviar.id)}>x</button>
        </CardUsuario>
      );
    });

    return (
      <ContainerList>
        <button onClick={this.props.irParaTela}>
          Ir para a página de cadastro
        </button>

        <h2>Usuários Cadastrados:</h2>

        {listUsers}
      </ContainerList>
    );
  }
}
