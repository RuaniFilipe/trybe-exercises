const soma = require('./script');

describe('soma', () => {  
  test('Soma dois valores', () => {
    expect(soma(4, 5)).toEqual(9);
    expect(soma(0, 0)).toEqual(0);
    expect(soma(2, 3)).toEqual(5);
    expect(() => { 
      soma(4, '5');}).toThrow('São aceitos apenas números');
})
});
