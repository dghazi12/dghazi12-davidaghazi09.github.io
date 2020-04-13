const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
    {
      type: "list",
      message: "Would you like to include a brief description about your project?",
      name: "description",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "list",
      message: "Would you like to include badges?",
      name: "badges",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "input",
      message: "Would you like to rovide a step-by-step description of how to get the development environment running?",
      name: "installation",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "list",
      message: "Would you like to include credits?",
      name: "credits",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "list",
      message: "Would you like to include licenses?",
      name: "license",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "input",
      message: "Are there any contributing guidelines?",
      name: "contributing",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "input",
      message: "Write tests for your application",
      name: "tests",
    }
  ])
  .then(function(response) {
    fs.writeFile("readme.md", `
# ${response.title}

## Description

${response.description}

#### Your updated site should have the following content:

- Your name
- Links to your GitHub profile & LinkedIn page as well as your email address and phone number
- A link to a PDF of your resume
- A list of projects. For each project, make sure you have the following:

  - Project title
  - Link to the deployed version
  - Link to the GitHub repository
  - Screenshot of the deployed application

## Requirements

- Updated portfolio featuring project 1 and two exemplary homework assignments.
- Update GitHub profile with pinned repositories featuring project 1 and two exemplary assignments.
- Updated resume
- Updated LinkedIn profile

## Welcome Page of Portfolio:

## Built With

- HTML
- CSS
- Javascript
- Bootstrap
- jQuery
- Font Awesome
- Google Fonts

## Link to Portfolio`,

function (err) {
  if (err) {
      throw err;
  }
  console.log('Your Readme file is ready!')
})

    if (response.badges === "Yes"){
        //function to select all badges they would like to be added
        badges()
    }else (console.log('Badges will not be included'))

    if (response.credits === "Yes"){
      //function to receive credits information they would like to be added
      credits()
    }else (console.log('Credits will not be included'))

    if (response.license === "Yes"){
      //function to select all badges they would like to be added
      license()
    }else (console.log('License will not be included'))

  })

let badges = () => {
  //Figure out how to make the api call to get all the badges that would be associated with the assignment
  console.log('You said you would like to include badges')
}

let credits = () => {
  console.log('You said you would like to include credits')
}

let license = () => {
  console.log('You said you would like to include licenses')
}

// Figure out how to get a long list for the description section

// For the badges, need to make an api call to github to get the badges for the assignment and append all to the readme file

// Installation. Can just type ways to install

//Credits will be put in list form. List first credit, If you would like to add another line of credit, must select yes. If yes run function if no move on to next input

// License will be selected from 4 options, and then appended (i think)

// Contributing can be written as own or append link 

// Write tests for application from the input i guess? 


// New way, just ask if they would like to include these in the readme and then open up the readme file with instruction on what 
// to put in said section