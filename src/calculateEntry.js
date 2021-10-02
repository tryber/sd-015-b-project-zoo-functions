const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const totalPeoples = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) totalPeoples.child += 1;
    if (age >= 18 && age < 50) totalPeoples.adult += 1;
    if (age >= 50) totalPeoples.senior += 1;
  });
  return totalPeoples;
}

function calculateEntry(entrants) {
  // seu código aqui
  let amountValue = 0;
  // Retorna 0 se nenhum argumento for passado. Retorna 0 se um objeto vazio for passado;
  if (!entrants || !entrants[0]) {
    return amountValue;
  }
  const amount = countEntrants(entrants);
  const priceTotalChild = amount.child * prices.child;
  const priceTtoalAdult = amount.adult * prices.adult;
  const priceTtoalSenior = amount.senior * prices.senior;
  const total = priceTotalChild + priceTtoalAdult + priceTtoalSenior;
  amountValue += total;
  return amountValue;
}

module.exports = { calculateEntry, countEntrants };
