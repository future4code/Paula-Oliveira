import React from 'react';
import styled from 'styled-components';

const Container2 = styled.div`
   
    text-align: center;
`

function Etapa2() {
    return (
  
        <Container2>
        <div>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <div>
                <p>5.Qual curso?</p>
                <input />
            </div>
            <div>
                <p>6.Qual a unidade de ensino?</p>
                <input/>
            </div>
        </div>

        
        </Container2>
    );
  }
  
  export default Etapa2;