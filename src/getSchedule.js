const data = require('../data/zoo_data');

const { species, hours } = data;
const closedMessage = `'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!'`;

const days = Object.keys(hours);
const allSpecies = species.map( (specie) => {
  // allspecies.push(specie.name);
  return specie.name;
})
// console.log(allSpecies);

function argNull() {

  const dataObj = {};
  
  days.forEach((day) => {
    const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const animaisExibicao = species
    .filter( (animal) => animal.availability
    .includes(day))
    .map((day) => day.name);
    if (day === 'Monday') {
      dataObj[day] = `{ ${closedMessage} }`;
    } else {
      dataObj[day] = `{ 'exhibition': '[ ${animaisExibicao.join(`, `)}, 'officeHour': '${messageOffice}' ]'}`;
    }
  });
  return dataObj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  let objetoRetorno = {};
  const dayFound = days.includes(scheduleTarget); // Verifica se argumento passado é um Dia
  const animalFound = allSpecies.includes(scheduleTarget); // Verifica se argumento passado é um Animal

  if (!dayFound && !animalFound) return argNull(); // FUNÇÃO OK

  if (dayFound || animalFound) { // Se foi encontrado um dia, ou um animal...
    
    if (dayFound) { // Se for um dia, execute isto!

      days.find( (day) => {
        if (day === scheduleTarget) {
          // console.log(`O dia: ${day} é igual ao dia passado: ${scheduleTarget}`); // Verificação
          const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
          const animaisExibicao = species //Verifica as espécies
          .filter( (animal) => animal.availability // Verifica se o animal está disponível naquele dia
          .includes(day)) // Para isso, verifica se o dia passado no scheduleTarget está localizado no specie.avaliability 
          .map((day) => day.name);
          if (day === 'Monday') {
            objetoRetorno[day] = `{ ${closedMessage} }`;
            } else {
              objetoRetorno[day] = `{ 'exhibition': '[ ${animaisExibicao.join(`, `)} ]', 'officeHour': '${messageOffice}'}`;
            }
          // return objetoRetorno;
        }
        // return objetoRetorno;
      });
    }
    if (animalFound) { // Se for um animal, execute isto!
      // console.log("ANIMAL ENCONTRADO!!!");
      species.find( (specie) => {
        // console.log("Pesquisando Especies...");
        // console.log(specie.name);
        // console.log(scheduleTarget);
        if (specie.name === scheduleTarget) {
          // console.log("TESTE CONSOLE!!! [animalFound]");
          objetoRetorno = specie.availability;
          return objetoRetorno;
        }
      });
      // return objetoRetorno;
    }
  }
  return objetoRetorno;
}

// console.log(getSchedule('Thursday')); // Elemento Dia

module.exports = getSchedule;
