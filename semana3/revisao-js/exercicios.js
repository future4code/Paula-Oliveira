// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
  return array.reverse()


 }
//-------- DESAFIO
//   const arrayInvertido = array.map(function (item, indice, array){
//         return array[array.length - indice - 1];
//       })
//       console.log(array)
      
//       console.log(arrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b){
        if (a > b){
             return 1}
        if (a < b){
             return -1}
        return 0
    })  
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
   
    let retorno = array.filter(pares => (pares % 2)=== 0)

    return retorno
     } 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -1
  for (let numero of array){
      if(numero > maior){
          maior = numero
      }
  }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    - `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
    }


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}