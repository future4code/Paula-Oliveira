import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerButton,
  ContainerButtonNovos,
  ContainerH2,
  ContainerImg,
  ContainerBio,
  ContainerP,
} from "./styled";
import axios from "axios";
import { ContainerNotList } from "../../styled";

const TelaInicial = () => {
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
      {profile ? (
        <div>
          <ContainerImg src={profile.photo} />
          <ContainerH2>
            {profile.name} - {profile.age} anos
          </ContainerH2>
          <ContainerBio>
            <ContainerP>{profile.bio}</ContainerP>
          </ContainerBio>
          <ContainerButton>
            <ContainerButtonNovos onClick={() => postChoosePerson(false)}>
              &#10006;
            </ContainerButtonNovos>
            <ContainerButtonNovos onClick={() => postChoosePerson(true)}>
              &#10084;
            </ContainerButtonNovos>
          </ContainerButton>
        </div>
      ) : (
        <ContainerNotList>Não há mais matches!</ContainerNotList>
      )}
    </Container>
  );
};

export default TelaInicial;
