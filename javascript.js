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

/* EJERCICIO 3

let colores = ['blanco', 'azul', 'verde'];
let tiempoRetraso = 1000;

colores.forEach((color, indice) => { 
  setTimeout(() => {
    console.log(color);
  }, (indice + 1) * tiempoRetraso);  // porque quiero que el segundo se imprima un segundo despues que el anterior
});

*/

/* Ejercicio 4 (se que podria hacerlo con funcion flecha pero me esta costando bastante)

function multiplicacionNumeros(num1,num2,callback){
  return callback(num1*num2);
}

function resultado(numero){
  console.log("El resultado es: ", numero)
}

multiplicacionNumeros(2,3,resultado);

*/

let contador = 0;

const mostradorResultado = document.getElementById('resultado');
const btnIncrement = document.getElementById('btnIncrement');
const brnDecrease = document.getElementById('btnDecrease');

function increment(){
  0++;
  
};

function decrease(){
  0--
}

