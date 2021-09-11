const data = require("../data/zoo_data");

function countEntrants(entrants) {
  // seu código aqui
  const analysis = entrants.reduce(
    (acc, { age }) => {
      console.log(acc);
      if (age < 18) {
        acc.child += 1;
      } else if (age >= 18 && age < 50) {
        acc.adult += 1;
      } else {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 }
  );
  return analysis;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const entrantTotals = countEntrants(entrants);
  const prices = data.prices;

  const result = Object.keys(entrantTotals).reduce((acc, age) => {
    const paid = entrantTotals[age];
    const price = prices[age];
    acc += paid * price;
    return acc
  }, 0); 
 
  return result;
}

module.exports = { calculateEntry, countEntrants };
