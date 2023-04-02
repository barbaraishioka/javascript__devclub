// [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

// ***** MINHA SOLUÇÃO *****

const person = {
  nationality: "Brasil",
};

const isBrazilian =
  person.nationality == "Brasil" ? "É brasileiro(a)" : "Não é brasileiro(a)";

console.log(isBrazilian);

// ***** SOLUÇÃO PROFESSOR *****

const person2 = {
  name: "João",
  nationality: "Brasileiro",
};

if (person2.nationality === "Brasileiro") {
  console.log("Ele é brasileiro");
} else {
  console.log("Ele é estrangeiro");
}
