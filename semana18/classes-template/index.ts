// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// Para ter ações executadas ao criar uma instância da classe.

//b*) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
//(dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor
// da classe User"` foi impressa no terminal?*



class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
      
   }
    
  
  }