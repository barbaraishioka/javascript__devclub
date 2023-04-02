// ----- Tipo de Dado -> Object -----

const person = {
  name: "Nome",
  age: 30,
  sex: "feminino",
  height: 1.55,
  adress: {
    // Eu posso ter objetos dentro de objetos
    street: "Nome da rua",
    city: "Nome da cidadae",
    state: "Nome do estado",
    country: "Nome do país",
  },
};

// exemplo de como acessar o objeto inteiro
console.log(person);
// exemplo de como acessar um item dentro do objeto
console.log(person.adress.country);
