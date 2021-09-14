const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpecie = (id) => employees.find((employee) => employee.id === id);

function getOldestFromFirstSpecies(id) {
  const firstSpecie = getSpecie(id).responsibleFor[0];
  return species.find((specie) => specie
    .id === firstSpecie).residents.reduce((count, { name, sex, age }) => {
    if (age > count[2]) {
      return [name, sex, age];
    }
    return count;
  }, [0, 0, 0]);
}

module.exports = getOldestFromFirstSpecies;
