/*Strings*/

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase)*/

console.log('-Exercise 2.a:');

var mary = 'supercalifragilisticoespialidoso';
console.log(mary.toUpperCase());

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring)*/

console.log('-Exercise 2.b:');

console.log(mary.substring(0,5));

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring)*/

console.log('-Exercise 2.c:');

console.log(mary.substring(mary.length-3,mary.length));

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +)*/

console.log('Exercise 2.d:');

console.log(mary.substring(0,1).toUpperCase()+mary.substring(1,mary.length).toLowerCase());

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf)*/

console.log('-Exercise 2.e:');

var marySpace = 'supercalifragilistico espialidoso';
var marySpaceBlanc = marySpace.indexOf(' ');
console.log(marySpaceBlanc);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio)
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
la primera letra de ambas palabras en mayúscula y las demás letras en minúscula.
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)*/

console.log('-Exercise 2.f:');

console.log(marySpace.substring(0,1).toUpperCase()+
marySpace.substring(1,marySpaceBlanc).toLowerCase()+
marySpace.substring(marySpaceBlanc,marySpaceBlanc+2).toUpperCase()+
marySpace.substring(marySpaceBlanc+2,marySpace.length).toLowerCase());