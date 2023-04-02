// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

const array = ["João", "Maria"];

const resultTrue = array[0] == array[0];
const resultFalse = array[0] == array[1];

console.log(resultTrue);
console.log(resultFalse);
