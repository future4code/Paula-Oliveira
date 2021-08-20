/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   console.log("Boas Vindas ao jogo de Blackjack")
      
      const cartaUsuario = comprarCarta()
      const cartaComputador = comprarCarta()
      let somaCartasUsuario = cartaUsuario.valor + cartaUsuario.valor
      let somaCartasComputador = cartaComputador.valor + cartaComputador.valor
      
   if(confirm("Quer iniciar uma nova rodada?")) {
   
      console.log("Usuário:",cartaUsuario.texto, cartaUsuario.valor,"Pontuação:", somaCartasUsuario )
      console.log("Computador:",cartaComputador.texto,cartaComputador.valor,"Pontuação:", somaCartasComputador)

         const comparar = () => {
            if (somaCartasUsuario > somaCartasComputador){
               console.log("O usuário ganhou!")
            } 
            else if(somaCartasUsuario < somaCartasComputador){
               console.log("O computador ganhou!")
            }
            else{
                  console.log("Empatou")
            }
            return 
      }
      //const resultadoGanhador = comparar()
     comparar()
      } else {
          console.log("O jogo acabou!")
      }

