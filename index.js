const inquirer = require('inquirer');

const questions = [
  {
    message: "Enter your Github username.",
    name: "username"
  },
  {
    message: "What is the title of your project?",
    name: "title"
  },
  {
    message: "What are some badges you would like to include?",
    name: "badges",
  },
  {
    message: "Please provide a brief description about your project",
    name: "description",
  },
  {
    message: "Please provide a step-by-step description on how to get the development environment running.",
    name: "installation",
  },
  {
    message: "Please provide instructions and examples for use.",
    name: "usage",
  },
  {
    message: "List your collaborators with links to their GitHub profiles.",
    name: "credits",
  },
  {
    message: "What licenses would you like to include?",
    name: "license",
  },
  {
    message: "What are the contributing guidelines?",
    name: "contributing",
  },
  {
    message: "Write tests for your application.",
    name: "tests",
  }
]

function writeToFile(fileName, data) {
}

function init() {
  inquirer.prompt(questions)
  .then(function (data){
    console.log(data.username)
    console.log(data.title)
    console.log(data.badges)
    console.log(data.description)
    console.log(data.installation)
    console.log(data.usage)
    console.log(data.credits)
    console.log(data.license)
    console.log(data.contributing)
    console.log(data.tests)
  })
}

init();