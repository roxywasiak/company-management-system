// questions will use inquirer
// options
const options = [
  {
    type: "list",
    message: "Please choose what you would like to do?",
    name: "chosenOption",
    choices: [
      "View  all departments",
      "View roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee",
      "Exit",
    ],
  },
];

// department questions
const infoForDepartment = [
  {
    type: "input",
    message: "Enter the Department name",
    name: "departmentName",
  },
];

// employee/role info
const infoForForEmployee = [
  {
    type: "input",
    message: "Enter first name",
    name: "firstName",
  },
  {
    type: "input",
    message: "Enter last name",
    name: "lastName",
  },
  {
    type: "input",
    message: "Enter role name",
    name: "roleName",
  },
];

module.exports = {
  options,
  infoForDepartment,
  infoForForEmployee,
};
