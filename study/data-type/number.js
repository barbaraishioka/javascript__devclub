// ----- Tipo de Dado -> Number -----

const a = 50; // number
const b = "20"; // string
const c = "string"; // string
const d = 50.3; // number (número fracionado - não usar vírgula)

console.log(a + a); // 100 -> number + number == number
console.log(a + b); // 5020 -> number + string == string
console.log(a - b); // 30 -> number - string == number
console.log(a * b); // 1000 -> number * string == number
console.log(a / b); // 2.5 -> number / string == number
console.log(a / c); // NaN -> number / string == NaN
