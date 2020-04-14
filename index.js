const inquirer = require('inquirer');
const fs = require('fs');

const api = require('./api');
const generateMarkdown = require('./generateMarkdown')

// const questions = [
//   {
//     message: "Enter your Github username.",
//     name: "username"
//   },
//   {
//     message: "What is the title of your project?",
//     name: "title"
//   },
//   {
//     message: "What are some badges you would like to include? (enter link)",
//     name: "badges",
//   },
//   {
//     message: "Please provide a brief description about your project",
//     name: "description",
//   },
//   {
//     message: "Please provide a step-by-step description on how to get the development environment running.",
//     name: "installation",
//   },
//   {
//     message: "Please provide instructions and examples for use.",
//     name: "usage",
//   },
//   {
//     message: "List your collaborators with links to their GitHub profiles.",
//     name: "credits",
//   },
//   {
//     message: "What licenses would you like to include?",
//     name: "license",
//   },
//   {
//     message: "What are the contributing guidelines?",
//     name: "contributing",
//   },
//   {
//     message: "Write tests for your application.",
//     name: "tests",
//   }
// ]

// function writeToFile(data) {
//   fs.writeFile('readmegenerator.md', generateMarkdown(data),

//     (err) => {
//       if (err) {
//         throw err;
//       }
//     })
// }

// function init() {
//   inquirer.prompt(questions)
//     .then(function (data) {
//       api(data.username)
//       // console.log(data)
//       // console.log(response.data.avatar_url)
//       writeToFile(data)
//     })
// }

// init()




function promptUser() {
  return inquirer.prompt([
  {
    message: "Enter your Github username.",
    name: "username"
  },
  {
    message: "What is the title of your project?",
    name: "title"
  },
  {
    message: "What are some badges you would like to include? (enter link)",
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
])
}

function writeToFile(data, github) {
    fs.writeFile('readmegenerator.md', generateMarkdown(data, github),
  
      (err) => {
        if (err) {
          throw err;
        }
      })
  }

async function init() {
  try {
    const answers = await promptUser();
    const ghazi = await api(answers.username);
    await writeToFile(answers, ghazi);


  }catch (err) {
    console.log(err);
}


}

init()
