/*-------Practice Javascript--------*/

/*-------Closure--------*/

/*Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto.*/

let name = "alexis";

function fullName() {
  return name + " " + "lopez";
}

console.log(fullName());

/*¿Qué puedo hacer con closures?
Expresión de Función Inmediatamente invocada - Immediately-invoked Function Expression (IIFE)
Es una ténica utilizada mucho en los días de ES5 para implementar el patrón de diseño de “modulo” (antes de que esto fuese soportado nativamente).
La idea es “envolver” tu módulo en una función que es inmediatamente ejecutada*/

(function (a, b) {
  return console.log(a + b);
})(3, 6);



