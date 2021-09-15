const data = require('../data/zoo_data');

function mapIdsToNames(employee, returnArr) {
  const { species: id } = employee;
  const animals = data.species;
  // filters animals if id is in employee.species
  const selectedSpecies = animals.filter((specie) => id.includes(specie.id));
  // creates array with filtered animals' names
  const speciesNames = selectedSpecies.map((specie) => specie.name);
  const employeeSpecies = employee;
  // replaces IDs with names
  employeeSpecies.species = speciesNames;
  console.log(employeeSpecies);
}

function getSpecies(returnArr) {
  returnArr.forEach((employee) => mapIdsToNames(employee, returnArr));
  return 'a';
}

function makeReturnArr() {
  const returnArr = data.employees;
  const newReturnArr = returnArr.map((employee) => (
    {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor,
      locations: [],
    }
  ));
  return newReturnArr;
}

function getEmployeesCoverage(options) {
  if (options) {
    const { name, id } = options;
    console.log(name);
    console.log(id);
  } else {
    const returnArr = makeReturnArr();
    const returnArrSpecies = getSpecies(returnArr);
    console.log(returnArrSpecies);
  }
}
getEmployeesCoverage();

module.exports = getEmployeesCoverage;
