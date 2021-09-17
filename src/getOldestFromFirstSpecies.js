const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestObjFromResident = (resident) => resident.reduce((acc, elemento) => {
  const acumulated = acc;
  const result = (elemento.age > acumulated.age) ? elemento : acumulated;
  return result;
}, { age: 0 });

const getResidentsFromSpecie = (specieFromId) => specieFromId.residents;

const getSpecieFromId = (specieId) => species.find((elemento) => elemento.id === specieId);

const getFirstSpecieFromEmployee = (theEmployee) => theEmployee.responsibleFor[0];

const getEmployee = (id) => employees.find((elemento) => elemento.id === id);

function getOldestFromFirstSpecies(id) {
  const theEmployeeObj = getEmployee(id);

  const firstSpecieId = getFirstSpecieFromEmployee(theEmployeeObj);

  const specieFromId = getSpecieFromId(firstSpecieId);

  const residents = getResidentsFromSpecie(specieFromId);

  const oldestObj = getOldestObjFromResident(residents);

  const oldestObjToArray = [oldestObj.name, oldestObj.sex, oldestObj.age];

  return oldestObjToArray;
}

module.exports = getOldestFromFirstSpecies;
