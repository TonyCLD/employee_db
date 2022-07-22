const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');

const questions = [
    {
        name: 'name',
        message: 'Enter name.'
    },
    {
        name: 'emp_id',
        message: 'Enter employee ID.'
    },
    {
        name: 'email',
        message: 'Enter employee email.'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Enter role of employee.',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        name: 'officeNum',
        message: 'Enter the office of the manager.',
    },
    {
        name: 'github_id',
        message: 'Enter the github ID the engineer.',
    },
    {
        name: 'school',
        message: 'Enter the school of the intern.',
    },
];

inquirer.prompt(questions).then((data) => {
        const datacombined1 = data;
        console.log(datacombined1);
    }.then(() => ) {const fullinfo2 = new Engineer (datacombined1.name, datacombined1.emp_id, datacombined1.email, datacombined1.role,);
    console.log(fullinfo2);} );

// const emp_card = new Employee(datacombined1);
// console.log(emp_card);

// const fullinfo = new Employee ('tony', 025845, 'tony@tony.com');
// console.log(fullinfo);

