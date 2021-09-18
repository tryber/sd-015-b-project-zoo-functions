const data = require('../data/zoo_data');

const objeto = {};
const getAgesEntrants = (nomes) => {
  const valueChild = nomes.filter((nome) => nome.age < 18).length;
  const valueAdult = nomes.filter((nome) => nome.age >= 18 && nome.age < 50).length;
  const valueSenior = nomes.filter((nome) => nome.age >= 50).length;

  nomes.forEach((nome) => {
    if (nome.age < 18) objeto.child = valueChild;
    if (nome.age >= 18 && nome.age < 50) objeto.adult = valueAdult;
    if (nome.age >= 50) objeto.senior = valueSenior;
    return objeto;
  });
  return objeto;
};

// console.log(getAgesEntrants(peoĺeEntrent));

function countEntrants(entrants) {
  const ageGroup = getAgesEntrants(entrants);
  return ageGroup;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
// console.log(countEntrants(peoĺeEntrent));
