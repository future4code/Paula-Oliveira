/*
-----------Exercício 1------------
let array
console.log('a. ', array) -------RESPOSTA : a. underfine


array = null
console.log('b. ', array) ------- RESPOSTA: b. null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) -------- RESPOSTA: c. 11


let i = 0
console.log('d. ', array[i]) --------- RESPOSTA: d. 0

array[i+1] = 19
console.log('e. ', array) ----------- RESPOSTA: e. 19

const valor = array[i+6]
console.log('f. ', valor)------------RESPOSTA: f. 6 
*/

/*
-----------Exercício 2------------
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for:
 "Subi num ônibus em Marrocos"?

---------RESPOSTA: SUBI NUM ÔNIBUS EM MIRRICOS
	Vai imprimir todas as letras em maiúsculo, vai substituir a 
	vogal A pela I onde ela estiver e vai imprimir na tela quantos 
	caracteris possui na frase.
    */

    /*
---------------------- Exercícios de escrita de código-----------------

-Atividade 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
    Em seguida, Imprima no console a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda
    (o), `nomeDoUsuario`!

    - 💡  Dica

        Você pode fazer isso de duas formas:
        - Concatenando as strings (com o sinal de +)
        - Utilizando template strings (e envelopando a sua string com o
             sinal de CRASE ao invés de aspas ⇒ ````) */
    
const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")

const mensagem = `O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`

console.log(mensagem)

//------------------------------------------------------------------------
/*
------------Atividade 2. Faça um programa que contenha um array com 5 das duas comidas preferidas, armazenado em uma 
varivável.Em seguida, siga os passos:

a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, 
uma embaixo da outra. 

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela
 inserida 
pelo usuário. Imprima no console a nova lista. 
*/

const comidasPreferidas = ["Vatapá", "Frango na Chapa", "Risoto", "Maniçoba", "Açaí com Camarão"]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")

comidasPreferidas[1] = comidaFavoritaUsuario

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//------------------------------------------------------------------------
/* 
------Atividade 3- Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no consoleImprima no console

*/

const listaDeTarefas = []

const primeiraTarefaDoDia = prompt("Qual a 1º tarefa do dia?")
listaDeTarefas.push(primeiraTarefaDoDia)

const segundaTarefaDoDia = prompt("Qual a 2º tarefa do dia?")
listaDeTarefas.push(segundaTarefaDoDia)

const terceiraTarefaDoDia = prompt("Qual a 3º tarefa do dia?")
listaDeTarefas.push(terceiraTarefaDoDia)

console.log("Tarefas do dia:", listaDeTarefas)

const tarefaFeita = Number(prompt("Qual tarefa você já realizou: 0, 1 ou 2"))

listaDeTarefas.splice(tarefaFeita, 1)

console.log("Tarefas que ainda preciso terminar:", listaDeTarefas)