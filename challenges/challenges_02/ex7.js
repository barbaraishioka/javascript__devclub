// [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.

// ***** MINHA SOLUÇÃO *****

const number = 66;
const result = number % 2 === 0 ? "Par" : "Ímpar";
console.log(result);

// ***** SOLUÇÃO PROFESSOR *****

if (number % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
