const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const countChild = entrants.filter((people) =>
    people.age < 18).length;

  const countAdult = entrants.filter((people) =>
    (people.age >= 18) && (people.age < 50)).length;

  const countSenior = entrants.filter((people) =>
    (people.age >= 50)).length;

  return {
    child: countChild,
    adult: countAdult,
    senior: countSenior,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === undefined || entrants.length === 0) return 0;

  const sumChildValue = countEntrants(entrants).child * data.prices.child;
  const sumAdultValue = countEntrants(entrants).adult * data.prices.adult;
  const sumSeniorValue = countEntrants(entrants).senior * data.prices.senior;

  return parseFloat((sumChildValue + sumAdultValue + sumSeniorValue).toFixed(2));
};

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
