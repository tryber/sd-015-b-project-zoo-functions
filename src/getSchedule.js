const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function exhibition(day) {
  return species.filter((specie) => specie.availability.includes(day)).map(({ name }) => name);
  // peguei a função do Leandro, pq ela já filtra e organiza de acordo com o nome.
}

function mostrarHoras() {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const horaDia = {}; // tem que começar com o obj vazio
  days.forEach((day) => { // pesquisa por cada dia
    const { open } = data.hours[day]; // pega pela chava da hora que abre
    const { close } = data.hours[day]; // pega a hora que fecha
    horaDia[day] = {};
    if (open === 0 || close === 0) { // trata a exceção do dia que não abre
      horaDia[day].officeHour = 'CLOSED';
      horaDia[day].exhibition = 'The zoo will be closed!'; // aviso conforme aquivo de teste!
    } else {
      horaDia[day].officeHour = `Open from ${open}am until ${close}pm`;
      // dá o resultado dia a dia, com os horários de abertura e fechamento
      horaDia[day].exhibition = exhibition(day);
      // mostra os bichos em exibição pelos dias
    }
  });
  return horaDia;
  // retorna todos os horarios de todos os dias
}

function agendaDia(dia) {
  const todosDias = mostrarHoras(); // chama a funcao de cima qdo executada sem parametro, pq ela traz todos os dias e horarios
  const doDia = {}; // abre um obj vazio
  doDia[dia] = todosDias[dia]; // popula o obj de acordo com o dia, pra não ter que retornar o cronograma completo o tempo todo.
  return doDia;
}

function agendaAnimal(bicho) {
  return data.species.find((specie) => specie.name.includes(bicho)).availability;
  // só pra pegar o bicho e retornar a disponibilidade dele, ou seja, qual dia(s) ele estará em exebição.
}

function getSchedule(scheduleTarget) { // aqui filtra os resultados, por isso usa as funções de cima aqui.
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const bichos = species.map(({ name }) => name);
  if (days.includes(scheduleTarget)) return agendaDia(scheduleTarget); // qdo pesquisa por dia
  if (bichos.includes(scheduleTarget)) return agendaAnimal(scheduleTarget); // qdo pesquisa por bicho
  return mostrarHoras(); // qdo a pesquisa é vazia e tem que retornar TUDÃO
}

module.exports = getSchedule;
