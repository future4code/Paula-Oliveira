console.log("exercicio3")

const tarefa = process.argv[2]

const listaDeTarefas = [
    "arrumar a cama",
    "escovar os dentes",
    "calcular o imposto de renda"
]

//adicionar a tarefa
listaDeTarefas.push(tarefa)

//exibir a lista
console.log(listaDeTarefas)