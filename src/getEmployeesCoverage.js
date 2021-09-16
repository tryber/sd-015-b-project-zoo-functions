const data = require('../data/zoo_data');

const errorMsg = 'Informações inválidas';

const findAnimalById = (animalId) => animalId
  .map((eachID) => data.species.filter((spc) => spc.id === eachID)
    .map((obj) => obj.name)[0]);

const findAnimalLocation = (animals) => animals.map((eachAnimal) => {
  const eachAnimalName = data.species
    .filter((spc) => spc.name === eachAnimal)
    .map((eachObj) => eachObj.location);
  return eachAnimalName[0];
});

function constructObject(emp) {
  const species = findAnimalById(emp.responsibleFor);
  return {
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species, // emp.responsibleFor
    locations: findAnimalLocation(species), // animalMap
  };
}
function verifyName(emp, fullEmployeeCoverage) {
  const employee = fullEmployeeCoverage.filter((obj) => obj.fullName.includes(emp))[0];
  if (employee === undefined) {
    throw new Error(errorMsg);
  } else {
    return employee;
  }
}
function verifyId(id, fullEmployeeCoverage) {
  const employee = fullEmployeeCoverage.filter((obj) => obj.id === id)[0];

  if (employee === undefined) {
    throw new Error(errorMsg);
  } else {
    return employee;
  }
}
function getEmployeesCoverage(employeeNameId) {
  // seu código aqui
  const fullEmployeeCoverage = data.employees.map(constructObject);
  if (!employeeNameId) {
    return fullEmployeeCoverage;
  }
  const { name, id } = employeeNameId;

  if (name) {
    const employee = verifyName(name, fullEmployeeCoverage);
    return employee;
  }

  if (id) {
    const employee = verifyId(id, fullEmployeeCoverage);
    return employee;
  }

  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage({ name: 'Emery' }));
module.exports = getEmployeesCoverage;
