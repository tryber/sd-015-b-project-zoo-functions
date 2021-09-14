const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const objEmpty = species.reduce((acc, current) => {
//   const currentSpecieName = current.name;
//   const currentSpecieLength = current.residents.length;
//   const tempObj = { [currentSpecieName]: currentSpecieLength };
//   return Object.assign(acc, tempObj);
// }, {});
function objEmpty() {
  const obj = {};
  species.forEach(({ name, residents }) => {
    obj[name] = residents.length;
  });
  return obj;
}
// const specie2 = (animal) => species.find((specie) => specie.name === animal.specie).residents
// .filter((resident) => animal.gender === resident.sex);

// const specie1 = (animal) => species.find((specie) => specie.name === animal.specie);

function specie3(animal) {
  const specie1 = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.gender) {
    return specie1.filter((resident) => animal.gender === resident.sex).length;
  }
  return specie1.length;
}

function countAnimals(animal) {
  if (!animal) {
    return objEmpty();
  }
  return specie3(animal);
  // return animal.gender
  //   ? specie2(animal).length
  //   : specie1(animal).residents.length;
}

// console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));
module.exports = countAnimals;
