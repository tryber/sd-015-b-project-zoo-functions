const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAgesEntrants = (nomes) => {
  const objeto = { child: 0, adult: 0, senior: 0 };
  const valueChild = nomes.filter((nome) => nome.age < 18).length;
  const valueAdult = nomes.filter((nome) => nome.age >= 18 && nome.age < 50).length;
  const valueSenior = nomes.filter((nome) => nome.age >= 50).length;

  nomes.forEach((nome) => {
    if (nome.age < 18) objeto.child = valueChild;
    if (nome.age >= 18 && nome.age < 50) objeto.adult = valueAdult;
    if (nome.age >= 50) objeto.senior = valueSenior;
    return objeto;
  });
  console.log(objeto);
  return objeto;
};

function countEntrants(entrants) {
  const ageGroup = getAgesEntrants(entrants);
  return ageGroup;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  } if (Object.values(entrants).length === 0) {
    return 0;
  }
  const ageGroupCount = countEntrants(entrants);
  const priceForAdult = prices.adult * ageGroupCount.adult;
  console.log(ageGroupCount.adult);
  const priceForChild = prices.child * ageGroupCount.child;
  const priceForSenior = prices.senior * ageGroupCount.senior;
  const sumeAll = priceForAdult + priceForChild + priceForSenior;

  return sumeAll;
}

module.exports = { calculateEntry, countEntrants };
