const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSenior = (entrantSenior) => {
  const seniors = entrantSenior.filter((senior) => senior.age >= 50);
  return seniors.length;
};

const getAdult = (entrantAdult) => {
  const adults = entrantAdult.filter(
    (adult) => adult.age >= 18 && adult.age < 50,
  );
  return adults.length;
};

const getChildren = (entrantChildren) => {
  const children = entrantChildren.filter((child) => child.age < 18);
  return children.length;
};

function countEntrants(entrantPerson) {
  return {
    child: getChildren(entrantPerson),
    adult: getAdult(entrantPerson),
    senior: getSenior(entrantPerson),
  };
}

function calculateEntry(personEntrant) {
  if (!personEntrant || Object.values(personEntrant).length === 0) {
    return 0;
  }
  const {
    child: children,
    adult: adults,
    senior: seniors,
  } = countEntrants(personEntrant);
  const { child, adult, senior } = prices;
  const result = children * child + adult * adults + seniors * senior;
  return result;
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
