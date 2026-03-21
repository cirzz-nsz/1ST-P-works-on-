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

function saludar() {
    let mensaje = "Hola Mundo"; /*esta variable mensaje es local a la función saludar 
    y no afecta a la variable global*/
    let nombre = "Criss"; /*esta variable nombre es local a la función saludar 
     y no afecta a la variable global*/
    console.log(mensaje + " " + nombre);
}

saludar();
console.log(nombre); /*esto muestra "Juan" porque la variable nombre dentro de la función saludar es local 
y no afecta a la variable global*/

//console.log(mensaje);
 /*esto da un error porque la variable mensaje es local a la función saludar 
y no se puede acceder desde fuera de esa función*/


/* es un concepto importante en JavaScript que se refiere al alcance o área de visibilidad de
 las variables en el código 
 se puede ver que si se define una variable dentro de una función, 
 solo se puede acceder a ella dentro de esa misma función
 si se llama a esa variable pero no esta definida globalmente en el codigo
 solo enviara un error de mensaje no definido  */

 
 if (true) {
    let bloque = "Hola";
    const constanteBloque = "Mundo";
    console.log(bloque + " " + constanteBloque); /*esto muestra "Hola Mundo"
     porque la variable bloque es accesible dentro del bloque if*/
}


//console.log(bloque); esto da un error porque la variable bloque es local al bloque if y no global

/*esto da un error porque la variable bloque es local al bloque if
 y no se puede acceder desde fuera de ese bloque*/


/*var es una forma antigua de declarar variables en JavaScript,
 pero tiene un alcance de función, lo que significa que si se declara una variable con var dentro de una función, 
 esa variable es accesible en toda la función, incluso antes de su declaración debido al hoisting. 
 Sin embargo, si se declara una variable con var dentro de un bloque (como un if o un for), 
 esa variable sigue siendo accesible fuera del bloque, lo que puede llevar a comportamientos inesperados. 
 Por ejemplo: */

if (true) {
    let bloque = "Let funciona solo dentro del bloque if";
    var funcionar = "Var funciona en cualquier parte del codigo";
}

console.log(funcionar)
//console.log(bloque); /*esto da un error porque la variable bloque es local al bloque if y no global
