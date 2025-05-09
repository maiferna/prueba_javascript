// Comentar qué variables hemos utilizado, por qué, etc


// Ejercicio 1: Devolver caracteres en mayúsculas y separados por espacios.

let string = "Ana";

const modificarPalabra = (palabra) => palabra.toUpperCase().split('').join(' ');

console.log(modificarPalabra(string));



// Ejercicio 2: Devolver el número de palabras que tiene un nombre

let nombre = "Antonio Alberto Jesús";

const contarPalabras = (palabra) => {
    return palabra.split(' ').length;
}

console.log(contarPalabras(nombre));

