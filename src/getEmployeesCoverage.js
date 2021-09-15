const data = require('../data/zoo_data');

const { employees, species } = data;

function createJob(employee) {
  const createObj = employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {

    const name = `${firstName} ${lastName}`;
    const nomeId = 'id';
    const obj = {
      [nomeId]: id,
      fullName: name,
      species: responsibleFor,
      locations: '',
    };
    acc.push(obj);
    return acc;
  }, []);
  return createObj;
}
console.log(createJob('ta'));

// function getEmployeesCoverage(employee) {
//   if (employee === undefined) {
//     return 'n tem param';
//   }
// }

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

// module.exports = getEmployeesCoverage;
