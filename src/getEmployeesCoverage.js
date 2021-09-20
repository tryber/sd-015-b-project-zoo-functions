const data = require('../data/zoo_data');

// consultei o repositorio do Richard Leal
// https://github.com/tryber/sd-015-b-project-zoo-functions/pull/109/commits/ec4525aad44efd9d257865fd0b63c4f48775c630
const Informacoes = data.employees.map((pessoa) => {
  const ObjetoDeInformacoes = {
    id: pessoa.id,
    fullName: `${pessoa.firstName} ${pessoa.lastName}`,
    species: pessoa.responsibleFor.map((IdAnimal) =>
      data.species.find((element) => element.id === IdAnimal).name),
    locations: pessoa.responsibleFor.map((IdAnimal) =>
      data.species.find((element) => element.id === IdAnimal).location),
  };
  return ObjetoDeInformacoes;
});

function getEmployeesCoverage(parametro = Informacoes) {
  const Check = Informacoes.find((element) =>
    element.fullName.includes(parametro.name) || element.id === parametro.id);
  if (parametro.name || parametro.id) {
    if (Check === undefined) {
      throw new Error('Informações inválidas');
    }
    return Check;
  }
  return parametro;
}
module.exports = getEmployeesCoverage;
