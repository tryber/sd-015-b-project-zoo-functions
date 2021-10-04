const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const foundEmploy = () => employees.find((employee) => employee.id === id).responsibleFor[0];
  const foundAnimal = () => species.find((specie) => specie.id === foundEmploy()).residents;
  const func = foundAnimal().sort((a, b) => b.age - a.age)[0];
  return Object.values(func);
}

module.exports = getOldestFromFirstSpecies;
