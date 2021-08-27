//Exercicio 1
alert ('Seja bem vindes ao meu site!');

//exercicio 2
const num1=87;
const num2=96;

let soma = (num1+num2);

alert ("A soma entre os numeros 87 e 96 é :\n" + soma);

//exercicio 3
const num3=5;
const num4=8;

let mult = (num3*num4);

alert (" A multiplicação entre 5 e 8 é :\n" + mult);

// exercicio 4
// duvida: porque o alert da erro na leitura do console.log
// porque a lista ta na vertical
const listaDeCompra = ['leite', 'carne' , 'biscoito' , 'manteiga' , 'ovo' , 'macarrão' , 'sal' , 'arroz']
//comando de teste
// console.log (listaDeCompra)


// Aplicação aula 25/08/2021
let listaUsuario = prompt("Crie uma lista de compras.\n Digite os itens que deseja comprar separados por ,:");
alert ("Os itens da sua listas são: "+ listaUsuario +"\n clik em ok para confirmar");

//comando de teste
//let listaUsuario = "arroz, feijão, carne";
let listaSalva =[listaUsuario];
//comandos de teste
//console.log (listaSalva)

let num5 = Number(prompt (" iremos fazer uma soma. \n Digite o primeiro valor:"))
let num6 = Number(prompt("Digite o segundo valor: "))

let somaPrompet = num5 + num6
alert(" A soma entre os numeros escolhidos é \n" + somaPrompet);