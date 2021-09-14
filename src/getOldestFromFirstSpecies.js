const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((ids) => ids.id === id)
    .responsibleFor[0];
  //  No inicio procuramos o id do funcionario com o id dado por parametro
  // e acessamos o primeiro elemento do array que mostra quais animais é de sua
  // responsabilidade.
  const olderAnimal = species.find((animal) => animal.id === firstAnimal).residents
    .reduce((acc, value) => {
      if (value.age > acc.age) {
        return value;
      }
      return acc;
    });
  //  Aqui encontramos o animal mais velho cuidado pelo funcionario,
  //  e fazemos a comparação pela idade, quando o valor do parametro é maior
  // que do acumulador retorna o animal, quando o acumular é maior retorna o animal
  // do acumulador.
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}
module.exports = getOldestFromFirstSpecies;
