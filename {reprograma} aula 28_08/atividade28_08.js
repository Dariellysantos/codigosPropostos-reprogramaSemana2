// // Receba uma letra pelo prompt e verifique se é uma vogal ou consoante. Se for vogal, imprime SIM,
// // se for consoante imprima Não

// const promptTestando = prompt("Digite uma letra :");

// if (
//   promptTestando.toLowerCase() === "a" ||
//   promptTestando.toLowerCase() === "e" ||
//   promptTestando.toLowerCase() === "i" ||
//   promptTestando.toLowerCase() === "o" ||
//   promptTestando.toLowerCase() === "u"
// ) {
//   alert(promptTestando + " é uma vogal.");
// } else {
//   alert(promptTestando + " é uma consoante");
// }

// // TENTE EM CASA
// // Altere os exercicios para SWITCH
// // NOTA: Tentei colocar para receber letras maiusculas, porém não rodou com promptSwitch.toLowerCase em nenhum local, nem com criação de outra variavel.

// const promptSwitch = prompt("Digite uma letra  :");

// switch (promptSwitch) {
//   case "a":
//     alert(promptSwitch + " é uma vogal");
//     break;
//   case "e":
//     alert(promptSwitch + " é uma vogal");
//     break;
//   case "i":
//     alert(promptSwitch + " é uma vogal");
//   case "o":
//     alert(promptSwitch + " é uma vogal");
//     break;
//   case "u":
//     alert(promptSwitch + " é uma vogal");
//   default:
//     alert(promptSwitch + "é uma Consoante");
// }

// // Exercicio criado com switch usando break
// var a = "23 . 04 . 1992";
// var b = "28 . 08 . 2021";
// var c = "25.12.2021";

// var pergunta = prompt(
//   "qual informação você deseja ?\n [a] meu aniversario \n [b] data de hoje\n [c] data do natal"
// );

// switch (pergunta) {
//   case "a":
//     alert(a);
//     break;
//   case "b":
//     alert(b);
//     break;
//   case "c":
//     alert(c);
// }

// Exercicios Extra COM funcção
// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor

// function analisarIdadeDia(idadeDia) {
//   const data = new Date();
//   const dia = data.getDate().toString().padStart(2, "0");
//   if (idadeDia <= dia) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// function analisarIdadeMes(idadeMes) {
//   const data = new Date();
//   const mes = (data.getMonth() + 1).toString().padStart(2, "0");
//   if (idadeMes <= mes) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// function analisarSeCompletouAno(idadeDia, idadeMes) {
//   const fezAniversario =
//     analisarIdadeMes(idadeMes) + analisarIdadeDia(idadeDia);
//   if (fezAniversario === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function analisarIdade(idadeDia, idadeMes, idadeAno) {
//   const data = new Date();
//   const ano = data.getFullYear();
//   const idade = ano - idadeAno;

//   if (idade >= 18) {
//     if (analisarSeCompletouAno(idadeDia, idadeMes) == 1) {
//       return alert("Você é maior de idade!");
//     }
//     return alert("Você é menor de idade");
//   } else {
//     return alert("Você é menor de idade.");
//   }
// }

// function inicio() {
//   const idadeDia = Number(
//     prompt("Digite o dia do nascimento :\n obs: somente o dia  ")
//   );
//   const idadeMes = Number(
//     prompt(
//       "Digite o mes do nascimento :\n obs: somente o mês em numero com 2 digitos "
//     )
//   );
//   const idadeAno = Number(
//     prompt("Digite o ano do nascimento :\n obs: somente o ano com 4 digitos  ")
//   );
//   analisarIdade(idadeDia, idadeMes, idadeAno);
// }
// // Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto.
// // Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.

var produtoComprado1 = prompt("Digite o codigo do produto comprado");
var produtoComprado2 = prompt("Digite o codigo do produto comprado");
var produtoComprado3 = prompt("Digite o codigo do produto comprado");
var produtoComprado4 = prompt("Digite o codigo do produto comprado");
var produtoComprado5 = prompt("Digite o codigo do produto comprado");
var produtoComprado6 = prompt("Digite o codigo do produto comprado");
var produtoComprado7 = prompt("Digite o codigo do produto comprado");
var produtoComprado8 = prompt("Digite o codigo do produto comprado");
var produtoComprado9 = prompt("Digite o codigo do produto comprado");
var produtoComprado10 = prompt("Digite o codigo do produto comprado");
var produtoComprado11 = prompt("Digite o codigo do produto comprado");


