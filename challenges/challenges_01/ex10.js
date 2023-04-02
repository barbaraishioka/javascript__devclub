// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const person1 = {
  name: "João",
};

const person2 = {
  name: "Maria",
};

const resultTrue = person1.name == person1.name;
const resultFalse = person1.name == person2.name;

console.log(resultTrue);
console.log(resultFalse);
