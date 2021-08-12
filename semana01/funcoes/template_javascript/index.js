//-----------------Exercícios de interpretação de código
/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
 pode rodar no seu computador **para
 analisar e pensar sobre o resultado.** 

1. Leia o código abaixo

    
    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2))       
    console.log(minhaFuncao(10))      
    

    a) O que vai ser impresso no console?

     console.log(minhaFuncao(2))       ---Resposta: Será impresso 10
     console.log(minhaFuncao(10))      ---Resposta: Será impresso 50



    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
    função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 
    
        ------Resposta: A função seria executada, mas não mostraria no console o resultado. 
    */
//---------------------------------------------------------------------------------------------------------

/* 2. Leia o código abaixo

    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    

   a. Explique o que essa função faz e qual é sua utilidade
        ---------Resposta: Essa função impede de ler variáveis declaradas a cima dela antes. 

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`   ------------------Resposta: true
         ii.  `CENOURA é bom pra vista`-----------------Resposta: true
         iii. `Cenouras crescem na terra`---------------Resposta: true
          */ 
//_______________________________________________________________________________________________________________

//------------Exercícios de escrita de código

/*a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem
 falando algumas informações sobre você, como: 

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."



Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem. */

 function minhasInformacoes(){

    console.log("Eu sou Paula, tenho 31 anos, moro em Macapá e sou estudante")
 }

    console.log(minhasInformacoes)

/*
b)  Agora escreva uma função que receba 4 parâmetros 
que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`)
 e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as
  informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/

    

    function informacaoDoUsuario(nome, idade, cidade, profissao){

    const dados = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    

    return dados
 }
 
    const nome = prompt("Qual o seu nome?")
    const idade = prompt("Qual o sua idade?")
    const cidade = prompt("Onde você mora?")
    const profissao = prompt("Qual a sua profissão?")

    console.log(nome, idade, cidade, profissao)

    const informacaoCapturada = informacaoDoUsuario(nome, idade, cidade, profissao)