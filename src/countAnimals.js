const data = require('../data/zoo_data');

function countAnimals(animals) {
  // seu código aqui
  if (animals) {
    const { specie, sex } = animals;
    const acessSpecie = data.species
      .find((elemento) => elemento.name.toLocaleLowerCase() === specie.toLocaleLowerCase());
    let acessResidents = acessSpecie.residents;
    if (sex) {
      acessResidents = acessResidents
        .filter((item) => item.sex.toLocaleLowerCase() === sex.toLocaleLowerCase());
    } return acessResidents.length;
  }
  const newObject = {};
  data.species.forEach((elemento) => {
    const nameOfAnimal = elemento.name;
    const residentesAnimal = elemento.residents.length;
    newObject[`${nameOfAnimal}`] = residentesAnimal; // referência : https://github.com/tryber/sd-015-b-project-zoo-functions/pull/81/commits/1306e10a84a7ae8f00b21eeb85c47e0cd763eaab
  });
  return newObject;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
