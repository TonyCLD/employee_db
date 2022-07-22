const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const { listenerCount } = require("process");
// const { workerData } = require("worker_threads");

const questions = [
    {
        name: 'name',
        message: 'Enter name.'
    },
    {
        name: 'id',
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
        console.log(datacombined1)});