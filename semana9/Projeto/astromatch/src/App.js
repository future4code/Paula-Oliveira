import React, { useState } from "react";
import TelaInicial from "./components/TelaInicial/TelaInicial"
import TelaListaMatches from "./components/TelaListaMatches/TelaListaMatches";
import { ContainerApp } from "./styled";

const App = () => {
  const [trocaDePagina, setTrocaDePagina] = useState("0");

  const renderizarPaginas = () => {
   
    if (trocaDePagina === "0") {
       return <TelaInicial changePage={changePage}/>
    } else {
      return<TelaListaMatches changePage={changePage}/>
    }
  };

  const changePage = (changePage) => {
    setTrocaDePagina(changePage);
  };

  return (
      <ContainerApp>    
      {renderizarPaginas()}
      </ContainerApp>
  );
};

export default App;
