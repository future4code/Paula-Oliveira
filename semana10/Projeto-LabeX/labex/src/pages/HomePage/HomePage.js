import React from "react";
import { useHistory } from "react-router-dom";
import astronomy from "../img/astronomy.jpg"
import { Container, ContainerDiv, ContainerH1, ContainerImg } from "./styled";
const HomePage = () => {
    const history = useHistory()
    
    const goToLogin = () => {
        history.push("/login")
    }
    
    return (
        <Container>
            
            <ContainerImg src={astronomy}/>
            <ContainerDiv>
            <ContainerH1>Bem-vinda/o a LaneX</ContainerH1>
            <button onClick={goToLogin}>Admin</button>
            <button>Agenda de Viagens</button>
            
            </ContainerDiv>
        </Container>
    )
}

export default HomePage;