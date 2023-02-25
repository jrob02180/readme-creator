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
        message: 'Please enter desciption of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines.'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: ["Apache", "GNU", "MIT", "Mozilla"]
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
