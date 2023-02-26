// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short desciption of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        choices: ["npm i inquirer@8.2.4"]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do I use this application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter guidelines on how to contribute to the repo.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
        choices: ["npm test"]
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: ["Apache", "Eclipse", "MIT", "Mozilla"]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("README.md", generateMarkdown(data))
    }) 
}

// Function call to initialize app
init();
