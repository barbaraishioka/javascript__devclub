// [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

// ***** MINHA SOLUÇÃO *****

const winner = Math.round(Math.random() * (10 - 1) + 1);
const randomNumber = Math.round(Math.random() * (10 - 1) + 1);
const isWinner = winner == randomNumber ? "Prêmio!!!" : "Tente novamente";
console.log(isWinner);

// ***** SOLUÇÃO PROFESSOR *****

const randomNumber2 = Math.floor(Math.random() * (10 - 1) + 1);
const winningNumber = Math.floor(Math.random() * (10 - 1) + 1);
if (randomNumber2 === winningNumber) {
  console.log("Você ganhou");
} else {
  console.log("Você perdeu");
}
