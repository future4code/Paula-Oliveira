import React from "react";
import styled from "styled-components";
import axios from "axios";

  const ContainerDiv = styled.div`
    display: block;
    align-item: center;
    justify-content: center;
    padding: 100px;
    height: 50vh; 
    background-color: #F1C0B9;
  `
  const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #88CA5E;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    `
  const Button = styled.button`
    background-color: red;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    padding: 4px 50px;
    border-radius: 12px;
 `
  const headers = {
    headers: {
      Authorization: "paula-rabelo-maryam",
    },
  };
  const ButtonList = styled.div`
    padding: 10px;
    width: 100px;
  `;
export default class NomeDasPlayLists extends React.Component {
  state = {
    listNamesPlayList: [],
  };
  componentDidMount() {
    this.getAllPlayLists();
  }

  getAllPlayLists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ listNamesPlayList: res.data.result.list });
        // console.log(listNamesPlayList)
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente");
        console.log(err);
      });
  };

  deletePlayList = (playlistId) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId} `
      axios
      .delete(url, headers)
      .then((res) => {
        alert("Tem certeza que quer deletar?")
        this.getAllPlayLists();
      })
      .catch((err) => {
        console.log(err.response.data);
      })
    }
  render() {
    const listNamesPlayListNova = this.state.listNamesPlayList.map(
      (listName) => {
        return <List key={listName.id}> 
        {listName.name}
        <Button onClick={() => this.deletePlayList(listName.id)}>x</Button>
        </List>;
    }
    );
    return (
      <div>
        <ContainerDiv>
          <h2>PlayLists Cadastradas</h2>
          {listNamesPlayListNova}
        </ContainerDiv>
      </div>
    );
  }
}
