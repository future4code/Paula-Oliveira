console.log("exercicio3")

const operacao =  process.argv[2]
const num1 =  Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
	case "add":
	console.log("Soma:", num1+num2)
		break;
	case "subt":
	console.log("Subtração:", num1-num2)
		break;
    case "mult":
    console.log("Multiplicação:", num1*num2)
        break;
    case "div":
	console.log("Divisão:", num1/num2)
        break;
	default:
		console.log('Sorry')
}