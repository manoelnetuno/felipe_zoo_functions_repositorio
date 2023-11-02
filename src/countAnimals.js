const data = require('../data/zoo_data');

const { species } = data;
const countAnimals = (animal) => {
  let result = {};
  species.forEach((specie) => { result[specie.name] = specie.residents.length; });
  if (animal) {
    const specieActual = animal.species;
    const foundAnimal = species.find((specie) => specie.name === specieActual);
    result = foundAnimal.residents.length;
    if (animal.sex) {
      result = foundAnimal.residents.filter((resident) => resident.sex === animal.sex).length;
    }
  }
  return result;
};

module.exports = countAnimals;
