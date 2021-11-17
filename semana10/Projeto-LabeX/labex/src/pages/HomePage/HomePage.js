import React from "react";
import { useHistory } from "react-router-dom";
import astronomy from "../img/astronomy.jpg"
import { Container, ContainerButton, ContainerDiv, ContainerH1, ContainerImg } from "./styled";

const HomePage = () => {
    const history = useHistory()

    const goToTripsPage = () => {
        history.push("/trips/list")
    }
    
    const goAdminTripsList = () => {
        history.push("/admin/trip/list")
    }

    
    return (
        <Container>
            <ContainerImg src={astronomy}/>
            <ContainerDiv>
            <ContainerH1>Bem-vindo a LaneX</ContainerH1>
            
            <ContainerButton onClick={goToTripsPage}>Viagens</ContainerButton>
            <ContainerButton onClick={goAdminTripsList}>Admin</ContainerButton>
           
            </ContainerDiv>
        </Container>
    )
}

export default HomePage;