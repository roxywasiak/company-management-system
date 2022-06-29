// department
const showDepartmentChoices = (departmentsFromDB) => {
  // get the dept map them
  return departmentsFromDB.map((department) => {
    //return object key:value
    return {
      //key would be the name of dept and value is the id
      name: department.dept_name,
      value: department.id,
    };
  });
};

//repeat the same process

// role
const showRoleChoices = (rolesFromDB) => {
  return rolesFromDB.map((role) => {
    return {
      name: role.title,
      value: role.id,
    };
  });
};

//manager
const showManagerChoices = (managersFromDB) => {
  return managersFromDB.map((manager) => {
    return {
      name: manager.firstName + " " + manager.lastName,
      value: manager.id,
    };
  });
};

// employee
const showEmployeeChoices = (employeeFromDB) => {
  return employeeFromDB.map((employee) => {
    return {
      name: employee.firstName + " " + employee.lastName,
      value: employee.id,
    };
  });
};

// export the functions to index.js
module.exports = {
  showDepartmentChoices,
  showRoleChoices,
  showManagerChoices,
  showEmployeeChoices,
};
