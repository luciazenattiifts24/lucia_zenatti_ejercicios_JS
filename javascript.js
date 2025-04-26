/* EJERCICIO 1
---------------------------------------------------------
function recibo_array (array){
    return array.filter(numero => numero % 2 === 0);
}

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9,10];
let nuevoArray = recibo_array(arrayNumeros);
console.log(nuevoArray); 
----------------------------------------------------------
*/

/* EJERCICIO 2 (tuve que investigar un poco, mi duda principal sería como es como funciona el hecho de que si es 3 o mas datos el que tiene el array, como sabe de ir sumando?)
---------------------------------------------------------
function calcularPromedio(arrayNum){
    return arrayNum.reduce((a, b) => a + b) / arrayNum.length;
}

let arrayNum = [2,4,5];
console.log(calcularPromedio(arrayNum));
---------------------------------------------------------
*/



let colores = ['blanco', 'azul', 'verde'];
let tiempoRetraso = 10000;

colores.forEach((color, indice) => {
  setTimeout(() => {
    console.log(color);
  }, (indice + 1) * tiempoRetraso);
});