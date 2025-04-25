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

function calcularPromedio(arrayNum){
    return arrayNum.reduce((a, b) => a + b) / arrayNum.length;
}

let arrayNum = [2,4,5];
console.log(calcularPromedio(arrayNum));