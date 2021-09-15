const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//function countEntrants(entrants) {
  // seu código aqui
//}
const countEntrants = (entrants) => {
if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const entries = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return entries;  
}

function calculateEntry(entrants) {
  // seu código aqui
 const checkedEntries = countEntrants(entrants);
 if (checkedEntries === 0) return 0;
 
 const totalChilds = checkedEntries.child * prices.child;
 const totalAdults = checkedEntries.adult * prices.adult;
 const totalSeniors = checkedEntries.senior * prices.senior;

 return totalChilds + totalAdults + totalSeniors;
}

module.exports = { calculateEntry, countEntrants };
