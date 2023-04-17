/*Funciones*/

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador*/

console.log('-Exercise 6.a:');

function addition(a,b){
   return a+b;
}
var result = addition(2,5);
console.log(result);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si alguno
de los parámetros no es un número; de no ser un número, mostrar un alert aclarando
que uno de los parámetros tiene error y retornar el valor NaN como resultado*/

console.log('-Exercise 6.b:');

function addition2(a,b){
    if (typeof(a) && typeof(b) == 'number'){
        return a+b;
    }else{
        alert('Uno de los parametros tiene un error');
        return NaN;
    }
 }

 var result2 = addition2(4,'6');

 console.log(result2);

/*c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva
verdadero si es un número entero*/

console.log('-Exercise 6.c:');

function validateInteger(a){
    if (a == Math.floor(a)){
        return true;
    }else{
        return false;
    }
}

var result3 = validateInteger(8);

console.log('entero =', result3);
result3 = validateInteger(8.4);
console.log('no entero =', result3);


/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar
el número convertido a entero (redondeado)*/

console.log('-Exercise 6.d:');

function addition3(a,b){
    if (typeof(a) && typeof(b) == 'number'){
        if (!(validateInteger(a))){
            alert('Error, el numero no es entero');
            a = Math.round(a);
        }
        if (!(validateInteger(b))){
            alert('Error, el numero no es entero');
            b = Math.round(b);
        }
        return a+b;
    }else{
        alert('Uno de los parametros tiene un error');
        return NaN;
    }
 }

 var result4 = addition3(1,0.8);
 console.log(result4);
 var result4 = addition3(1.3,1.8);
 console.log(result4);
 var result4 = addition3(1.6,8);
 console.log(result4);


/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
función probando que todo siga funcionando igual que en el apartado anterior*/

console.log('-Exercise 6.e:');

function validate1(a){
    if (!(validateInteger(a))){
        alert('Error, el numero no es entero');
        a=Math.round(a);
    }
    return a;
}

function validate2(a,b){
    return (typeof(a) && typeof(b) == 'number');
 }


 function addition4(a,b){
    if (validate2(a,b)){
        a = validate1(a);
        b = validate1(b);
        return a+b;
    }else{
        alert('Uno de los parametros tiene un error');
        return NaN;
    }
 }

 var result5 = addition4(0.6,5.3);
 console.log(result5);
 var result5 = addition4(0,5);
 console.log(result5);
 var result5 = addition4('8','5');
 console.log(result5);