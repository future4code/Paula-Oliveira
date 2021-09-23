/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo:

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    
---------------------------------------------------------------------------------------------
    a) Explique o que o código faz. Qual o teste que ele realiza? 
//--Resposta
        O código verifica se o valor do operador é igual a 0.

    b) Para que tipos de números ele imprime no console "Passou no teste"? 
//--Resposta
        Se a sobra do número dividido por 2 por zero.

    c) Para que tipos de números a mensagem é "Não passou no teste"? 
//--Resposta
        Caso a sobra seja diferente do zero.
*/

//---------------------------------------------------------------------------------------------

/*2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas
 tarefas de um supermercado: 

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
----------------------------------------------------------------------------------------------------------
    a) Para que serve o código acima?
    //--Resposta:
        Para mostrar o valor da fruta digitada. 

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    //--Resposta:
        Valor no console: 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
    retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK 
    PARA O ITEM c.")?
        O preço da fruta Pêra é 5
*/
//________________________________________________________________________________________________________

/* 3. Leia o código abaixo:

    const numero = Number(prompt("Digite o primeiro número.")) 

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    a) O que a primeira linha está fazendo?
    //--Resposta: Está pedindo para o usuário digitar um número

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    //--Resposta: Esse número passou no teste
            Se o número por -10
                    underfined

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    //--Resposta:

    */

/*1. Faça um programa que 
pergunta ao usuário qual a idade dele e 
imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para
     number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não 
    pode dirigir."` */

    
    const idadeUsuario = Number(prompt("Qual a sua idade?"))

    if (idadeUsuario >= 18){
        console.log("Você pode dirigir!")
    } else {
        console.log("Você não pode dirigir!")
    }

    /*2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
    Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
     Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    */

    const turnoFrequentado = prompt(`Qual o seu turno de estudo? 
    M - Matutino, V - Vespertino ou N - Noturno`).toLowerCase()
    

    if (turnoFrequentado === "m"){
        console.log("Bom Dia!")
    } else if (turnoFrequentado === "v"){
        console.log("Boa Tarde!")
    } else if (turnoFrequentado === "n"){
        console.log("Boa noite!")
        }
     else{
        console.log("Valor digitado não é válido!")
        }
    //----------------------------------------------------------------------------------------------------

    //3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

    const turnoFrequentadoEstadante = prompt(`Qual o seu turno de estudo? 
    M - Matutino, V - Vespertino ou N - Noturno`).toLowerCase()
    
    switch(turnoFrequentadoEstadante){
        case 'm':
            console.log("Bom Dia!")
            break
        case 'v':
            console.log("Boa Tarde!")
            break
        case 'n':
            console.log("Boa Noite!")
            break
        default:
            console.log("Valor digitado não é válido")
        
    }

    /*4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só 
    assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo 
    de 15 reais.
     Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
    outra pergunta sobre o preço do ingresso,
     então verifique se seu amigo ou amiga vai topar assistir o filme.
     Caso positivo, imprima no console a mensagem: "Bom filme!",
     caso contrário, imprima "Escolha outro filme :(" */

     const generoFilme = prompt("Qual o gênero do filme que vamos assistir?")
     const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

     if ((generoFilme === "fantasia") && (precoIngresso < 15)){
         console.log("Bom filme")
     } else {
         console.log("Escolha outro filme")
     }
    
