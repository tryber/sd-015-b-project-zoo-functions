// Foi necessário corrigir um erro no teste.
// Enquanto o teste espera por species.residents.gender,
// no arquivo zoo_data.js há species.residents.sex

const { species } = require('../data/zoo_data');

function isEmpty() {
  const allSpeciesObj = {};
  species.forEach((_species) => { allSpeciesObj[_species.name] = _species.residents.length; });
  return allSpeciesObj;
}

function includesSex(selectedSpecies, animal) {
  return selectedSpecies.residents.filter((_animal) => _animal.sex === animal.sex).length;
}

function countAnimals(animal) {
  if (!animal) { return isEmpty(); }
  const selectedSpecies = species.find((_species) => _species.name === animal.specie);
  if (animal.sex) { return includesSex(selectedSpecies, animal); }
  return selectedSpecies.residents.length;
}

module.exports = countAnimals;
