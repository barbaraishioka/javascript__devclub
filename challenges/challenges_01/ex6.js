// [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.

const person1 = "João";
const person2 = "Maria";

const resultFalse = person1 !== person1;
const resultTrue = person1 !== person2;

console.log(resultFalse);
console.log(resultTrue);
