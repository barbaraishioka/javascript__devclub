// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const people = {
  person1: "João",
  person2: "Maria",
};

const resultTrue = people.person1 == people.person1;
const resultFalse = people.person1 == people.person2;

console.log(resultTrue);
console.log(resultFalse);
