const data = require('../data/zoo_data');

const allSpecies = data.species;
const genderFilter = (residents, gender) => {
  if (gender) {
    return residents.filter((resident) => resident.sex === gender).map((animal) => animal.name);
  }
  return residents.map((resident) => resident.name);
};

const returnNames = (locAnimals, areas, includeNames, sex) => {
  areas.forEach((area) => {
    const objNames = locAnimals;
    const filteredSpecie = allSpecies.filter((specie) => specie.location === area);
    if (includeNames) {
      objNames[area] = filteredSpecie
        .map((specie) => (
          { [specie.name]: genderFilter(specie.residents, sex) }));
    } else {
      objNames[area] = filteredSpecie.map((specie) => specie.name);
    }
  });
};

const sortNames = (locAnimals, areas) => {
  areas.forEach((area) => {
    locAnimals[area].forEach((specie) => {
      specie[Object.keys(specie)].sort();
    });
  });
};

const getAnimalMap = (options = false) => {
  const { includeNames = false, sorted = false, sex = false } = options;
  const locAnimals = { NE: [], NW: [], SE: [], SW: [] };
  const areas = Object.keys(locAnimals);

  returnNames(locAnimals, areas, includeNames, sex);
  if (includeNames && sorted) sortNames(locAnimals, areas);
  console.log(locAnimals.NE);
  return locAnimals;
};

module.exports = getAnimalMap;
