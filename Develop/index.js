// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
function promptUser () {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github profile link.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What problem does it solve?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select which license you would like to use:',
        choices : [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3",
        ],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage for your project.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, or supporting resources used',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please state if others can contribute.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please state your projects features.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please state how tests can be completed.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    ]);
}

function generateText(answers) {
    return `
  # ${answers.title}
 
  ## Creator details
  Github username: ${answers.userName}
  Email: ${answers.email}
  Github profile link: ${answers.github}
  
  ## Description
  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")
  - Motivation: ${answers.motivation}
  - Why I built this project: ${answers.why}
  - The problem it solves: ${answers.solve}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Features](#features)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  Here are the steps required to get the development environment running:
  ${answers.installation}
  ## Usage
  The usage information for this project:
  ${answers.usage}
  ## Credits
  ${answers.credits}
  ## License
  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")
  ## Contribution Guidelines
  ${answers.contribution}
  ## Features
  ${answers.features}
  ## Tests
  ${answers.tests}
  ## Questions
  ${answers.questions}
  ---
 
`;
}


// TODO: Create a function to write README file
// sections of the README entitled Description, Installation, Usage, Contributing, and Tests
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser ();
        const readMe = generateText(answers);
        await writeFileAsync("README1.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}


// Function call to initialize app
init();
