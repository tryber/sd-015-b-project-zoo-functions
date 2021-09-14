const data = require('../data/zoo_data');

function lista() {
  const array = [];
  const obj = data.employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    const species = responsibleFor.map((idAnimal) =>
      data.species.find((elemento) => elemento.id === idAnimal).name);

    const locations = responsibleFor.map((idAnimal) =>
      data.species.find((elemento) => elemento.id === idAnimal).location);

    array.push(acc = { id, fullName, species, locations });
    return array;
  }, ' ');
  return obj;
}

function getEmploye(objeto) {
  const { name = undefined, id: ident = undefined } = objeto;
  const empregado = data.employees.find(({ id, firstName, lastName }) =>
    firstName === name || lastName === name || id === ident);
  if (!empregado) throw new Error('Informações inválidas');
  const id = empregado.id;
  const fullName = `${empregado.firstName} ${empregado.lastName}`;
  const resp = empregado.responsibleFor;
  const species = resp.map((idAnimal) =>
    data.species.find((elemento) => elemento.id === idAnimal).name);
  const locations = resp.map((idAnimal) =>
    data.species.find((elemento) => elemento.id === idAnimal).location);
  const obj = { id, fullName, species, locations };
  return obj;
}

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return lista();
  }
  return getEmploye(objeto);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
