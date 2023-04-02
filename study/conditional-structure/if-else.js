/* 

CONTROLE DE FLUXO - CONDICIONAIS - IF / ELSE

if -> SE
else -> SENÃO
else if -> MAIS SE


if (condition true) { SE a condição é verdadeira
  executar o que tiver aqui
} else { SENÃO for verdadeira
  executar o que tiver aqui
}

*/

// EXEMPLO IF ELSE
// detalhe: pode ter if sem else, mas não else sem if
const idade = 15;

if (idade >= 18) {
  console.log("A pessoa é MAIOR de idade");
} else {
  // else não é obrigatório
  console.log("A pessoa é MENOR de idade");
}

// EXEMPLO ELSE IF

const temperature = 37;

if (temperature >= 36 && temperature <= 37) {
  // SE
  console.log("A pessoa está saudável");
} else if (temperature > 37) {
  // MAIS SE
  console.log("A pessoa está com febre");
} else {
  // SENÃO
  console.log("A pessoa está com a temperatura muito baixa");
}
