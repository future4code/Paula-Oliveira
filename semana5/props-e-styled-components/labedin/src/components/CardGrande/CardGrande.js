import React from 'react';
import styled from 'styled-components';


const ContainerPrimeiro = styled.div`
      
        display: flex;
        align-items: center;
        border: 2px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 220px;
      `

const ContainerPrimeiroImg = styled.img`

        width: 90px;
        margin-right: 15px;
        border-radius: 50%;
        `
const ContainerPrimeiroTexto = styled.h4`

        margin-bottom: 15px;
        `
const ContainerPrimeiroTexto2 = styled.p`

        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    `     


function CardGrande(props) {
    return (
        <ContainerPrimeiro>
            <ContainerPrimeiroImg src={ props.imagem }/>
            <ContainerPrimeiroTexto2>
                <ContainerPrimeiroTexto>{ props.nome }</ContainerPrimeiroTexto>
                <p>{ props.descricao }</p>
            </ContainerPrimeiroTexto2>
        </ContainerPrimeiro>
    )
}

export default CardGrande;