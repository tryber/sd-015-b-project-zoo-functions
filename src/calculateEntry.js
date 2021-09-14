const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objAmount = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach(({ age }) => {
    if (age < 18) objAmount.child += 1;

    else if (age >= 18 && age < 50) objAmount.adult += 1;

    else objAmount.senior += 1;
  });

  return objAmount;
}

const { prices } = data;

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const counts = countEntrants(entrants);

  const { child: childPrice, adult: adultPrice, senior: seniorPrice } = counts;
  const { child, adult, senior } = prices;

  const result = ((child * childPrice) + (adult * adultPrice) + (senior * seniorPrice));

  return result;
}

module.exports = { calculateEntry, countEntrants };
