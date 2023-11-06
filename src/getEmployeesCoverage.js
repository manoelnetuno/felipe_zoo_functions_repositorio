const data = require('../data/zoo_data');

const getEmployeeInfo = (employeeInfo) => {
  const theEmployee = data.employees.find((employee) => employee.firstName === employeeInfo.name
  || employee.lastName === employeeInfo.name
  || employee.id === employeeInfo.id);

  if (typeof theEmployee === 'undefined') throw new Error('Informações inválidas');

  return theEmployee;
};

const getSpeciesName = (id) => data.species.find((specie) => specie.id === id).name;
const getSpeciesLocation = (id) => data.species.find((specie) => specie.id === id).location;

function getEmployee(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((idAnimal) => getSpeciesName(idAnimal)),
    locations: employee.responsibleFor.map((idAnimal) => getSpeciesLocation(idAnimal)),
  };
}

function getAllEmployees() {
  const employees = data.employees.reduce((allEmployees, employee) => {
    const formattedEmployee = getEmployee(employee);
    return [
      ...allEmployees,
      formattedEmployee,
    ];
  }, []);
  return employees;
}

const getEmployeesCoverage = (employeeInfo) => {
  // seu código aqui
  try {
    if (!employeeInfo) return getAllEmployees();
    const theEmployee = getEmployeeInfo(employeeInfo);
    return getEmployee(theEmployee);
  } catch (error) {
    throw error.message;
  }
};

module.exports = getEmployeesCoverage;
