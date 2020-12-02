
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const retorno = arrays.reduce((acc, elemento) => acc.concat(elemento),[])
  return retorno  
}
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);