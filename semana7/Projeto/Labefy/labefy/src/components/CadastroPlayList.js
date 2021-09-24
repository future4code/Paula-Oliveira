import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "paula-rabelo-maryam",
  },
};
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
      <>
        <div>
          <h2>Cadastro PlayList</h2>
        </div>
        <p>PlayList</p>
        <input 
        placeholder="PlayList Name"
        value={this.state.namePlayList}
        onChange={this.handleUserPlayList}
         />
        <button onClick={this.createrPlayList}></button>

        <p>Nome da Musica</p>
        <input />
      </>
    );
  }
}
