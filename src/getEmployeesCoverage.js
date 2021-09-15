const data = require('../data/zoo_data');

const { employees, species } = data;

const getAnimal = (...ids) => {
  const idsAnimais = [];
  const nomesAnimais = [];
  const capturaIds = ids.forEach((id) => { // Captura id de cada animal que a pessoa é responsável, e joga no idsAnimais
    idsAnimais.push(id);
  });
  // idsAnimais.map((id) => {
  //   console.log("Teste");
  //   // return Teste;
  // });

  return idsAnimais;
};

const noData = () => {
  const funcMap = employees.map((employee) => {
    const idsAnimais = employee.responsibleFor;
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      // species: `Tratar Id dos animais capturar o objeto retornado, e salvar seu nome`, // getAnimal(idsAnimais);
      species: getAnimal(idsAnimais), // Array com o nome dos
      // locations: `Tratar o objeto retornado e mostrar sua localização`, // getLocation();
      locations: '0', // getLocation();
    };
  });
  // console.log(employees);
  const allData = (funcMap);
  return allData;
};
// console.log(noData());

function getEmployeesCoverage(peopleId) {
  // seu código aqui
  if (!peopleId) return noData();
}
// console.log(getEmployeesCoverage(''));

module.exports = getEmployeesCoverage;
