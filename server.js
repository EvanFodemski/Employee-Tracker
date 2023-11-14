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
                'Update Employee Managers',
                'View Employees by Manager',
                'View Employees by department',
                'Delete Department',
                'Delete Role',
                'Delete Employee',
                'View total Utilized budget of a department'


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

        if (choices === 'Add a role'){
            addARole();
        }

        if(choices === 'Add an Employee'){
            addAnEmployee();
        }
        if(choices ==='Update Employee Role'){
            updateEmployeeRole();
        }

        if(choices ==='Update Employee Managers'){
            updateEmployeeManagers();
        }

        if(choices === 'View Employees by Manager'){
            viewEmployeebyManager();
        }

        if(choices ==='View Employees by department'){
            viewEmployeesbyDepartment();
        }

        if(choices === 'Delete Department'){
            deleteDepartment();
        }

        if(choices === 'Delete Role'){
            deleteRole();
        }

        if(choices === 'Delete Employee'){
            deleteEmployee();
        }

        if(choices === 'View total Utilized budget of a department'){
            totalBudget();
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
    const query = 'SELECT * FROM employee';

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
                // You might want to add more validation for department ID
                return !isNaN(input) || 'Please enter a valid department ID.';
            },
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary for the new role:',
            validate: (input) => {
                // You might want to add more validation for salary
                return !isNaN(input) || 'Please enter a valid salary.';
            },
        },
    ])
    .then((answers) => {
        const { roleName, departmentId, salary } = answers;

        const query = 'INSERT INTO role (job_title, department_id, salary) VALUES (?, ?, ?)';
        connection.query(query, [roleName, departmentId, salary], (err, result) => {
            if (err) throw err;

            console.log(`Role "${roleName}" added successfully.`);

            // After adding the role, prompt the user again
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

        // Insert the new department into the 'departments' table
        const query = 'INSERT INTO departments (department_name) VALUES (?)';
        connection.query(query, [departmentName], (err, result) => {
            if (err) throw err;

            console.log(`Department "${departmentName}" added successfully.`);

            // After adding the department, prompt the user again
            mainPrompt();
        });
    });
};


const addAnEmployee = () => {
    inquirer.prompt([
        {
            name: 'firstName',
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
            name: 'lastName',
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
            name: 'roleId',
            type: 'input',
            message: 'Enter the role ID for the new employee:',
            validate: (input) => {
                
                return !isNaN(input) || 'Please enter a valid role ID.';
            },
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'Enter the manager ID for the new employee (optional):',
            validate: (input) => {
                // You might want to add more validation for manager ID
                return input === '' || !isNaN(input) || 'Please enter a valid manager ID or leave it empty.';
            },
        },
    ])
    .then((answers) => {
        const { firstName, lastName, roleId, managerId } = answers;

        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        connection.query(query, [firstName, lastName, roleId, managerId || null], (err, result) => {
            if (err) throw err;

            console.log(`Employee "${firstName} ${lastName}" added successfully.`);

            // After adding the employee, prompt the user again
            mainPrompt();
        });
    });
};







mainPrompt();