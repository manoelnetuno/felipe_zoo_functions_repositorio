const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const checkedAnimal = data.species.find((specie) => specie.name === animal);
  const residentAncients = checkedAnimal.residents.filter((resident) => resident.age >= age);
  const filterAgeAnimal = residentAncients.length === checkedAnimal.residents.length;
  return filterAgeAnimal;
};

module.exports = getAnimalsOlderThan;
