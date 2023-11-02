const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find(
    (emp) => emp.firstName === employeeName || emp.lastName === employeeName,
  );

  return employee || {};
};

module.exports = getEmployeeByName;
