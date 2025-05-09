
// Ejercicio 1: Devolver caracteres en mayúsculas y separados por espacios.

let string = "Ana"; // Variable let con nombre "string", porque aceptará cualquier palabra que le asignemos.

// Función que convierte la palabra en mayúsculas y separada por espacios.
// Se declara con una variable const porque no queremos modificar su valor en este caso.
// Recibe como parámetro la palabra que queremos leer.
// .toUpperCase() convierte la cadena en mayúsculas. Con .split('') se separan los caracteres de la cadena y se almacenan en un array.
// Con .join(' ') se crea un string a partir del array con un espacio como separador y se devuelve el resultado de la función.
const modificarPalabra = (palabra) => palabra.toUpperCase().split('').join(' ');

console.log(modificarPalabra(string));





// Ejercicio 2: Devolver el número de palabras que tiene un nombre

let nombre = "Antonio Alberto Jesús"; // Variable let con nombre "nombre", porque queremos leer el nombre que le asignemos.

 // Función que contará las palabras que hay. Recibe como parámetro la cadena que queremos leer. 
 // Con .split(' ') separamos en un array cada palabra, con .length contamos cuántas palabras hay y devuelve el resultado.
const contarPalabras = (palabra) => palabra.split(' ').length;

console.log(contarPalabras(nombre));





// Ejercicio 3: Diseñar un algoritmo que cuente las veces que aparece una determinada letra en una frase.

    // PSEUDOCÓDIGO

        // Inicio
        //     Leer frase
        //     Leer caracter buscado
        //     Crear contador
        //     Recorrer la frase
        //     Si frase es igual al caracter buscado
        //         Incrementar contador en uno
        //     Fin si
        //     Devolver contador
        // Fin


let frase = "hola que tal"; // // Variable let con nombre "frase", porque queremos leer la frase que le asignemos.

// Función que cuenta cuántas veces aparece un caracter en la frase. Recibe dos parámetros, la frase y el caracter que se busca. Se crea una variable const porque no va a cambiar su valor.
const contarCaracteres = (frase, caracter) => {
    let contador = 0; // Crear una variable let para almacenar las letras contadas. Se crea una variable let porque el valor de contador irá cambiando.
    for (let i = 0; i < frase.length; i++) {
        // Si el caracter de la frase coincide con la letra que estamos buscando, entra en la condición y el contador se incrementa en uno
        if (frase[i] === caracter) {
            contador++;
        }
    } // Bucle que recorre el string
    return contador; // Devuelve el contador que determina cuántas veces aparece una palabra
}

console.log (contarCaracteres(frase, "a"));

