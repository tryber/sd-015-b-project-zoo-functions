const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // employees  -  id funionario - responsibleFor[0] é o primeiro animal
  // ai tem que ver qual o mais velho desses
  const empregado = employees.find((employee) => employee.id === id);
  const animal = empregado.responsibleFor[0];
  const primeiraEspecie = species.find((name) => name.id === animal);
  let maisvelho = 0;
  let residenteIdoso = [];
  primeiraEspecie.residents.forEach((residente) => {
    if (residente.age > maisvelho) {
      maisvelho = residente.age;
      residenteIdoso = [];
      residenteIdoso.push(residente.name);
      residenteIdoso.push(residente.sex);
      residenteIdoso.push(residente.age);
    }
  });
  return residenteIdoso;
}

module.exports = getOldestFromFirstSpecies;
