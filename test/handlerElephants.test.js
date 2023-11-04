const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento "count" deve retornar o número inteiro 4', () => {
    const integerNumber = handlerElephants('count');
    expect(integerNumber).toBe(4);
  });
  it(' o argumento "names" deve retornar um array de nomes que possui o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Ao passar o arg "averageAge" retorna um numero próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Ao receber o arg "location" deve retornar uma string "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Ao receber "popularity" retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Ao receber "availability" retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Ao passar um parâmetro diferente de uma string, deve retornar "Parâmetro inválido, é necessario uma string"', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('caso não haja parâmetro, retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Espera-se que se passar parâmetro string que não seja os corretos, retorne null.', () => {
    expect(handlerElephants('Netuno')).toBe(null);
  });
});
