import React, { useState, useEffect } from "react";
import limpar from "../img/limpar.png";
import {
  ContainerButtonClear,
  ContainerDiv,
  ContainerH3,
  ContainerImg,
  ContainerImgClear,
  ContainerList,
  ContainerNova,
  ContainerP,
} from "./styled";
import axios from "axios";

const TelaListaMatches = () => {
  const [matchPerson, setMatchPerson] = useState([]);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-rabelo-maryam/matches`
      )
      .then((res) => {
        setMatchPerson(res.data.matches);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const putClearMatches = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-rabelo-maryam/clear`
      )
      .then((res) => {
        setMatchPerson([]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const pageList = matchPerson.map((match) => {
    return (
      <ContainerList>
        <ContainerImg src={match.photo}></ContainerImg>
        <ContainerP>{match.name}</ContainerP>
      </ContainerList>
    );
  });

  return (
    <div>
      <ContainerDiv>
        <ContainerH3>Lista de Matches</ContainerH3>
        <ContainerButtonClear onClick={putClearMatches}>
          <ContainerImgClear src={limpar} alt="Excluir todos os matches" />
        </ContainerButtonClear>
      </ContainerDiv>
      <ContainerNova>{pageList}</ContainerNova>
    </div>
  );
};

export default TelaListaMatches;
