const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const entrantQuantity = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach(({ age }) => {
    if (age < 18) entrantQuantity.child += 1;

    else if (age >= 18 && age < 50) entrantQuantity.adult += 1;

    else entrantQuantity.senior += 1;
  });

  return entrantQuantity;
}

const iterateZooData = ({ child, adult, senior }) => {
  const { child: childP, adult: adultP, senior: seniorP } = data.prices;

  const total = (child * childP) + (adult * adultP) + (senior * seniorP);

  return total;
};

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const entrantQuantity = countEntrants(entrants);

  return iterateZooData(entrantQuantity);
}

module.exports = { calculateEntry, countEntrants };
