const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalNames = () => {
  const exp = [];
  species.forEach((specie) => {
    exp.push(specie.name);
  });
  return exp;
};

function officeHour(param) {
  const result = [...Object.values(hours[param])];
  if (param === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${result[0]}am until ${result[1]}pm`;
}

function animalAvaliabilities(param) {
  const result = species.find((specie) => specie.name === param);
  return result.availability;
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

function withDate(param) {
  const obj = {};
  Object.keys(hours).forEach((key) => {
    if (key === param) {
      obj[param] = {
        officeHour: officeHour(param),
        exhibition: exhibition(param),
      };
    }
  });
  return obj;
}

function helloWorld(param) {
  const days = Object.keys(hours);
  const animals = animalNames();
  if (days.includes(param)) {
    return withDate(param);
  }
  if (animals.includes(param)) {
    return animalAvaliabilities(param);
  }
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const animals = animalNames();
  if (!scheduleTarget || (!days.includes(scheduleTarget) && !animals.includes(scheduleTarget))) {
    return withoutParam();
  }
  return helloWorld(scheduleTarget);
}
module.exports = getSchedule;
console.log(getSchedule('lions'));
