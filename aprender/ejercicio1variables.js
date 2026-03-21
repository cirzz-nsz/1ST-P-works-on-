//url: https://developer.mozilla.org/en-US/docs/Web/JavaScript 
/* este es un comentario
multilinea funcional*/

//declaracion de variables y constantes
/*Características principales sde constantes :
No reasignable
deben ser inicializadas al momento de su declaración
no pueden ser redeclaradas almenos que esten entre llaves o en un bloque de codigo diferente
*/

/*let es una forma moderna de reeedefinir las variables
el var se usaba antes el problema es que no tiene scope de bloque
y lo que realiza es que funciona pero no de la manera más eficiente
te deja hacerlo pero al momento de mostrarlo en el codigo no actualiza
a la reedefinicion que se le hace a la variable*/

let nombre = "Juan";  const PI = 3.141614 ; 

console.log (nombre);
console.log (PI);

//modificando variables y constantes
nombre = "Criss"; 

console.log (nombre);
//PI = 3.14; //esto no se puede hacer porque es una constante
/* el error se interpreta como ejercicio1variables.js:(Numero de linea )
 Uncaught TypeError: Assignment to constant variable.
y no deja avanzar */


/* Tipos de variables que representan a los datos primitivos de JavaScript
-String: Cadenas de texto, ej: "Hola Mundo".
-Number: Valores numéricos, incluyendo enteros (42) y decimales (3.14).
-Boolean: Representa una entidad lógica: true o false.
-Null: Indica explícitamente "sin valor" o "valor desconocido".
-Undefined: Representa una variable que ha sido declarada pero no se le ha asignado un valor aún.
-Symbol: Proporciona identificadores únicos, útil en objetos para evitar colisiones de propiedades.
-BigInt: Se utiliza para números enteros de longitud arbitraria, necesarios cuando se superan
 los límites de Number (±(-1)) */

let mensaje = "Hola Mundo"; //String
let numero = 42; //Number
let esVerdadero = true; //Boolean
let valorNulo = null; //Null
var valorIndefinido;    //Undefined, no se le ha asignado un valor aún

console.log("!Hola mi lenguaje es JavaScript¡");

console.log ("!Hola mi nombre es  !"+ nombre + "!");

/*esto se llama Concatenar y es una forma de unir cadenas de texto con variables
con otras cadenas de texto */

