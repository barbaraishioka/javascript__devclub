/* 

SWITCH CASE

switch (key) {
  case value:
    break;

  default:
    break;
}

*/

// EXEMPLO : CÁLCULO DE IMC
const weight = 67;
const height = 1.55;
const imc = (weight / Math.pow(height, 2)).toFixed(1);

switch (true) {
  case imc < 18.5:
    console.log("Magro");
    break;

  case imc >= 18.5 && imc <= 24.9:
    console.log("Normal");
    break;

  case imc >= 25 && imc <= 29.9:
    console.log("Sobrepeso");
    break;

  case imc >= 30 && imc <= 39.9:
    console.log("Obesidade");
    break;

  case imc >= 40:
    console.log("Obesidade grave");
    break;

  default:
    console.log("Favor inserir os dados corretamente");
    break;
}
