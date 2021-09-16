const data = require('../data/zoo_data');

function countAnimals(...animal) {
  // seu código aqui
  const [anm] = animal;

  if (animal.length === 0) {
    return data.species.reduce((acc, spec) => {
      acc[spec.name] = spec.residents.length;

      return acc;
    }, {});
  }
  if ((anm.sex === undefined)) {
    return data.species.filter((spc) => spc.name === anm.specie)[0].residents.length;
  }

  return data.species
    .filter((spc) => spc.name === anm.specie)[0]
    .residents.filter((spcAnm) => spcAnm.sex === anm.sex).length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
