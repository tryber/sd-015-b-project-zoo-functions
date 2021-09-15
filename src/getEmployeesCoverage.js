const data = require('../data/zoo_data');

// function mapIdsToNames(employee) {
//   const { species } = employee;
//   const animals = data.species;
//   const selectedSpecie = animals.find((specie) => specie.id === species[0]);
//   console.log(selectedSpecie);
//   // console.log(species);
// }

// function getSpecies(returnArr) {
//   returnArr.forEach((employee) => mapIdsToNames(employee));
// }

// function makeReturnArr() {
//   const returnArr = data.employees;
//   const newReturnArr = returnArr.map((employee) => (
//     {
//       id: employee.id,
//       fullName: `${employee.firstName} ${employee.lastName}`,
//       species: employee.responsibleFor,
//       locations: [],
//     }
//   ));
//   return newReturnArr;
// }

function getEmployeesCoverage(options) {
  if (options) {
    const { name, id } = options;
    console.log(name);
    console.log(id);
  } else {
    // const returnArr = makeReturnArr();
    // const returnArrSpecies = getSpecies(returnArr);
  }
}
getEmployeesCoverage();

module.exports = getEmployeesCoverage;
