const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {

  const list = {adult: 0, child: 0, senior: 0};
  entrants.forEach(client => {
    if (client.age < 18) list.child += 1;
    if ((client.age >= 18) && (client.age < 50)) list.adult += 1;
    if (client.age >= 50) list.senior += 1; 
  });
  return list;
}

function calculateEntry(entrants) {

  let price = 0;
  if ((entrants === undefined) || (Object.entries(entrants).length === 0)) return price;
  const entrantsList = countEntrants(entrants);
  const {child} = prices;
  const {adult} = prices;
  const {senior} = prices;
  price += entrantsList.child * child;
  price += entrantsList.adult * adult;
  price += entrantsList.senior * senior;
  return price; 
}

module.exports = { calculateEntry, countEntrants };
