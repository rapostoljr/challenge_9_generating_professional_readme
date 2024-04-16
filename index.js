// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter title for project: ",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project, your reason for creating it: ",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe how to install your project: "
    },
    {
        type: "input",
        name: "how_to_use",
        message: "Describe how to use your project: "
    },
    {
        type: "input",
        name: "contributors",
        message: "Any contributors in this project: "
    },
    {
        type: "input",
        name: "test_instructions",
        message: "How to test your project: "
    },
    {
        type: "list",
        name: "licenses",
        message: "Please select the license you want to associate with this project.",
        choices: ["MIT", "APACHE2.0", "BSD-3", "MPL-2.0", "GPLv3", "none"]
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then((responses) => {
        console.log('Professional README.md has been created.');
        writeToFile("db/README.md", generateMarkdown({...responses}));
    });
// Function call to initialize app
init();
