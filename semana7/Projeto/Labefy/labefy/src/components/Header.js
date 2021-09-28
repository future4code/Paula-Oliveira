import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #1D741B;
`
const ButtonsHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const TextH2 = styled.h2`
    color: white;
`
const ButtonTwo = styled.button`
    background-color: #4CCF50;
    border: none;
    color: white;
    padding: 8px 60px;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
`
 const Header = (props) => {
        return(
                <ContainerHeader>
                    <TextH2>Labefy</TextH2>
                    <ButtonsHeader>
                        <ButtonTwo onClick={() => props.changePage("cadastroPlayList")}>Cadastrar Nova PlayList</ButtonTwo>
                        <ButtonTwo onClick={() => props.changePage("nomeDasPlayLists")}>PlayList Cadastrada</ButtonTwo>   
                    </ButtonsHeader>
                </ContainerHeader>        
        )
}
export default Header