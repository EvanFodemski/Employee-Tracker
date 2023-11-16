const inquirer = require('inquirer');
const connection = require('./config/connection');



const mainPrompt = () => {
    inquirer.prompt([
        {
            name:'choices',
            type: 'list',
            message: 'Select an Option',
            choices:[
                'View all Departments',
                'View all Roles',
                'View all Employess',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update Employee Role',
            ]
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View all Departments'){
            viewAllDepartments();
        }

        if (choices === 'View all Roles'){
            viewAllRoles();
        }

        if (choices === 'View all Employess'){
            viewAllEmployees();
        }

        if (choices === 'Add a Department'){
            addADepartment();
        }

        if (choices === 'Add a Role'){
            addARole();
        }

        if(choices === 'Add an Employee'){
            addAnEmployee();
        }
        if(choices ==='Update Employee Role'){
            updateEmployeeRole();
        }

    })
    
    
};

const viewAllDepartments = () => {
    const query = 'SELECT * FROM departments';

    connection.query(query, (err, results) => {
        if (err) throw err;

   
        console.table(results);


        mainPrompt();
    });
};







const viewAllRoles = () => {
    const query = 'SELECT * FROM role';

    connection.query(query, (err, results) => {
        if (err) throw err;

  
        console.table(results);

        mainPrompt();
    });
};








const viewAllEmployees = () => {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, departments.department_name AS department, role.salary, CONCAT(e.first_name, ' ', e.last_name) AS Manager
     FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN departments on role.department_id=departments.id LEFT JOIN employee e on employee.manager_id=e.id `;//Title, role department, employee/role salary, manager name

    connection.query(query, (err, results) => {
        if (err) throw err;

    
        console.table(results);

      
        mainPrompt();
    });
};








const addARole = () => {
    inquirer.prompt([
        {
            name: 'roleName',
            type: 'input',
            message: 'Enter the name of the new role:',
            validate: (input) => {
                if (input.trim() !== '') {
                    return true;
                }
                return 'Please enter a valid role name.';
            },
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Enter the department ID for the new role:',
            validate: (input) => {
             
                return !isNaN(input) || 'Please enter a valid department ID.';
            },
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary for the new role:',
            validate: (input) => {
              
                return !isNaN(input) || 'Please enter a valid salary.';
            },
        },
    ])
    .then((answers) => {
        const { roleName, departmentId, salary } = answers;

        const query = 'INSERT INTO role (title, department_id, salary) VALUES (?, ?, ?)';
        connection.query(query, [roleName, departmentId, salary], (err, result) => {
            if (err) throw err;

            console.log(`Role "${roleName}" added successfully.`);

            
            mainPrompt();
        });
    });
};






const addADepartment = () => {
    inquirer.prompt([
        {
            name: 'departmentName',
            type: 'input',
            message: 'Enter the name of the new department:',
            validate: (input) => {
                if (input.trim() !== '') {
                    return true;
                }
                return 'Please enter a valid department name.';
            },
        },
    ])
    .then((answers) => {
        const { departmentName } = answers;

       
        const query = 'INSERT INTO departments (department_name) VALUES (?)';
        connection.query(query, [departmentName], (err, result) => {
            if (err) throw err;

            console.log(`Department "${departmentName}" added successfully.`);

           
            mainPrompt();
        });
    });
};


const addAnEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the first name of the new employee:',
            validate: (input) => {
                if (input.trim() !== '') {
                    return true;
                }
                return 'Please enter a valid first name.';
            },
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the last name of the new employee:',
            validate: (input) => {
                if (input.trim() !== '') {
                    return true;
                }
                return 'Please enter a valid last name.';
            },
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the roleId for the new employee:',
            validate: (input) => {
                return input === '' || !isNaN(input) || 'Please enter a valid manager ID or leave it empty.';
            },
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Enter the manager id for the new employee (optional):',
            validate: (input) => {
                return input === '' || !isNaN(input) || 'Please enter a valid manager ID or leave it empty.';
            },
        },
    ])
    .then((answers) => {
        const { first_name, last_name, role_id, manager_id } = answers;

        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        connection.query(query, [first_name, last_name, role_id, manager_id || null], (err, result) => {
            if (err) throw err;

            console.log(`Employee "${first_name} ${last_name}" added successfully.`);

        
            mainPrompt();
        });
    });
};

const updateEmployeeRole = () => {
    // Get the list of employees for user to choose from
    const employeeQuery = 'SELECT id, CONCAT(first_name, " ", last_name) AS employee_name FROM employee';
    connection.query(employeeQuery, (err, employeeResults) => {
        if (err) throw err;

        const employeeChoices = employeeResults.map((employee) => ({
            name: employee.employee_name,
            value: employee.id,
        }));

        inquirer.prompt([
            {
                name: 'employeeId',
                type: 'list',
                message: 'Select the employee whose role you want to update:',
                choices: employeeChoices,
            },
            {
                name: 'newRoleId',
                type: 'input',
                message: 'Enter the new role ID for the employee:',
                validate: (input) => {
                    return !isNaN(input) || 'Please enter a valid role ID.';
                },
            },
        ])
        .then((answers) => {
            const { employeeId, newRoleId } = answers;

            const updateQuery = 'UPDATE employee SET role_id = ? WHERE id = ?';
            connection.query(updateQuery, [newRoleId, employeeId], (updateErr, updateResult) => {
                if (updateErr) throw updateErr;

                console.log(`Employee's role updated successfully.`);

                // Return to the main prompt
                mainPrompt();
            });
        });
    });
};





mainPrompt();