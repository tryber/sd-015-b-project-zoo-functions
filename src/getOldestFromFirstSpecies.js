const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find(({ id: employeeId }) => employeeId === id);
  const { responsibleFor: species } = selectedEmployee;
  const firstSpecie = getSpeciesByIds(species[0]);
  const { residents } = firstSpecie[0];
  const oldest = residents.reduce((acc, animal) => (acc.age >= animal.age ? acc : animal));
  // console.log(oldest);
  return Object.values(oldest);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
