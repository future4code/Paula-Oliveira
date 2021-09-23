//----------Exercicio 1

//Atividade 1
//console.log(filme.elenco[0])
// vai imprimir Matheus Nachtergaele
// é o primeiro elemento do array elenco

//Atividade 2
//console.log(filme.elenco[filme.elenco.length -1])
// vai imprimir Virginia Cavendish
// é o último elemento do array elenco

//Atividade 3
//console.log(filme.transmissoesHoje[2])
//vai imprimir Glogo 14h

//----------Exercício 2

//console.log(cachorro)
//vai imprimir Juca 3 SRD

//console.log(gato)
//vair imprimir Juca 3 SRD
//		Juba

//console.log(tartaruga)
//vair imprimir Juca 3 SRD
//		Jubo
//b) a sintaxe dos três pontos incrimenta valores ao objeto

//------------Exercício 3

//console.log(minhaFuncao(pessoa, "backender"))
// vai imprimir False  pois a const declarada é do tipo bolean
// vai imprimir undefined não tem valor declarado 




//_______________________________________________________________________________________________________

const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos[0]}, 
${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)


/*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor 
da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a 
função feita no item anterior passando como argumento o novo objeto */
const novosApelidos = {
    ...pessoa,
    apelidos: ["Amadinha", "Mada", "Dinha"]
}
const fraseNova = `Eu sou ${pessoa.nome}, mas pode me chamar de:${novosApelidos.apelidos[0]}, 
${novosApelidos.apelidos[1]} ou ${novosApelidos.apelidos[2]} `

console.log(fraseNova)

//-----------------------------------------------------------------------------------------

/*2. Resolva os passos a seguir: 

    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

   
    
    const dadosPessoas = {
        nome: 'Paula',
        idade: 31,
        profissao: 'Futura Desenvolvedora'

    }

    function recebeDados(){
      
        novoArray = [dadosPessoas.nome, dadosPessoas.nome.length, dadosPessoas.idade, 
            dadosPessoas.profissao, dadosPessoas.profissao.length]

        return novoArray
    }
             
       console.log(recebeDados(dadosPessoas))

    //----------------------------------------------------------------------------------------------------   
    
       const dadosPessoasOutro = {
        nome: 'Antônia',
        idade: 54,
        profissao: 'Futura Desenvolvedora'

    }

    function recebeDadosDois(){
        novoArray = [dadosPessoasOutro.nome, dadosPessoasOutro.nome.length, dadosPessoasOutro.idade, 
            dadosPessoasOutro.profissao, dadosPessoasOutro.profissao.length]
        return novoArray
    }
        
       console.log(recebeDadosDois(dadosPessoasOutro))
       

  /*
  a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do 
array de `carrinho`. Invoque essa função passando os três objetos criados. 

- 💡  Dica

    Aqui você deve usar o método **push()**/


    const carrinho = []

    const frutasSacolaoClienteUm = {
        nome: 'Maça',
        temFruta: true
    }

    const frutasSacolaoClienteDois = {
        nome: 'Laranja',
        temFruta: true
    }

    const frutasSacolaoClienteTres = {
        nome: 'Melância',
        temFruta: true
    }

    function recebeFrutas(carrinho){
    
        carrinho.push(frutasSacolaoClienteUm, frutasSacolaoClienteDois, frutasSacolaoClienteTres)
      

        return carrinho
    }


    console.log(recebeFrutas(carrinho))
        


   


