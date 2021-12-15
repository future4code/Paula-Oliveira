## Exercício 1

---*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
--- Sim, pois tem mais combinações. 

*b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

--- import { v4 } from "uuid"

export class IdGenerated{

    generatedId = () => v4();
    
}