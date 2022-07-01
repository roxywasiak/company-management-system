const inquirer = require("inquirer");
const { printTable } = require("console-table-printer");

const {
  showDepartmentChoices,
  showManagerChoices,
  showEmployeeChoices,
  showRoleChoices,
} = require("./utils/utils");

//get the db
const Db = require("./utils/db");
// get your questions
const questions = require("./utils/questions");
//store in new variable with host, user etc
const db = new Db({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "company_db",
});

//init or start function refer to activities week 11/12 remember to call it at the end of the functions
const init = async () => {
  //async /await
  await db.init();
  //set progress
  let inProgress = true;
  //go through the questions using inquirer prompt using if statements
  // questions/userChoice
  while (inProgress) {
    // add your queries into a variable which awaits the query from db
    //console log the table  eg employees
    const { userChoice } = await inquirer.prompt(questions);
    //go through your questions js file and follow this route using the if statements
    if (userChoice === "viewEmployee") {
      const employees = await db.query(`SELECT CONCAT(E.FIRST_NAME,' ',
      E.LAST_NAME) AS USER,
      R.SALARY, R.TITLE,
      D.ID,
     CONCAT( M.FIRST_NAME,' ',
      M.LAST_NAME) AS MANAGER
FROM EMPLOYEE AS E
 JOIN EMPLOYEE AS M 
 ON E.MANAGER_ID = M.ID INNER JOIN ROLE R ON E.ROLE_ID = R.ID LEFT JOIN DEPARTMENT D ON R.DEPARTMENT_ID = D.ID`);
      console.table(employees);
    }
    //add employees
    if (userChoice === "addEmployee") {
      //queries
      const role = await db.query("SELECT * FROM role");
      const employee = await db.query("SELECT * FROM employee");
      //questions
      const employeeQuestions = [
        {
          type: "input",
          message: "Please enter employee's first name:",
          name: "first_name",
        },
        {
          type: "input",
          message: "Please enter employee's last name:",
          name: "last_name",
        },
        {
          type: "list",
          message: "Please select a role:",
          name: "role_id",
          choices: showRoleChoices(role),
        },
        {
          type: "list",
          message: "Please select a Manager:",
          name: "manager_id",
          choices: showManagerChoices(employee),
        },
      ];

      const { role_id, first_name, last_name, manager_id } =
        await inquirer.prompt(employeeQuestions);

      await db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${first_name}", "${last_name}", ${role_id}, ${manager_id})`
      );
      console.log(`You have added ${first_name} ${last_name} to the system`);
    }

    //update employee
    if (userChoice === "updateEmployeeRole") {
      //queries
      const employee = await db.query("SELECT * FROM employee");
      const role = await db.query("SELECT * FROM role");
      //questions
      const updateEmployeeQuestions = [
        {
          type: "list",
          message: "Which employee would you like to update?",
          name: "id",
          choices: showEmployeeChoices(employee),
        },
        {
          type: "list",
          message:
            "What role would you like to assign to the selected employee?",
          name: "role_id",
          choices: showRoleChoices(role),
        },
      ];
      const { id, role_id } = await inquirer.prompt(updateEmployeeQuestions);

      await db.query(
        `UPDATE employee SET role_id = ${role_id} WHERE id = ${id}`
      );
      console.log(`Employee Role has been updated`);
    }
    //roles
    if (userChoice === "addRoles") {
      //departments
      const departments = await db.query(`
      SELECT * FROM department`);
      //questions
      const roleQuestions = [
        {
          type: "list",
          message: "Please select a department:",
          name: "department_id",
          choices: showDepartmentChoices(departments),
        },
        {
          type: "input",
          message: "Please enter role title:",
          name: "title",
        },
        {
          type: "input",
          message: "Please enter role salary:",
          name: "salary",
        },
      ];

      const { department_id, title, salary } = await inquirer.prompt(
        roleQuestions
      );
      //queries
      await db.query(
        `INSERT INTO role (title, salary, department_id) VALUES("${title}", ${salary}, ${department_id})`
      );
    }
    if (userChoice === "viewDepartments") {
      const departments = await db.query(`SELECT * FROM department`);
      console.table(departments);
    }
    //addDepartments
    if (userChoice === "addDepartment") {
      const departmentQuestions = [
        {
          type: "input",
          message: "Please enter the new department:",
          name: "newDepartment",
        },
      ];
      //queries
      const { newDepartment } = await inquirer.prompt(departmentQuestions);
      await db.query(
        `INSERT INTO department (name) VALUES("${newDepartment}")`
      );
      console.log(`You have added ${newDepartment} to the system`);
    }
    //exit
    if (userChoice === "exit") {
      //set progress false so it stops/exit
      inProgress = false;
      // process.exit()check suraj code
      process.exit(0);
    }
  }
};
//call the init function
init();
