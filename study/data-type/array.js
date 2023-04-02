// ----- Tipo de Dado -> Array -----

// array == vetor == lista
// pode inserir number, string, boolean e object dentro do array
// posição do array começa com 0 (zero)

const array = [
  50, // number
  "string", // string
  true, // boolean
  {
    Object: "object", // object
  },
];

console.log(array); // mostrando o array inteiro
console.log(array[0]); // acessando e mostrando a posição 0
console.log(array[50]); // undefined -> não existe posição 50
console.log(typeof array[2]); // boolean
// typeof mostra o tipo de dado
