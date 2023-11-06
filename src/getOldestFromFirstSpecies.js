const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((element) => element.id === id);
  const firstSpeciesId = employee.responsibleFor[0];
  const species = data.species.find((element) => element.id === firstSpeciesId);
  const oldestAnimal = species.residents.reduce((a, b) => (a.age > b.age ? a : b));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
