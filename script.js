// Apartado1
function esVocal(letra) {
    
    const letraMinuscula = letra.toLowerCase();
    return vocales.includes(letraMinuscula);
  }
  
  // Ejemplos de uso:
  vocales = ['a', 'e', 'i', 'o', 'u'];
  console.log(esVocal('A', 'e'));
  
// Apartado2

function procesarArray() {
    numeros = ['1', '2', '-3', '-1', '2', '4', '4', '1', '45', '-1']
    
    let unicos = [];
    numeros.forEach(num => {
        if (!unicos.some(el => el === num)) {
            unicos.push(num);
        }
        return unicos;
    });
    unicos.sort((a, b) => a - b);
    console.log(unicos.toString());
}

console.log(procesarArray());

// Apartado3

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
console.log("Clasificaciones:", clasificaciones);
let Cindex = clasificaciones.indexOf("Celia");
let Rindex = clasificaciones.indexOf("Raúl");
if (Rindex > -1 && Cindex > -1) {

    [clasificaciones[Cindex], 
    clasificaciones[Rindex]] = [clasificaciones[Rindex], 
    clasificaciones[Cindex]];
    
}

let Aindex = clasificaciones.indexOf("Ana");
clasificaciones.splice(Aindex + 1, 0, "Roberto", "Ana");
clasificaciones.unshift("Marta");
console.log("Ultima clasificacion:", clasificaciones);