// [ ] Crie 5 objetos nesse formato { nome: "" idade: "" sexo: "" profissão: "" nacionalidade: "" } Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

// ***** MINHA SOLUÇÃO *****

const person = {
  nome: "Ana",
  idade: 20,
  sexo: "female",
  profissão: null,
  nacionalidade: "Brasil",
};

if (person.idade >= 18 && person.nacionalidade == "Brasil") {
  console.log("Aprovada");
} else {
  console.log("Reprovada");
}

// ***** SOLUÇÃO PROFESSOR *****

const personOne = {
  nome: "Ana",
  idade: 20,
  sexo: "female",
  profissão: null,
  nacionalidade: "Brasileira",
};

if (
  (personOne.idade >= 18 && personOne.nacionalidade == "Brasileiro") ||
  personOne.nacionalidade == "Brasileira"
) {
  console.log("Você passou no processo");
} else {
  console.log("Você NÃO passou no processo");
}
