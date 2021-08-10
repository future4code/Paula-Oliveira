/*Exercícios de interpretação de código

    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

    1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

        let a = 10
        let b = 10

        console.log(b)

        b = 5
        console.log(a, b) */ 

    // console.log(b) vai imprimir o valor 10
    // console.log(a,b) vai imprimir o valor 10, 5 . Pois quando 
    //adicionou foi adicionado um novo valor a variável 

    /* 2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
       
        let a = 10
        let b = 20
        c = a
        b = c
        a = b

        console.log(a, b, c)*/
    
    // console.log (a,b,c) vai imprimir 10, 10, 10

    /*3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

        let p = prompt("Quantas horas você trabalha por dia?")
        let t = prompt("Quanto você recebe por dia?")
        alert(`Voce recebe ${t/p} por hora`)*/
        
        //let horasTrabalhoPorDia
        //let valorDoDia 

//Exercícios de escrita de código

//1 
    
    let nome
    let idade
    
    console.log(typeof nome) // undefined ainda não possui valor atribuido
    console.log(typeof idade) //undefined ainda não possui valor atribuido

    nome = prompt("Qual o seu nome?")
    idade =  prompt("Qual a sua idade")

    console.log(typeof nome) // string (lidentificou o valor como uma string)
    console.log(typeof idade)// string 

    console.log("Olá", nome, "você tem", idade, "anos.")

//2 
    let cafeDaManha = prompt("Você tomou café hoje")
    let almoco = prompt("Você almoçou hoje?")
    let jantou = prompt("Você já jantou hoje?")

    let tomeiCafé = "Sim"
    let almocei = "Sim"
    let jantei = "Não"

    cafeDaManha = "Você tomou café hoje?"
    almoco = "Você almoçou hoje?"
    jantou = "Você já jantou hoje?"
    
    console.log(cafeDaManha,"-",tomeiCafé)
    console.log(almoco,"-",almocei)
    console.log(jantou,"-",jantei)

    //3
    let a = 10
    let b = 25

    // Aqui faremos uma lógica para trocar os valores
    
    c = b
    b = a
    a = c

    
    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10

    /*- **DESAFIO**

    Essa seção é OPCIONAL e só deve ser feita se você terminou todos os exercícios propostos anteriormente!

    1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os 
    resultados no console da seguinte forma:

        ```
        1. O primeiro número somado ao segundo número resulta em: x.
        2. O primeiro número multiplicado pelo segundo número resulta em: y.
        ```

        - 💡  Dica

            Se os resultados das operações não estiverem corretos, reflita sobre o 
            **tipo dos valores recebidos pelo prompt.**/

            const numero1 = Number(prompt("Qual o primeiro número?"))
            const numero2 = Number(prompt("Agora adicione o segundo número."))
            
            let soma = numero1 + numero2
        
            console.log("Valor da soma é", soma)

            let multiplicacao = numero1 * numero2

            console.log("Valor da multiplicação é", multiplicacao)





