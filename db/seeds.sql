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

INSERT INTO employee( first_name, last_name, role_id, manager_id)
VALUES 
( 'Steph', 'Curry',1,NULL  ),
('Kevin', 'Durant',1, 1 ),
( 'Shaquille', 'Oneill',1,2 ),
( 'Dirk', 'Nowitzki',1,3 ),
( 'Allen', 'Iverson',1,4 ),
( 'Tyler', 'Hero',2, NULL ),
( 'Kawhi', 'Leonard',3, 5 ),
( 'Michael', 'Jordan',4, NULL ),
( 'Kobe', 'Bryant',4, NULL );
