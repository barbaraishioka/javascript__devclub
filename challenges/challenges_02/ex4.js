// [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

// ***** MINHA SOLUÇÃO 01 *****

const numbers = [5, 3, 9];
const bigger = Math.max.apply(null, numbers);
const smaller = Math.min.apply(null, numbers);
console.log(`Maior número é ${bigger} e menor número é ${smaller}`);

// ***** MINHA SOLUÇÃO 02 *****

const a = 55;
const b = 20;
const c = 87;
console.log(
  `Maior número é ${Math.max(a, b, c)} e menor número é ${Math.min(a, b, c)}`,
);

// ***** SOLUÇÃO PROFESSOR *****

const firstNumber = 44;
const secondNumber = 20;
const thirdNumber = 30;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log("O primeiro é o maior");
} else if (secondNumber > thirdNumber) {
  console.log("O segundo é o maior");
} else {
  console.log("O terceiro é o maior");
}

if (firstNumber < secondNumber && firstNumber < thirdNumber) {
  console.log("O primeiro é o menor");
} else if (secondNumber < thirdNumber) {
  console.log("O segundo é o menor");
} else {
  console.log("O terceiro é o menor");
}
