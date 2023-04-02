// [ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 10 e 100.

const max = 100;
const min = 10;

const random10to100 = Math.round(Math.random() * (max - min) + min);
const result2 = random10to100;
console.log(result2);

// math.round -> arredonda
// math.random -> número aleatórios entre 0 e 1
// * (max - min) -> multiplica por 90, segue abaixo o motivo.
// + min -> O menor número que poderia vir é 0 , porém 0 + 10 é 10 então esse torna-se o menor número.
// + min -> O maior número que poderia vir é 90, porém 90 + 10 é 100 então esse torna-se o maior número.
