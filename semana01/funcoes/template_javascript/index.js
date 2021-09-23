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

    const infoDados = ("Eu sou Paula, tenho 31 anos, moro em Macapá e sou estudante")

    return infoDados
     }
    
     console.log(minhasInformacoes)

//----------------------------------------------------------------------------------------
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
 
        const novoNome = prompt("Qual o seu nome?")
        const novaIdade = Number(prompt("Qual o sua idade?"))
        const novaCidade = prompt("Onde você mora?")
        const novaProfissao = prompt("Qual a sua profissão?")

    //console.log(nome, idade, cidade, profissao)

    const informacaoCapturada = informacaoDoUsuario(novoNome, novaIdade, novaCidade, novaProfissao)

    console.log(informacaoCapturada)



    /*a) Escreva uma função que receba 2 números como parâmetros, e, 
    dentro da função,     faça a soma das duas entradas e retorne o 
    resultado. Invoque a função e imprima no console o resultado. */

    
    function somar(n1, n2){
        const fazSoma = (n1 + n2)

        return fazSoma
    }

    const numeroUm = Number(prompt("Digite um número da sorte."))
    const numeroDois = Number(prompt("Agora digite outro número. Só para aumentar a sorte!"))

    const valorParaSomar = somar(numeroUm, numeroDois)

    console.log(valorParaSomar)


    /*b) Faça uma função que recebe 2 números e retorne um booleano que 
    informa se o primeiro número é **maior ou igual** ao segundo. */

    function numeroMaior(novoNumero, novoNumeroDois){
        const compara = (novoNumero >= novoNumeroDois)

        return compara
    }
    const numeroInserido = Number(prompt("Digite um número."))
    const numeroInseridoDois = Number(prompt("Digite outro número."))

    const numeroDeComparacao = numeroMaior(numeroInserido, numeroInseridoDois)

    console.log("Seu primeiro número é maior ou igual ao segundo.", numeroDeComparacao)


    /*c) Escreva uma função que receba um número e devolva um booleano 
    indicando se ele é par ou não */

    //function recebeUmNumero (numeroRecebido){
        

    //}


    /*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro 
    e imprima o tamanho dessa mensagem, juntamente com uma versão dela em 
    letras maiúsculas. */

   /*  
Faça um programa que receba o tamanho da base 
e altura de um triangulo 
em centímetros e retorne a área desse triangulo também em centímetros.

Exemplo de entrada: calculaArea(10, 20)
Exemplo de saída: A área tem 100 cm.
*/


function areaTriangulo (base, altura){

    const somaDaAreaTriangulo = (base * altura) / 2 

    return somaDaAreaTriangulo
}

const calculaArea = areaTriangulo(10,20)

console.log(calculaArea)


