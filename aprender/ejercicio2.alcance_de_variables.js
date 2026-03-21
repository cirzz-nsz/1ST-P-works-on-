/*Ejemplos de variables que tienen alcance global o SCOPE se accede por medio de lo que esta
interpretado dentro de {} y se llama con el [nombre de la funcion]() */

let nombre = "Juan" ;
console.log (nombre);

function saludo() {
    console.log ("Hola " + nombre);
}

saludo(); /*esto muestra "Hola Juan" porque la variable nombre es global y se puede acceder
desde cualquier parte del código*/ 

console.log(nombre);



