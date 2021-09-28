const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const getAdultsEntrants = (adultsIn) => {
  const adults = adultsIn.filter((adult) => adult.age >= 18 && adult.age < 50);
  return adults.length;
};

const getSeniorsEntrants = (seniorsIn) => {
  const seniors = seniorsIn.filter((senior) => senior.age >= 50);
  return seniors.length;
};

const getChildsEntrants = (childsIn) => {
  const childs = childsIn.filter((child) => child.age < 18);
  return childs.length;
};
function countEntrants(entrants) {
  // seu código aqui
  return {
    adult: getAdultsEntrants(entrants),
    senior: getSeniorsEntrants(entrants),
    child: getChildsEntrants(entrants),
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (countEntrants(entrants) === 0) {
    return 0;
  }
  const individual = countEntrants(entrants);
  const adultValue = prices.child * individual.adult;
  const seniorValue = prices.adult * individual.senior;
  const childValue = prices.child * individual.child;

  return adultValue + seniorValue + childValue;
}

module.exports = { calculateEntry, countEntrants };
