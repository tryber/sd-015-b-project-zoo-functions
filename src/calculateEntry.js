const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui retorno
  const result = entrants.reduce((acc, { age }) => {
    if (age < 18) acc.child += 1;
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return result;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  const tamanho = Object.entries(entrants).length;
  if (!entrants || tamanho === 0) return 0;
  const quantity = countEntrants(entrants);
  const { child: crianca, adult: adulto, senior: idoso } = quantity;
  const { child, adult, senior } = data.prices;
  const childs = crianca * child;
  const adults = adulto * adult;
  const seniors = idoso * senior;

  return (childs + adults + seniors);
}

module.exports = { calculateEntry, countEntrants };
