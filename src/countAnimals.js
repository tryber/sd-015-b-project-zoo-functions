const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function contadorPorGenero(animal, gender) {
  let count = 0;
  animal.forEach(({ sex } = animal) => {
    if (sex === gender) {
      count += 1;
    }
  });
  return count;
}

function contadorPorEspecie(animal) {
  const filtroDeEspecie = species.find(({ name } = species) => name === animal.specie);

  if (Object.keys(animal).length === 1) {
    return filtroDeEspecie.residents.length;
  }
  return contadorPorGenero(filtroDeEspecie.residents, animal.sex);
}

function contadorTodosAnnimais() {
  const todasEspecies = {};
  species.forEach(({ name, residents } = species) => {
    todasEspecies[name] = residents.length;
  });
  return todasEspecies;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return contadorTodosAnnimais();
  }
  return contadorPorEspecie(animal);
}
module.exports = countAnimals;
