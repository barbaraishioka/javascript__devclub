/* 

OPERADORES DE COMPARAÇÃO

== Igual (Compara só valor)
=== Totalmente Igual (Compara valor e tipo)
!= Diferente (Compara só valor)
!== Totalmente Diferente (Compara valor e tipo)

> maior que
>= maior ou igual 
< menor que
<= menor ou igual

*/

// Exemplos utilizando == === != !===
let number1 = 20; // number
let number2 = "20"; // string

console.log(number1 == number2); // true
console.log(number1 === number2); // false
console.log(number1 != number2); // false
console.log(number1 !== number2); // true

// Exemplos utilizando < > >= <=
console.log(10 < 20); // true
console.log(10 > 20); // false
console.log(10 <= 20); // true
console.log(10 >= 20); // false
console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
