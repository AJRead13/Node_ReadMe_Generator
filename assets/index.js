// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'personName',
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "projectName",
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: "licenses",
      choices: ["MIT", "ISC", "Artist License 2.0", "Apache License 2.0"],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitUserName',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'projectDescript',
    },
    {
      type: 'input',
      message: 'Please provide installation instruction.',
      name: 'installGuide',
    },
    {
      type: 'input',
      message: 'Please provide how someone may contribute.',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'How is the application used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How was your application tested?',
      name: 'tested',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'questions',
    },
  ])
  .then((response) => {
    console.log(response);
    const fileName = `README.md`;

    fs.appendFile(fileName, JSON.stringify(response),
      (err) => err ? console.log(error) : console.log(response))
  });




// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response);
      const markdown = generateMarkdown(response);
      const fileName = `${}`
    })
 }

// Function call to initialize app
init();



