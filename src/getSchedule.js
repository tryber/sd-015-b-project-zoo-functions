const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function avaliabilityByWeekday(day) {
  let officeHour;
  let exhibition;
  const closed = 'Monday';
  if (day === closed) {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else {
    const findAvaliability = (specie) => specie.availability.includes(day);
    const speciesAvaliable = species.filter(findAvaliability);
    officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    exhibition = speciesAvaliable.map((specie) => specie.name);
  }
  const infoFound = {
    officeHour,
    exhibition,
  };
  return infoFound;
}

function getSchedule(animalOrDay) {
  const weekdays = Object.keys(hours);
  const animals = species.map((specie) => specie.name);
  const animalsAndDays = weekdays.concat(animals);
  const infoList = {};
  if (!animalOrDay || !animalsAndDays.includes(animalOrDay)) {
    weekdays.forEach((weekday) => { infoList[weekday] = avaliabilityByWeekday(weekday); });
    return infoList;
  }
  if (weekdays.includes(animalOrDay)) {
    infoList[animalOrDay] = avaliabilityByWeekday(animalOrDay);
    return infoList;
  }
  if (animals.includes(animalOrDay)) {
    const findAnimal = (specie) => specie.name === animalOrDay;
    const foundAnimal = species.find(findAnimal).availability;
    return foundAnimal;
  }
}

module.exports = getSchedule;
