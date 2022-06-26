USE company_db;

INSERT INTO department (name)
VALUES ('Web Development'),('Finance'), ('Human Resources'), ('Sales'), ('Marketing'), ('operations');

-- role
INSERT INTO role (title, salary, department_id) VALUES 
('Technician', 50000.00, 1),
('Senior Developer', 80000.00, 1),
('Finance Analyst', 90000.00, 2),
('Finance Administrator', 38000.00, 2),
('HR Partner', 23000.00, 3),
('HR Administrator', 50000.00, 3),
('Sales Agent', 50000.00, 4),
('Sales Specialist', 60000.00, 4),
('Marketing executive', 40000.00, 5),
('Marketing Analyst', 70000.00, 5),
('Operations Manager', 40000.00, 6),
('Operations Assistant', 30000.00, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Roxy', 'Wasiak', 1, NULL),
('Chris', 'Cornell', 2 , 1),
('Elvis', 'Presley', 3 , 2),
('Mick', 'Jagger', 5, NULL),
('Robert', 'Plant', 4, 3),
('Lee', 'Perry', 3, 3),
('Augustus', 'Pablo', 6, 5),
('Alice', 'Cooper', 8, 5),
('Bob', 'Dyaln', 2, 5),
('Axel', 'Rose', 9, 5),
('Jimmy', 'Page', 3, 3),
('Jim', 'Morrison', 8, 6),
('David', 'Bowie', 7, 6),
('Kurt', 'Cobain', 2, 5),
('Jimi', 'Hnedrix', 1, 5),
('Little', 'Richard', 9, 5),
('Eddie', 'Vedder', 9, 5),
('Freddie', 'Mercury', 4, 5),
('Frank', 'Zappa', 3, 3),
('Stevie', 'Nicks', 4, 5),
('John', 'Lennon', 4, 3);
