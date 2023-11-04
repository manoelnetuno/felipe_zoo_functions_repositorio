const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se a função retorna os horarios de visita do zoológico', () => {
    const funcionamento = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(funcionamento);
  });

  it('Testa se os argumentos Monday e 09:00-AM  retornam a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('Testa se os argumentos Tuesday e 09:00-AM retornam a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('Testa se os argumentos Wednesday e 09:00-PM retornam a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Testa se erro lançado tem a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-ma')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa se os argumentos Thu e 09:00-AM lançam uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Testa se os argumentos Friday e 09:00-ZM  lançam uma exceção com a mensagem: (The abbreviation must be \'AM\' or \'PM\')', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa se os argumentos Saturday e C9:00-AM lançam uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Testa se os argumentos Sunday e 09:c0-AM lançam uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Testa se os argumentos Monday e 13:00-AM lançam uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Testa os argumentos Tuesday e 09:60-AM  lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
