import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "paula-rabelo-maryam",
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
`
const CentralizarButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



export default class Tela extends React.Component {
  state = {
    name: "",
    email: "",
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuário(a) cadastrado com sucesso!");
        this.setState({name: ""})
        this.setState({email:""})
        
      })
      .catch((err) => {
        alert ("Erro no cadastro!")
       
      });
  };

  handleUserListName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleUserListEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <>
        <Container>
          <label>Nome:</label>
          <input
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserListName}
          />
     
          <label>E-mail:</label>
          <input
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleUserListEmail}
          />

          <button onClick={this.createUser}>Salvar</button>
        </Container>
        <CentralizarButton>
          <button onClick={this.props.irParaPaginaComLista}>
            Ver Lista Cadastrada
          </button>
        </CentralizarButton>
      </>
    );
  }
}
