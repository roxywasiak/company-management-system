const inquirer = require("inquirer");
const { printTable } = require("console-table-printer");

const {
  showDepartmentChoices,
  showRoleChoices,
  showManagerChoices,
  showEmployeeChoices,
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
      const employees = await db.query(
        `
             SELECT CONCAT (emp.first_name, '' , emp.last_name) AS 'USER' , job.title, dept.name, job.salary,
              CONCAT (m.first_name, '' , m.last_name) AS MANAGER 
              FROM employee AS emp JOIN employee AS m ON emp.manager_id = m.id INNER JOIN role job ON role emp.role_id = job.id LEFT JOIN department ON job.department_id;`
      );
      console.table(employees);
    }
    //add employees
    if (userChoice === "addEmployee") {
      const role = await db.query("SELECT * FROM role");
      const employee = await db.query("SELECT * FROM employee");
    }
  }
};

//questions
//queries

//update employees
//questions
//queries

//roles
//questions
//queries

//departments
//questions
//queries

//addDepartments
//queries

//exit
//set progress false so it stops/exit
// process.exit()check suraj code

//call the init function do not forget otherwise it doesn't work
