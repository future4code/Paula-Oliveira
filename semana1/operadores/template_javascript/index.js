/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)          // Resultado é false, se tiver um false no operador && vai anular todo o restante. 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)         // Resultado é false, se tiver um false no operador && vai anular todo o restante. 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)        // Resultado é true, se tiver um true no operador || vai tornar verdadeira toda a questão.

console.log("d. ", typeof resultado) // Resultado é true, pois ele foi direcionado para o último resultado que é true. */

/*2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    let primeiroNumero = prompt("Digite um numero!")     // Para receber um número tem que declarar no antes do prompt que receberá um número,
    let segundoNumero = prompt("Digite outro numero!")   // senão o lerá como uma string. Tem que ser como informado a baixo.  
                                                        // let primeiroNumero = Number(prompt("Digite um numero!"))
                                                        // let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)                                   // Do jeito que o código estar a soma vai imprimir na tela os dois número que foram 
                                                        // inseridos um ao lado do outro e não fará a soma, que é o objetivo da operação. 
*/ 
/*3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor 
impresso no console seja, de fato, a soma dos dois números.

    let primeiroNumero = prompt("Digite um numero!")      // let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = prompt("Digite outro numero!")   // let segundoNumero = Number(prompt("Digite outro numero!"))
                                                        
                                                       

    const soma = primeiroNumero + segundoNumero

    console.log(soma)                                   // Com a adição do Number no código vai permitir que seja impresso a soma na tela. */
    
/* 1) Faça um programa que:    
    
    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu 
    melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se 
        sair um número negativo)*/ 

    const minhaIdade = Number(prompt("Qual o sua idade?"))
    const idadeAmiga = Number(prompt("Qual a idade da sua melhor amiga?"))
    let idadeMaior
    let idadeDiferenca

    idadeMaior = minhaIdade > idadeAmiga
    console.log("Sua idade é maior do que a do seu melhor amigo.", idadeMaior)

    idadeDiferenca = idadeAmiga % minhaIdade
    console.log("A diferença de idades", idadeDiferenca)

    //----------------------------------------------------------------------------
    /*2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? 
    Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um 
    comentário de código */

    // ----------------------------Resolução-------------------------------
    
    let numeroPar = Number(prompt("Insira um número par."))
    const numeroDois = 2

    console.log("Resto da divisão:", numeroPar % numeroDois)

    // Os números pares: o resto é 0
    // Se o usuário inserir o número impar: o resto será 1

    /*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
        a) A idade do usuário em meses
        b) A idade do usuário em dias
        c) A idade do usuário em horas */

    const idadeAtual = Number(prompt("Qual o sua idade?"))
    const meses = 12
    const dias = 365
    const horas = 24


        console.log("Sua idade em meses", idadeAtual * meses)
        console.log("Sua idade em dias", idadeAtual * dias)
        console.log("Sua idade em horas", (idadeAtual * dias) * horas)

    /*4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e
     imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

    
        O primeiro numero é maior que segundo? true
        O primeiro numero é igual ao segundo? false
        O primeiro numero é divisível pelo segundo? true
        O segundo numero é divisível pelo primeiro? true
    
        obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

    let numeroPrimeiro = Number(prompt("Digite um número de 0 a 10."))
    let outroNumero = Number(prompt("Agora insera mais um número de 0 a 10."))
    
    let resultado
    const numeroZero = 0

    resultado = numeroPrimeiro > outroNumero
    console.log("O primeiro número é maior que o segundo?", resultado)

    resultado = numeroPrimeiro === outroNumero
    console.log("O primeiro número é igual ao segundo?", resultado)

    resultado = numeroPrimeiro % outroNumero === 0
    console.log("O primeiro número é divisível pelo segundo?", resultado)

    resultado = outroNumero % numeroPrimeiro === 0
    console.log("O primeiro número é divisível pelo primeiro?", resultado)

        

