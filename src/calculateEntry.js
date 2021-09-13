const data = require('../data/zoo_data');

const classificacao = (person, obj) => {
  const result = obj;
  person.forEach((age) => {
    if (age.age < 18) {
      result.child += 1;
    } else if (age.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
};

function countEntrants(entrants) {
  // seu código aqui
  const result = { child: 0, adult: 0, senior: 0 };
  if (entrants && Array.isArray(entrants)) {
    return classificacao(entrants, result);
  }
  return 0;
}

function calculateEntry(entrants) {
  // seu código aqui
  const classe = countEntrants(entrants);
  return Object.keys(classe).reduce((acc, value) => acc + classe[value] * data.prices[value], 0);
}

module.exports = { calculateEntry, countEntrants };
