import React, { useState } from "react";
import hearts from "./components/img/hearts.png";
import voltar from "./components/img/back.png";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaListaMatches from "./components/TelaListaMatches/TelaListaMatches";
import {
  ContainerApp,
  ContainerDiv,
  ContainerBorder,
  ContainerH3,
  ContainerImgMatche,
  ContainerButtonTela1,
  ContainerButtonTela2,
} from "./styled";

const App = () => {
  const [trocaDePagina, setTrocaDePagina] = useState("");

  const renderizarPaginas = () => {
    if (trocaDePagina === "0") {
      return <TelaListaMatches />;
    } else {
      return <TelaInicial />;
    }
  };

  const changePage = (changePage) => {
    setTrocaDePagina(changePage);
  };

  return (
    <ContainerApp>
      <ContainerDiv>
        <ContainerBorder>
          <ContainerH3>AstroMatch</ContainerH3>
          {!trocaDePagina ? (
            <ContainerButtonTela1 onClick={() => changePage("0")}>
              <ContainerImgMatche src={hearts} alt="Ver matches" />
            </ContainerButtonTela1>
          ) : (
            <ContainerButtonTela2 onClick={() => changePage()}>
              <ContainerImgMatche src={voltar} alt="Voltar Início" />
            </ContainerButtonTela2>
          )}
        </ContainerBorder>
        {renderizarPaginas()}
      </ContainerDiv>
    </ContainerApp>
  );
};

export default App;
