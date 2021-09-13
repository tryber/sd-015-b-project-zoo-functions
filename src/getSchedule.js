const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // const objeto = {};
  // const objeto2 = {};
  // const dias = Object.keys(data.hours);
  // dias.reduce((acc, day) => {
  //   acc[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
  //   acc.Monday = 'CLOSED';
  // return objeto1; }, {});
  // if (!scheduleTarget){
  //   for (let i = 0; i < dias.length; i += 1) {
  //     if (dias[i] !== 'Monday') {
  //       objeto[dias[i]] = () => {}
  //       const especieAnimal = data.species.filter(({availability}) =>
  //       availability.includes(dias[i])).map(({name}) => name);
  //       console.log(especieAnimal);
  //       console.log(objeto);
  //     };
  //   };
  // };
}
getSchedule();
module.exports = getSchedule;
