var assert = require('assert');


// 13. Escribir una función que sume los elementos de una lista usando un ciclo "do-while"

function suma(lista) {

  var suma = 0;
  var contador = 0;

  do{
      suma += lista[contador];
      contador++
  } while(lista.length > contador )

  return suma

}

assert.deepEqual(suma([1, 2, 3, 4]), 10, 'fallo test 1') ||
assert.deepEqual(suma([8, 23, 14]), 45, 'fallo test 2') ||
assert.deepEqual(suma([12, 34]), 46, 'fallo test 3') ||
assert.deepEqual(suma([124, 84, 71, 40]), 319, 'fallo test 4') ||
assert.deepEqual(suma([234, 1565, 925]), 2724, 'fallo test 5') ||
assert.deepEqual(suma([448, 275, 726]), 1449, 'fallo test 6') ||
assert.deepEqual(suma([854, 856, 918, 859, 1785, 5883]), 11155, 'fallo test 7') ||
assert.deepEqual(suma([968, 7496, 1640, 1859, 3906, 946]), 16815, 'fallo test 8') ||
assert.deepEqual(suma([648, 252, 97, 295, 178, 476, 395]), 2341, 'fallo test 9') ||
console.log("exito");
