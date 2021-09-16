const data = require('../data/zoo_data');

// {
//   Tuesday: { officeHour: 'Open from 8am until 6pm', exhibition: [] },
//   Wednesday: { officeHour: 'Open from 8am until 6pm', exhibition: [] },
//   Thursday: { officeHour: 'Open from 10am until 8pm', exhibition: [] },
//   Friday: { officeHour: 'Open from 10am until 8pm', exhibition: [] },
//   Saturday: { officeHour: 'Open from 8am until 10pm', exhibition: [] },
//   Sunday: { officeHour: 'Open from 8am until 8pm', exhibition: [] },
//   Monday: { officeHour: 'CLOSED', exhibition: [] }
// }

function addAvail(exhibitionList, currDay, exhibitionDays) {
  // console.log('exhibitionList', exhibitionList);
  // console.log('currDay', currDay);
  // console.log('exhibitionDays', exhibitionDays);
  exhibitionDays.forEach((animalDays) => {
    if (animalDays.availability.includes(currDay)) {
      exhibitionList.push(animalDays.name);
    }
  });
  // console.log('after exhibitionList', exhibitionList);
}

function loopExhibition(object, exhibitionDays) {
  const keys = Object.keys(object);
  const objectAvail = object;
  // console.log(objectAvail);
  for (let i = 0; i < keys.length; i += 1) {
    const exhibitionList = objectAvail[keys[i]].exhibition;
    const currDay = keys[i];
    if (currDay === 'Monday') {
      objectAvail[keys[i]].exhibition = 'The zoo will be closed!';
    } else {
      addAvail(exhibitionList, currDay, exhibitionDays);
    }
  }
}

function createAnimalAvail(object, days) {
  const exhibitionDays = data.species.map((animal) => ({
    name: animal.name,
    availability: animal.availability,
  }));
  // console.log('exhibitionDays', exhibitionDays);
  loopExhibition(object, exhibitionDays);
}

function addOfficeHours(object, days) {
  const keys = Object.keys(object);
  // console.log('keys:', keys);
  const objectHour = object;
  for (let i = 0; i < keys.length; i += 1) {
    const officeHour = data.hours[keys[i]];
    const { open, close } = officeHour;
    if (!open) {
      objectHour[keys[i]].officeHour = 'CLOSED';
    } else {
      objectHour[keys[i]].officeHour = `Open from ${open}am until ${close}pm`;
    }
  }
  // console.log(objectHour);
  createAnimalAvail(objectHour, days);
  // console.log(objectHour);
}

function addDaysKeys(days) {
  const returnObj = days.reduce((accum, currEl) => {
    const newAccum = accum;
    (newAccum[currEl] = {
      officeHour: '',
      exhibition: [],
    });
    return newAccum;
  }, {});
  addOfficeHours(returnObj, days);
  return returnObj;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(data.hours);
  const animals = data.species.map((element) => element.name);
  // console.log(animals);
  const returnObj = addDaysKeys(days);
  if (days.includes(scheduleTarget)) {
    const filteredObj = { [scheduleTarget]: returnObj[scheduleTarget] };
    return filteredObj;
  }
  if (animals.includes(scheduleTarget)) {
    const animalDays = data.species.filter((a) => a.name === scheduleTarget)[0].availability;
    return animalDays;
  }
  return returnObj;
}

module.exports = getSchedule;
