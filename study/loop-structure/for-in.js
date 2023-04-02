/* 

ESTRUTURA DE REPETIÇÃO - FOR IN

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

*/

const student = {
  name: "Caio",
  age: "26",
  genre: "male",
};

// SEGUE ABAIXO 3 EXEMPLOS DE USO DO FOR IN

for (const property in student) {
  console.log(property); // name age genre
}

for (const property in student) {
  console.log(student[property]); // Caio 26 male
}

for (const property in student) {
  console.log(`${property}: ${student[property]}`);
  /*
    name: Caio
    age: 26
    genre: male
  */
}

console.log(student.name); // Caio
console.log(student["name"]); // Caio
