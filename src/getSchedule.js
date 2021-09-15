const data = require('../data/zoo_data');

function setOfficeHour(dayValueObj, dayOfficeHour) {
  const valueObj = dayValueObj;
  if (dayOfficeHour.open === 0) {
    valueObj.officeHour = 'CLOSED';
  } else {
    valueObj.officeHour = `Open from ${dayOfficeHour.open}am until ${dayOfficeHour.close}pm`;
  }
}

function setSpeciesAvaliability(dayValueObj, day) {
  const valueObj = dayValueObj;
  const daySpeciesObj = data.species.filter((specie) => specie.availability.includes(day));
  const daySpeciesName = daySpeciesObj.map((specie) => specie.name);
  if (daySpeciesName.length) {
    valueObj.exhibition = daySpeciesName;
  } else {
    valueObj.exhibition = 'The zoo will be closed!';
  }
}

function checkIfHasParameter(param, speciesList, days, hours) {
  if (param && days.includes(param)) {
    const returnObj = {};
    const dayIndex = days.indexOf(param);
    const day = days[dayIndex];
    returnObj[day] = {};
    const dayValueObj = returnObj[day];
    setOfficeHour(dayValueObj, hours[dayIndex]);
    setSpeciesAvaliability(dayValueObj, day);
    return returnObj;
  }
  if (param && speciesList.includes(param)) {
    const specieIndex = speciesList.indexOf(param);
    const returnList = data.species[specieIndex].availability;
    return returnList;
  }
  return false;
}

function getSchedule(scheduleTarget) {
  const returnObj = {};
  const speciesList = data.species.map((specie) => specie.name);
  const days = Object.keys(data.hours);
  const hours = Object.values(data.hours);
  const hasParam = checkIfHasParameter(scheduleTarget, speciesList, days, hours);
  if (hasParam) return hasParam;
  for (let index = 0; index < days.length; index += 1) {
    const day = days[index];
    returnObj[day] = {};
    const dayValueObj = returnObj[day];
    const dayOfficeHour = hours[index];
    setOfficeHour(dayValueObj, dayOfficeHour);
    setSpeciesAvaliability(dayValueObj, day);
  }
  return returnObj;
}

module.exports = getSchedule;
