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
      type: "input",
      message: "Give a brief description about your project.",
      name: "description"
    },
    {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
          "Yes",
          "No"
        ]
    }
  ])
  .then(function(response) {

    console.log(response.title)
    console.log(response.description)

    if (response.contact === "Yes"){
        //function to select all badges they would like to be added
        console.log('You said you would like to include badges')
    }else (console.log('badges will not be included'))

});