USE company_db;
--Department

SELECT * FROM department;

-- employee

SELECT * FROM employee;

-- role

SELECT * FROM role;

--  all the roles 

SELECT role.title, department.name, role.salary FROM role JOIN department ON role.department_id = department.id ORDER BY department.name;


-- all employees
SELECT CONCAT (emp.first_name, '' , emp.last_name) AS 'USER' , job.title, dept.name, job.salary,
 CONCAT (m.first_name, '' , m.last_name) AS MANAGER 
 FROM employee AS emp JOIN employee AS m ON emp.manager_id = m.id INNER JOIN role job ON role emp.role_id = job.id LEFT JOIN department ON job.department_id;






