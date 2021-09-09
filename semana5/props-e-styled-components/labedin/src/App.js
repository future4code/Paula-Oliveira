import React from 'react';
import './App.css';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

import foto from "./img/perfil.jpg";
import labenu from "./img/labenu.png";
import ifap from "./img/if.png";
import email from "./img/email.png";
import localizacao from "./img/local.png";



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Paula Rabelo" 
          descricao="Oi, eu sou Paula Rabelo. Tenho 31 anos, sou formada em Licenciatura em Informática, sou muito dedicada
          ao trabalho que estou fazendo, sinto prazer em conhecer todas as etapas para fazer um trabalho bem organizado e 
          com isso ter um bom resultado na entrega e na execução. Um dos meus últimos trabalhos com tecnológia foi como 
          bolsista pela faculdade em projetos no qual dava aulas de informática na escola pública."/>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem= {email} 
        email="E-mail"
        enderecoemail="rabelooliveira.ap@gmail.com"
        />

        <CardPequeno
        imagem= {localizacao}
        endereco="Endereço"
        descricao="Avenida Mauricio Trindade"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Desenvolvedora Full Stack Developer - Em formação!" 
        />
        
        <CardGrande 
          imagem={ifap} 
          nome="IFAP" 
          descricao="CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior, Bolsista Professora de Informática  " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
