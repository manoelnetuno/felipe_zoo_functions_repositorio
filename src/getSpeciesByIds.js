const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const arraySpeciesByIds = [];
  if (!ids) return arraySpeciesByIds;

  ids.forEach((id) => {
    const filter = data.species.find((idAnimal) => idAnimal.id === id);
    if (filter) {
      arraySpeciesByIds.push(filter);
    }
  });

  return arraySpeciesByIds;
};

module.exports = getSpeciesByIds;
