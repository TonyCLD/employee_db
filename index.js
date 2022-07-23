const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require("./lib/Intern.js");

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


let myEmployee = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
        inquirer.prompt(questions).then((data) => {
        const datacombined1 = data;
        console.log(datacombined1);
        const newemployee = new Intern(datacombined1.name, datacombined1.emp_id, datacombined1.email, datacombined1.school);
        console.log(newemployee);
    myResolve(); // when successful
    myReject();  // when error
    });
})