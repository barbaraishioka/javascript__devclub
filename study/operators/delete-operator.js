// OPERADOR DELETE

/* 
Exemplo 1 
*/
const myObject = {
  name: "Bob",
  age: 30,
  adress: "Rua aleatória, nº 50",
};
delete myObject.age;
console.log(myObject);
// { name: 'Bob', adress: 'Rua aleatória, nº 50' }

/* 
Exemplo 2 
*/
const myArray = ["banana", "manga", "kiwi"];
delete myArray[1];
console.log(myArray);
// [ 'banana', <1 empty item>, 'kiwi' ]

/* 
Exemplo 3
*/
const arrayObject = [
  {
    person1: "João",
  },
  {
    person2: "Maria",
  },
  {
    person3: "José",
  },
];
delete arrayObject[1];
console.log(arrayObject);
// [ { person1: 'João' }, <1 empty item>, { person3: 'José' } ]
