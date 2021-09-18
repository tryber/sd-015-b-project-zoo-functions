const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const acheiEle = employees.find((employee) => employee.id === id).responsibleFor[0];
  const bixinhos = species.find((bixo) => bixo.id === acheiEle).residents;
  const maior = bixinhos.map((bixo) => bixo.age).sort((a, b) => b - a)[0];
  const velho = bixinhos.find((oldest) => oldest.age === maior);
  return Object.values(velho);
}

module.exports = getOldestFromFirstSpecies;
