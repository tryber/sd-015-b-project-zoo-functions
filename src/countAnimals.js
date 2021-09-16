const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((obj, specie) =>
      ({ ...obj, [specie.name]: specie.residents.length }), {});
  }
  let gender = false;
  if (Object.keys(animal).includes('gender')) gender = animal.gender;
  const find = data.species.find((specie) => specie.name === animal.specie);
  const filter = find.residents.filter((resident) => {
    if (gender) return resident.sex === gender;
    return resident;
  });
  return filter.length;
}

module.exports = countAnimals;
console.log(countAnimals({ specie: 'penguins' }));
