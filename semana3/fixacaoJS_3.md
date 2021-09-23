```function calculaNota(ex, p1, p2) {
  
  let calcularMedia = ((ex*1) + (p1 *2) + (p2 * 3)) /6

  if (calcularMedia >= 9){
     
      return "A"
     }else if((calcularMedia < 9) && (calcularMedia >= 7.5)){
      
      return "B"
    } else if((calcularMedia < 7.5) && (calcularMedia >= 6)){
      
      return "C"
      
    } else {
      
      return "D"
      }
  
  return 
}

```