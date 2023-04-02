/* 

OPERADOR TERNÁRIO

? -> SE
: -> SENÃO

*/

// Exemplo 1
const chuva = false;
const guardaChuva = chuva ? "levar guarda-chuva" : "deixar guarda-chuva";

console.log(guardaChuva);

// Exemplo 2
const saldo = true;
const contaDesbloqueada = true;
const contaExiste = false;

const AutorizacaoDeTranferencia =
  saldo && contaDesbloqueada && contaExiste
    ? "Transferência Autorizada"
    : "Transferencia Negada";

console.log(AutorizacaoDeTranferencia);
