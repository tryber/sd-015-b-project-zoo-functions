const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return Object.values(
    species
      .filter(
        (propriedade) =>
          propriedade.id
          === employees.find((animal) => animal.id === id)
            .responsibleFor[0],
      )[0]
      .residents.reduce((comparador, comparado) =>
        (comparador.age < comparado.age ? comparado : comparador)),
  );
}

module.exports = getOldestFromFirstSpecies;
