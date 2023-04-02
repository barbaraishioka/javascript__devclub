// [ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

// ***** MINHA SOLUÇÃO *****

const number = 15;

//- ímpar, - par
if (number % 2 == 0) {
  console.log("Número é par");
} else {
  console.log("Número é ímpar");
}

// - é par e divisível por 5
if (number % 2 == 0 && number % 5 == 0) {
  console.log("Número é par e divisível por 5");
}

// número primo eu não consegui.

// ***** SOLUÇÃO PROFESSOR *****
