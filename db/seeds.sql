INSERT INTO departments(department_name)
VALUES 
('Starter'),
 ('Bench'), 
 ('Free Agent'), 
 ('Goats');

INSERT INTO role (title, department_id, salary)
VALUES
('Point Guard', 1, 100000), 
('Small Forward', 1, 100000), 
('Center', 1, 100000), 
('Power Forward', 1, 100000),
('Shooting Guard', 1, 100000),
('6th Man', 2, 80000),
('Unsigned', 3, 0),
('Wanna be like Mike', 4, 10000000000000000000);

INSERT INTO employee(first_name, last_name, role_id, manager_id, salary)
VALUES 
('Steph', 'Curry', 1, NULL, 800008),
('Kevin', 'Durant', 1, 1, 124134),
('Shaquille', 'ONeill', 1, 2, 83493),
('Dirk', 'Nowitzki', 1, 3, 1234124),
('Allen', 'Iverson', 1, 4, 125631),
('Tyler', 'Hero', 2, NULL, 124513),
('Kawhi', 'Leonard', 3, 5, 8214354),
('Michael', 'Jordan', 4, NULL, 14351322),
('Kobe', 'Bryant', 4, NULL, 110000);

