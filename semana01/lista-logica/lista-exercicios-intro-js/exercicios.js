// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
   // implemente sua lógica aqui
  const alturaInformada =  Number(prompt("Altura:"))
  const larguraInformada = Number(prompt("Largura"))

  const calculo = alturaInformada * larguraInformada
  console.log(calculo)  

}

//----------------------------------------------------------------------------------------------------

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui
  const anoHoje = Number(prompt("Em que anos você está?"))
  const anoQueNasceu = Number(prompt("Qual seu ano de nascimento?"))

  const suaIdade = anoHoje - anoQueNasceu
  console.log(suaIdade)
}
//------------------------------------------------------------------------------------------------------
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Nome:")
  const idade = Number(prompt("Idade:"))
  const email = prompt("E-mail:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(coresFavoritas) {
  // implemente sua lógica aqui
  coresFavoritas = [] 
  const corFavoritaUm = prompt("1ª cor favorita:")
  const corFavoritaDois = prompt("2ª cor favorita:")
  const corFavoritaTres = prompt("3ª cor favorita:")
  
  
  coresFavoritas.push(corFavoritaUm, corFavoritaDois, corFavoritaTres)

  console.log(coresFavoritas)
}
//---------------------------------------------------------------------------------

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()

}
//--------------------------------------------------------------------------------

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

    return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1]

}
/////// Não consegui a partir desses aqui
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array = [array[0], array[array.length -1]] === [[array.length -1], array[0]]

    
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}