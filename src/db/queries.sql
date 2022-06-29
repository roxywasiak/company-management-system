USE company_db;

SELECT * FROM department;

SELECT * FROM employee;

SELECT * FROM role;

SELECT role.title, department.name, role.salary FROM role JOIN department ON role.department_id = department.id ORDER BY department.name;

SELECT CONCAT (emp.first_name, '' , emp.last_name) AS 'USER' , job.title, dept.name, job.salary,
 CONCAT (m.first_name, '' , m.last_name) AS MANAGER 
 FROM employee AS emp JOIN employee AS m ON emp.manager_id = m.id INNER JOIN role job ON role emp.role_id = job.id LEFT JOIN department ON job.department_id;

INSERT INTO employee (firstName, lastName, role_id, manager_id) VALUES("${firstName}", "${lastName}", ${role_id}, ${manager_id})


INSERT INTO role (title, salary, department_id) VALUES("${title}", ${salary}, ${department_id})


INSERT INTO department (name) VALUES("${newDepartment}")


UPDATE employee SET role_id = ${role_id} WHERE id = ${id}












