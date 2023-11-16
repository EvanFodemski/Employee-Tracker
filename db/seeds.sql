INSERT INTO departments(department_name)
VALUES 
('Starter'),
 ('Bench'), 
 ('Free Agent'), 
 ('Goats');

INSERT INTO role (title, department_id, salary)
VALUES
('Point Guard', 1, 1106000), 
('Small Forward', 1, 1007000), 
('Center', 1, 1000600), 
('Power Forward', 1, 10007600),
('Shooting Guard', 1, 10540000),
('6th Man', 2, 80000),
('Unsigned', 3, 5),
('Wanna be like Mike', 4, 10000000000000000000);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Steph', 'Curry', 1, NULL),
('Kevin', 'Durant', 2, 1),
('Shaquille', 'ONeill', 3, 2),
('Dirk', 'Nowitzki', 4, 3),
('Allen', 'Iverson', 5, 4),
('Tyler', 'Hero', 6, NULL),
('Kawhi', 'Leonard', 7, 5),
('Michael', 'Jordan', 8, NULL),
('Kobe', 'Bryant', 8, NULL);

