INSERT INTO departments(department_name)
VALUES 
('Starter'),
 ('Bench'), 
 ('Free Agent'), 
 ('Goats');

INSERT INTO role (job_title, department_id, salary)
VALUES
('Point Guard', 1, 100000), 
('Small Forward', 1, 100000), 
('Center', 1, 100000), 
('Power Forward', 1, 100000),
('Shooting Guard', 1, 100000),
('6th Man', 2, 80000),
('Unsigned', 3, 0),
('Wanna be like Mike', 4, 10000000000000000000);

INSERT INTO employee(employee_id, first_name, last_name, job_title, departments, salaries, managers)
VALUES 
(1, 'Steph', 'Curry', 'Point Guard', 'Starter', 48070000, 'Steve Kurr'),
(2,'Kevin', 'Durant', 'Small Forward', 'Starter', 42970000, 'Frank Vogel'),
(3, 'Shaquille', 'Oneill', 'Center', 'Starter', 27690000, 'Phil Jackson'),
(4, 'Dirk', 'Nowitzki', 'Power Forward', 'Starter', 25000000, 'Rick Carlisle'),
(5, 'Allen', 'Iverson', 'Shooting Guard', 'Starter', 30000000, 'Larry Brown'),
(6, 'Tyler', 'Hero', '6th Man', 'Bench', 8000000, 'Erik Spoelstra'),
(7, 'Kawhi', 'Leonard', 'Unsigned', 'Free Agent', 0,'None'),
(8, 'Michael', 'Jordan', 'Wanna be like Mike', 'Goats',100000000000000, 'Phil Jackson'),
(9, 'Kobe', 'Bryant', 'Wanna be like Mike', 'Goats', 100000000000000, 'Phil Jackson');
