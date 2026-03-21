for(let numeros = 0; numeros < 10 ; numeros++) {
    console.log("Numero " + numeros);
}
console.log("");
for(let numeros = 5; numeros < 10 ; numeros++) {
    console.log("Numero " + numeros);
}
console.log("");
for(let numeros = 10; numeros < 10 ; numeros++) { //no se ejecuta porque el numero 10 no es menor que 10, es igual
    console.log("Numero " + numeros);
}

console.log("");
for(let numeros = -6; numeros < 10 ; numeros++) {
    console.log("Numero " + numeros);
}
console.log("");

for(let numeros = 0; numeros <= 10 ; numeros++) {
    console.log("Numero " + numeros);
}
console.log("");


/*se puede hacer cualquier cosa solamente necesitas saber que hacer y como hacerlo
pero si pones como la linea 19 se generan 11 numeros por que comienza a contar
desde el numero 0 y asi con los demas depende de lo que se quiera hacer
y como lo formemos o pidamos nosotros, se pueden cambiar las condiciones
a distintas como < o > o incluso como la linea 19 >= o <= */

console.log("");
console.log("");

for (let numeros = 1; numeros <= 10; numeros++) {
    if (numeros % 2 === 0) {
        console.log("Numero " + numeros + " es par");
    }
}

/*numeros par o impar solo imprime si el numero es par
y si no simplemente lo salta, se repite lo mismo que arriba 
con lo de el <= a 10 y otras cosas pero el %2 == 0 sirve para
 identificar los numeros pares, en este caso si son divisiblen entre 2 
 y si se cumple esto lo que hace es imprimirlo y ya */ 

//numero magico de el 1 al 10
console.log("");

let numero_magico = 6;

for (let numeros = 1; numeros <= 10; numeros++) {
    console.log(numeros)
   if (numeros == numero_magico){
    console.log("numero magico encontrado")
   }
   
}
