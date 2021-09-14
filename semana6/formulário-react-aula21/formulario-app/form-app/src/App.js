import React from "react";
import styled from "styled-components";

import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";

const ContainerApp = styled.div`
  text-align: center;
`;
class App extends React.Component {
  state = {
    botaoInicio: 1,
  };
  onClickDoBotao = () => {
    switch (this.state.botaoInicio) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapa4 />;
      default:
        return <Etapa4 />;
    }
  };

  proximaEtapa = () => {
    this.setState({ botaoInicio: this.state.botaoInicio +1})
  };

  render() {
    return (
      <ContainerApp>
        <div>
          {this.onClickDoBotao()}
          <button onClick={this.proximaEtapa}>Próxima Etapa</button>
        </div>
      </ContainerApp>
    );
  }
}

export default App;
