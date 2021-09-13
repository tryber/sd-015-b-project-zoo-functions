const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let result = false
  species.forEach((specie) => {
    if (specie.name === animal) { // Se o nome da espécie for igual ao chamado na função
      // Compare se todos os objetos dentro do array possuem idade >= age
      specie.residents.filter( (resident) => {
        // console.log(resident.age); // [DEBUG]
        // console.log(resident.age >= age); // [DEBUG]
        result = resident.age >= age;
        return result; // result = Retorno da expressão (resident.age >= age)
      });
      // console.log(specie.name); // [DEBUG]
      // console.log(specie.residents); // [DEBUG]
    }
    return false; // Se o condicional acima for false, ele retorna false automaticamente
  });
  return result; // Retorna o resultado para quem chamou a função
}
getAnimalsOlderThan('lions', 3);
console.log(getAnimalsOlderThan('lions', 3)); // [DEBUG] Todos os animais sao mais velhos que 3? True : False

module.exports = getAnimalsOlderThan;

// LÓGICA DO DESENVOLVIMENTO:
// ** Receber na função, o nome de um Animal e uma idade mínima
// ** Verificar se todos os animais daquela espécie {residents} possuem, no mínimo, aquela idade {redisend.age}
// ** if (resident.age > age) // Se a idade do resident é maior ou igual que a passada por parâmetro
// ** Retornar True
// ** Se não, retornar false (Fora do laço if)
