// // Apartado1
// function esVocal(letra) {
    
//     const letraMinuscula = letra.toLowerCase();
//     return vocales.includes(letraMinuscula);
//   }
  
//   // Ejemplos de uso:
//   vocales = ['a', 'e', 'i', 'o', 'u'];
//   console.log(esVocal('A', 'e'));
  
// // Apartado2

// function procesarArray() {
//     numeros = ['1', '2', '-3', '-1', '2', '4', '4', '1', '45', '-1']
    
//     let unicos = [];
//     numeros.forEach(num => {
//         if (!unicos.some(el => el === num)) {
//             unicos.push(num);
//         }
//         return unicos;
//     });
//     unicos.sort((a, b) => a - b);
//     console.log(unicos.toString());
// }

// console.log(procesarArray());

// Apartado3

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
console.log("Clasificación inicial: " + clasificaciones);

let antonio = clasificaciones.pop();
let maria = clasificaciones.pop();
let celia = clasificaciones.pop();
let raul = clasificaciones.pop();

clasificaciones.push(celia);
clasificaciones.push(raul);
clasificaciones.push(maria);
clasificaciones.push(antonio);

clasificaciones.pop();

let ana = clasificaciones.shift();
let oswaldo = clasificaciones.pop();
let celia2 = clasificaciones.pop();
let raul2 = clasificaciones.pop();

clasificaciones.push("Roberto");
clasificaciones.push("Amaya");

clasificaciones.unshift(ana);

clasificaciones.push(oswaldo);
clasificaciones.push(raul2);
clasificaciones.push(celia2);
clasificaciones.push(maria);

clasificaciones.unshift("Marta");

console.log("\nClasificación actualizada: " + clasificaciones);
