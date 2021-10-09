import React, { useState, useEffect } from "react";
import {ButtonEspaco, Container, ContainerBorder, ContainerButton, ContainerButtonNovos, ContainerDiv, ContainerImg, ContainerP} from "./styled"
import axios from "axios";

const TelaInicial = (props) => {
  const [profile, setProfile] = useState({});

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-rabelo-maryam/person`
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const postChoosePerson = (choice) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/paula-rabelo-maryam/choose-person`;
    const body = {
      id: profile.id,
      choice: choice,
    };
    axios
      .post(url, body)
      .then((res) => {
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <Container>
      <ContainerBorder>
        <h3>AstroMatch</h3>
        <button onClick={() => props.changePage("1")}>Matches</button>
      </ContainerBorder>

      {profile? <ContainerDiv>
        <ContainerImg src={profile.photo} />
        <h2>
          {profile.name}, {profile.age} anos
        </h2>
        <ContainerP>{profile.bio}</ContainerP>
        <ContainerButton>
          
        <ContainerButtonNovos onClick={() => postChoosePerson(false)}>X</ContainerButtonNovos>
        <ContainerButtonNovos onClick={() => postChoosePerson(true)}>0</ContainerButtonNovos>
        </ContainerButton>
      </ContainerDiv> : <p>Oi</p>}
    </Container>
  );
};

export default TelaInicial;