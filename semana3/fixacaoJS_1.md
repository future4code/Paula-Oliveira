function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salarioFixo = 2000 
 let comissaoPorCarroVendido =  (qtdeCarrosVendidos * 100) + (0.05  * valorTotalVendas)
 const salarioMes = salarioFixo + comissaoPorCarroVendido
 return salarioMes
}