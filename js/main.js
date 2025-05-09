// Comentar qué variables hemos utilizado, por qué, etc


// Ejercicio 1: Devolver caracteres en mayúsculas y separados por espacios.

let nombre = "Ana";

const modificarPalabra = (palabra) => palabra.toUpperCase().split('').join(' ');

console.log(modificarPalabra(nombre));

