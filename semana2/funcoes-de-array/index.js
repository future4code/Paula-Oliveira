//---------------------------------------------------------------------------------------------------------

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

// a) O que vai ser impresso no console?

//Resposta: ------ Todas as informações do array usuarios separadamente. Item = itens, index= posição, array = estrutura
        


//------------------------------------------------------------------------------------------------------------
//2)
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)
//a) O que vai ser impresso no console?

//Resposta: ----- Nome do array usuarios = Amanda Rangel, Laís Petra, Letícia Chijo
//______________________________________________________________________________________________________________

//3)
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)
//a) O que vai ser impresso no console?

//Resposta: ------ Todos os apelidos que são diferentes do apelido Chijo


//--------------------------------------------------------------------------------------------------------------

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas 
// nos itens abaixo utilizando as funções de array **map** e **filter:**

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
   
    // a) Crie um novo array que contenha apenas o nome dos doguinhos
    const extrairNomeDoguinhos = (soNome) => {
      
      return soNome.nome
    }
            
      console.log(pets.map(extrairNomeDoguinhos))

      // b) Crie um novo array apenas com os [cachorros salsicha]

      const racaSalsicha = pets.map((tipos, i, array) => {

          if (tipos.raca === "Salsicha"){
          return tipos
        }
        }
      )

      console.log(racaSalsicha)
      
    // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem 
    // deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
    
      const racaPoodle = pets.map((tipos, i, array) => {

      if (tipos.raca === "Poodle"){
        const mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${tipos.nome} !`
      return mensagem
      }})

      console.log(racaPoodle)

//____________________________________________________________________________________________________________________
//2) Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

      const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

//   a) Crie um novo array que contenha apenas o nome de cada item

          const extrairNomeItem = produtos.map((nomeItens, index, array) => {

            return nomeItens.nome
          })
                  
            console.log(extrairNomeItem)


// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
          
   /*       const extrairNomeEPreco = produtos.map((desconto, i, array) => {
            
            const novoPreco = desconto.preco * 0.05
            const somaDesconto = desconto.preco - novoPreco

            return somaDesconto 
             })
                
          const nomeProdutos = produtos.filter(extrairNomeItem)

          const nomeEDescontoProdutos = nomeProdutos.map(extrairNomeEPreco)

          console.log(nomeEDescontoProdutos)
*/

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
          
            const extrairCategoriaBebidas = produtos.map((itensBebidas, i, array) => {

              if (itensBebidas.categoria === "Bebidas"){
                return itensBebidas
              }
            })
                    
              console.log(extrairCategoriaBebidas)
