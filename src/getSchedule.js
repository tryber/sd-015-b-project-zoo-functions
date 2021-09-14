const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function officeHour(param) {
  const result = [...Object.values(hours[param])];
  if (param === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${result[0]}am until ${result[1]}pm`;
}

function exhibition(param) {
  if (param === 'Monday') {
    return 'The zoo will be closed!';
  }
  const exhibitionResult = [];
  species.forEach((specie) => {
    if (specie.availability.includes(param)) {
      exhibitionResult.push(specie.name);
    }
  });
  return exhibitionResult;
}

function withoutParam() {
  const newObj = {};
  Object.keys(hours).forEach((key) => {
    newObj[key] = {
      officeHour: officeHour(key),
      exhibition: exhibition(key),
    };
  });
  return newObj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
console.log(withoutParam());
