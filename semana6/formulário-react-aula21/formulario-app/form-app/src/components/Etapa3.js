import React from 'react';
import styled from 'styled-components';

const Container3 = styled.div`
   
    text-align: center;
`

function Etapa3() {
    return (
      <Container3>
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <div>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input value/>
          </div>

          <div>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option value="Nenhum">Nenhum</option>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
          </select>
          </div>
          
        </div>
        </Container3>
        
    );
  }
  
  export default Etapa3;