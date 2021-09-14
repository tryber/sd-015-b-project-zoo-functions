const data = require('../data/zoo_data');

// {
//   Tuesday: { officeHour: 'Open from 8am until 6pm' },
//   Wednesday: { officeHour: 'Open from 8am until 6pm' },
//   Thursday: { officeHour: 'Open from 10am until 8pm' },
//   Friday: { officeHour: 'Open from 10am until 8pm' },
//   Saturday: { officeHour: 'Open from 8am until 10pm' },
//   Sunday: { officeHour: 'Open from 8am until 8pm' },
//   Monday: { officeHour: 'CLOSED' }
// }

function addAvail(object, day, exhibitionDays) {
  const keys = Object.keys(object);
  const objectAvail = object;
  for (let i = 0; i < keys.length; i += 1) {
    console.log(objectAvail[keys[i]]);
  }
}

function createAnimalAvail(object, days) {
  const exhibitionDays = data.species.map((animal) => ({
    name: animal.name,
    availability: animal.availability,
  }));
  // console.log(exhibitionDays);
  addAvail(object, days, exhibitionDays);
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
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(data.hours);
  if (!scheduleTarget || !days.includes(scheduleTarget)) {
    addDaysKeys(days);
  }
}
getSchedule();

module.exports = getSchedule;
