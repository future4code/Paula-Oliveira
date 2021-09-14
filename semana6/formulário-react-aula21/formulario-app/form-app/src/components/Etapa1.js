import React from "react";
import styled from "styled-components";



const Container1 = styled.div`
   
    text-align: center;
`

class Etapa1 extends React.Component {

  render() {
  return (
    <Container1>

        <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
            <div>
                <p>1.Qual o seu nome?</p>
                <input />
            </div>

            <div>
                <p>2.Qual sua idade?</p>
                <input />
            </div>

            <div>
                <p>3.Qual seu email?</p>
                <input />
            </div>

            <div>
                <p>4. Qual a sua escolaridade?</p>
                <input />
            </div>        
        
        <select>
          <option value="Ensino médio incompleto"></option>
          <option value="Ensino médio completo"></option>
          <option value="Ensino superior incompleto"></option>
          <option value="Ensino superior completo"></option>
        </select>
      </div>

      
    </Container1>
    
  );
}
}

export default Etapa1;
