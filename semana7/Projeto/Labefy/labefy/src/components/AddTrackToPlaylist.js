import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "paula-rabelo-maryam",
  },
};

const ButtonList = styled.div`
  padding: 10px;
  width: 100px;
  height: 30px;
`;

const ContainerOption = styled.option`
font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px px 1px;

`

export default class AddTrackToPlaylist extends React.Component {
  state = {
 
    nameMusic: "",
    artist: "",
    urlMusic: "",
  };

  // componentDidMount(){
  //   this.getAllPlayLists();
  // }

  addMusicToPlaylist = (playlistId) => {
    const url =
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
    const body = {
      
      name: this.state.nameMusic,
      artist: this.state.artist,
      url: this.state.urlMusic,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Adicionado com Sucesso!");
        this.setState({ nameMusic: "" });
        this.setState({ artist: "" });
        this.setState({ urlMusic: "" });
        console.log((playlistId))
       
      })
      .catch((err) => {
        alert("Erro no cadastro Music!");
      });
  };

  // handlePlayList = (e) => {
  //   // const namePlayList = e.target.value;
  //   this.getAllPlayLists({namePlayList: e.target.value})
  // }

  handleUserListNameMusic = (e) => {
    this.setState({ nameMusic: e.target.value });
  };

  handleUserListArtist = (e) => {
    this.setState({ artist: e.target.value });
  };

  handleUserListUrlMusic = (e) => {
    this.setState({ urlMusic: e.target.value });
  };

  render() {
    // const listWithMusic = this.state.playListWithMusic.map(
    //   (allList) => {
    //     return <ButtonList key={allList.id}> 
    //     {allList.name}  {allList.artist}  {allList.urlMusic}
    //     <button onClick={() => this.addMusicToPlaylist(allList.id)}>x</button>
    //     </ButtonList>;
    // }
    // );
   
    
  
    return (
      <>
     
<h2>Nome da PlayList</h2>
             {/* <select onChange={this.handlePlayList}>
               <option value={""}>Selecione playlist</option>
      {this.state.playListWithMusic.map((item) =>{
      return <option key={item.id} value={item.name}>
        {item.name}
      </option>
               
    })}
      </select> */}
       
       <select onChange={this.handlePlayList}>
               <option value={""}>Selecione playlist</option>
               </select>
    
      
      
        <h3>Nome da Música</h3>
        <input
          placeholder="Name Music"
          value={this.state.nameMusic}
          onChange={this.handleUserListNameMusic}
        />

        <h3>Artist</h3>
        <input
          placeholder="Artist"
          value={this.state.artist}
          onChange={this.handleUserListArtist}
        />

        <h3>Url da Música</h3>
        <input
          placeholder="Url da Música"
          value={this.state.urlMusic}
          onChange={this.handleUserListUrlMusic}
        />
        <button onClick={this.addMusicToPlaylist()}></button>
      </>
    );
  }
}
