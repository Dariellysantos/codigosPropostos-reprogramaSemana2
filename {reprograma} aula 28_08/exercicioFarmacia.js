// // Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto.
// // Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.

function inserirProduto() {
  const form = document.querySelector("#codigoDoProduto").value;
  console.log(form);
}

//const inserirProduto = () => {};

// 1. salvar codigos que entram pelo imput em uma lista quando apertar cadastrar
// 2. fazer ação de calcular desconto quando aperta finalizar cadastro.
// 2.pecorrer a lista e verificar se tem elementos iguais
//se igual [0]  se igual [1] --> i++
// 3. se quantidade de repetidos dividido por 2, valor inteiro multiplicado por 5
// 4. retornar valor do desconto