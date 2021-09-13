const data = require("../data/zoo_data");

function checkAge(age) {
  let period = "senior";
  if (age < 18) period = "child";
  if (age >= 18 && age < 50) period = "adult";
  return period;
}
function countEntrants(entrants) {
  // seu código aqui
  const analysis = entrants.reduce((acc, { age }) => {
    const period = checkAge(age);
    acc[period] = acc[period] || 0;
    acc[period] += 1;
    return acc;
  }, {});
  return analysis;
}

function calcTotal(totals) {
  const prices = data.prices;
  return Object.keys(totals).reduce((acc, age) => {
    const paid = totals[age];
    const price = prices[age];
    acc += paid * price;
    return acc;
  }, 0);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const entrantTotals = countEntrants(entrants);
  const result = calcTotal(entrantTotals);
  return result;
}

module.exports = { calculateEntry, countEntrants };
