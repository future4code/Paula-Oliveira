import React from "react"
import Header from "./components/Header";
import CadastroPlayList from "./components/CadastroPlayList"
import NomeDasPlayLists from "./components/NomeDasPlayLists";

export default class App extends React.Component {
  state = {
    currentPage: "cadastroPlayList",
  };

  changePage = (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  render(){
    const renderCurrentPage = () => {
      if(this.state.currentPage === "cadastroPlayList"){
        return <CadastroPlayList/>
      }else if(this.state.currentPage === "nomeDasPlayLists"){
        return<NomeDasPlayLists/>
      }
    }

  return (
      <>
      <Header
       changePage={this.changePage}
       />
      {renderCurrentPage()} 
      </>
     );
  }
}


