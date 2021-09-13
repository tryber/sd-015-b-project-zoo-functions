const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, idade) => {
    if (idade.age < 18) {
      return { ...acc, child: acc.child + 1 };
    // Aqui é feito um if caso passe, é add +1 ao value de child nesse
    //  exemplo.
    } if (idade.age < 50) {
      return { ...acc, adult: acc.adult + 1 };
    } if (idade.age >= 50) {
      return { ...acc, senior: acc.senior + 1 };
    }
    return { ...acc };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  //  acessado: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/calculateEntry.js
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
    //  ...
  }
  const numeroPessoas = countEntrants(entrants);
  return (prices.child * numeroPessoas.child)
    + (prices.adult * numeroPessoas.adult)
    + (prices.senior * numeroPessoas.senior);
}

module.exports = { calculateEntry, countEntrants };
