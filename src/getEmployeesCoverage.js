const data = require('../data/zoo_data');

function getEmployeesCoverage(obj) {
  if (!obj) {
    return data.employees.find((name) => name);
  } if (obj.name) {
    return data.employees.filter((element) =>
      element.firstName === `${obj.name}` || element.lastName === `${obj.name}`).map((element, index) => ({
      id: `${element.id}`,
      fullName: `${element.firstName} ${element.lastName}`,
      species: `${data.species.name.filter((element)=>{
         data.employees.responsibleFor.includes(element.id) 
      })}`,
      locations: 'x',
    }));
  }
}

module.exports = getEmployeesCoverage;
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage({ name: 'Spry' }));
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
const data = require('../data/zoo_data');

const getSpecieRespons = (obj) => {
  const safe = data.employees.filter((element, index) =>
    element.firstName );
  return safe;
};

console.log(getSpecieRespons());