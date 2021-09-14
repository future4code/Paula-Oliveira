import React from 'react';
import styled from 'styled-components';

const CardPequenoDiv = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 100px;
`
const CardPequenoImg = styled.img`
        width: 80px;
        margin-right: 10px;
        border-radius: 50%;
`
const CardPequenoDiv2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
`
const CardPequenoH4 = styled.h4`
        margin-bottom: 15px;
`



function CardPequeno(props) {
    return (
        <CardPequenoDiv>
            <CardPequenoImg src={ props.imagem } />
            <CardPequenoDiv2>
                <CardPequenoH4>{ props.email }</CardPequenoH4>
                <p>{ props.enderecoemail }</p>
                <CardPequenoH4>{ props.endereco }</CardPequenoH4>
                <p>{ props.descricao }</p>
            </CardPequenoDiv2>
        </CardPequenoDiv>
    )
}

export default CardPequeno;