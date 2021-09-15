const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let result = 0;
  result = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return result;
};

const calculateEntry = (entrants) => {
  let result = 0;
  const validateEntrants = entrants !== undefined && entrants[0] !== undefined;
  if (validateEntrants) {
    const {child, adult, senior} = countEntrants(entrants);

    const sumEntrants = {
      amountChild: child * data.prices.child,
      amountAdult: adult * data.prices.adult,
      amountSenior: senior * data.prices.senior,
    }

    result = sumEntrants.amountChild + sumEntrants.amountAdult + sumEntrants.amountSenior;
  }
  return result;
}

module.exports = { calculateEntry, countEntrants };
