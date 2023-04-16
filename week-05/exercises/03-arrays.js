/*Arrays*/

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los months 5 y 11 (utilizar console.log)*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log(months[5],months[11]);

/*b. Ordenar el array de months alfabéticamente y mostrarlo por consola (utilizar sort)*/

var monthsAbc = months.sort();

console.log(monthsAbc);

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push)*/

var colors = ["red", "blue", "yellow", "green"];
colors.unshift("purple");
colors.push("black");

console.log(colors);

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop)*/

colors.shift();
colors.pop();

console.log(colors);

/*e. Invertir el orden del array (utilizar reverse)*/

console.log(colors.reverse());

/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join)*/

console.log(months.join('-'));

/*g. Crear una copia del array de months que contenga desde Mayo hasta Noviembre (utilizar slice)*/

