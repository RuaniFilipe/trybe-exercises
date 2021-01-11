const soma = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('São aceitos apenas números');
  }
  return a + b;
}

module.exports = soma;