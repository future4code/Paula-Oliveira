//----------Exercícios de interpretação de código

/*1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)*/

//----- O código está incrementando valores no é, vai fazer isso até quando ir retornar maior que 5

//----------------------------------------------------------------------------------------------------

/*2. Leia o código abaixo:

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    
    a) O que vai ser impresso no console?

    //--Resposta = todos os números maiores que 18


    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...`
     é suficiente? Se sim, o que poderia ser usado para fazer isso?*/

     //-- Resposta usei o vídeo pra entender --------------
    /*
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        indice = 0
        for (let numero of lista) {
        if (numero > 18) {
                console.log(numero,"indice", indice)
            }
            indice++
        }
        */
    
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

    /*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    } */

    //----Resposta 4:
    //--- 4 linhas com o asterístico e vai incrimentando por linha. 

//------------------------------------------------------------------------------------------------------

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0,imprima no console "Que pena! Você pode adotar um pet!"
//console.log("Que pena! Você pode adotar um pet!")

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e
// guarde esses nomes em um array

//    c) Por fim, imprima o array com os nomes dos bichinhos no console


// Resposta ------------------------------------------------------------------------------


let quantidadeDeAnimais = Number(prompt("Quantos bichinhos de estimação você tem?"))

     if (quantidadeDeAnimais !== 0){
        
        let arrayBichinhos = []
        for(let i = 0; i < quantidadeDeAnimais; i++){
                
                let nomeBichinhos = (prompt("Digite o nome dos seus bichinhos."))
                console.log("Nome dos bichinhos:",nomeBichinhos)
                arrayBichinhos.push(nomeBichinhos)         
       }
       console.log("Nome dos bichinhos",arrayBichinhos)
    }   
    else {
            console.log("Que pena! Você pode adotar um pet!")       
                } 
                
//-----------------------------------NÃO CONSEGUI FAZER-------------------------------------------------------

    //Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente
    //de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações
    //pedidas:

    // a) Escreva um programa que **imprime** cada um dos valores do array original.

    // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
                    
    // c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array 
    // original e **imprima** esse novo array
                    
    // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento 
    // do índex `i` é: `numero`". Depois, **imprima** este novo array.
                    
    // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

    
    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


    for (let i=0; i>0; i++){

        function imprimeValores(novo) {
            console.log(novo)
         
        }
     
        function valoresDivididos(){
            let divisao = arrayOriginal[0] * 10
            return("Número do array dividido por 10. Resultado:"+ divisao)
        }
        function novoArrayNumerosPares(){
        
            let pares = arrayOriginal[0] % 2 
            let novoArray = [pares === 0]
            return("Número pares:"+novoArray)
        }
        function novoArrayStrings(){
            
            return (`O elemento do índex ${i++} é ${arrayOriginal[0]} `)
        }
        function maiorEMenorNumero(arrayMaior){
            maior = 0
            menor = 0 
            if((arrayMaior[i]>maior) && (arrayMaior[i]<maior)){
                maior = arrayMaior[i]
                
            }
            return maior
        }
    
    imprimeValores(arrayOriginal)
    console.log(valoresDivididos())           
    console.log(novoArrayNumerosPares())      
    console.log(novoArrayStrings())      
    console.log(maiorEMenorNumero())  
    }    
        