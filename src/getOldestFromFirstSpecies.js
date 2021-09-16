const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployeeById = (receivedId) => employees.find((employee) => employee.id === receivedId);
const getFirstSpecieWhichIsResponsible = (foundedEmployee) => species.find((specie) => {
  if (!foundedEmployee) throw new Error('Pessoa cuidadora de animais não encontrada.');
  return foundedEmployee.responsibleFor.includes(specie.id);
});

function getOldestFromFirstSpecies(id) {
  const foundedEmployee = getEmployeeById(id);
  const firstSpecie = getFirstSpecieWhichIsResponsible(foundedEmployee);
  /**
   * Consultei a Requisição para puxar (pull request) do colega Lucas Peres
   * em https://github.com/tryber/sd-015-b-project-zoo-functions/pull/117/commits/35b04ae8048f65020a981c14a0d1331707fac826
   * para entender que usar a HOF Array.prototype.reduce seria mais adequado que a .find com a qual eu estava
   * tentando resolver a questão (linhas 22 a 27 abaixo).
   * Fiz isso porque o lint estava apontando que eu precisava retornar um valor de uma função flecha e eu
   * não tinha conseguido entender como resolver isso.
   */
  const oldest = firstSpecie.residents.reduce((currentOldest, candidateOldest) => {
    if (candidateOldest.age > currentOldest.age) {
      return candidateOldest;
    }
    return currentOldest;
  });
  return Object.values(oldest);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
