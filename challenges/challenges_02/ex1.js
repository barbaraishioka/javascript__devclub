// [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

// ***** MINHA SOLUÇÃO *****

const number = 5;

switch (true) {
  case number > 10:
    console.log("O número é maior");
    break;

  case number < 10:
    console.log("O número é menor");
    break;

  case number == 10:
    console.log("O número é igual");
    break;

  default:
    console.log("Não foi possível realizar a verificação.");
    break;
}

// ***** SOLUÇÃO PROFESSOR *****

if (number > 10) {
  console.log("O número é maior");
} else if (number < 10) {
  console.log("O número é menor");
} else {
  console.log("O número é igual");
}
