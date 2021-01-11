const encode = require('./challenges').encode
const decode = require('./challenges').decode

describe('Verificar se encode é função', () => {
  test('Encode é função?', () => {
    expect(typeof encode).toEqual('function');
    expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
    expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o', 'u');
    expect(decode('n5')).toEqual('nu');
    expect(decode('input').length).toEqual(5)
  })
})