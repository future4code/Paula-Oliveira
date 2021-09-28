import React from "react";
import axios from "axios";
import styled from "styled-components";

  const headers = {
    headers: {
      Authorization: "paula-rabelo-maryam",
    },
  };

  const ContainerBody = styled.body`
      display: flex;
      align-item: center;
      justify-content: center; 
      padding: 100px;
      background-color: #88CA5E;
      height: 50vh; 
  `    
  const CadastroContainer = styled.div`
      background-color:#F1C0B9;
      width: 300px;
      height: 100px;  
      padding: 50px;
      border: 2px solid white;
      display: flex;
      flex-direction: column;
      aline-item: center;
      justify-content: center;   
      `
  const Button = styled.button`
      background-color: #88CA5E;
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      font-size: 12px;
      margin: 4px 2px;
      cursor: pointer;
    `

export default class CadastroPlayList extends React.Component {
  state = {
    namePlayList: "",
  };

  createrPlayList = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.namePlayList,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res.data)
        alert("PlayList Adicionada com Sucesso");
        this.setState({ namePlayList: "" });
      })
      .catch((err) => {
        alert("Erro na playlist");
      });
  };

  handleUserPlayList = (e) => {
    this.setState({ namePlayList: e.target.value });
  };

  render() {
      return (
      <ContainerBody>
        <CadastroContainer>
          <h2>Cadastro PlayList</h2> 
          <input 
            placeholder="PlayList Name"
            value={this.state.namePlayList}
            onChange={this.handleUserPlayList}
          />
          <Button onClick={this.createrPlayList}>Adicionar</Button>
        </CadastroContainer>
      </ContainerBody>
    );
  }
}
