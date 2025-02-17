
// Arreglos en JS
const arregloNuevo = new Array(100);
console.log(arregloNuevo);

const arregloPush = [];
arregloPush.push(1);
arregloPush.push(2);
arregloPush.push(3);
arregloPush.push(4);

console.log(arregloPush);

//Why Not Push
const arreglo = [ 1,2,3,4 ];
let arreglo2 = arreglo;
arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);
let arreglo3 = [...arreglo,6];


const arreglo4 = arreglo3.map( function(numero) {
     return numero * 2;
    });

console.log(arreglo);
console.log(arreglo3);
console.log(arreglo4);