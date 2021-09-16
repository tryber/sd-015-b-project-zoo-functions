const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((a) => a.id === id);
  const firstAnimal = employee.responsibleFor[0];
  const findAnimal = species.find((a) => a.id === firstAnimal);
  const resident = findAnimal.residents;
  const resultArray = [];
  const arrayAllAges = [];
  resident.forEach((a) => {
    arrayAllAges.push(a.age);
  });
  const max = Math.max(...arrayAllAges);
  const objMaiorNumero = resident.find((a) => a.age === max);
  resultArray.push(objMaiorNumero.name, objMaiorNumero.sex, objMaiorNumero.age);
  console.log(resultArray);
  return resultArray;
}
getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2');
module.exports = getOldestFromFirstSpecies;
