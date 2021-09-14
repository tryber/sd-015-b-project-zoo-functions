const { species } = require('../data/zoo_data');

function countAnimals() {
  return species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
}

console.log(countAnimals());
module.exports = countAnimals;
// species: {
//   id: string;
//   name: string;
//   popularity: number;
//   location: string;
//   availability: string[];
//   residents: {
//       name: string;
//       sex: string;
//       age: number;
//   }
