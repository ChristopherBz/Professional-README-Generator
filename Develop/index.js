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
        name: 'contribute',
        message: 'Please state if others can contribute.',
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
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ## Usage
  ## Credits
  List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.
  ## License
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ## Contribution Guidelines
  ## Tests
  ## Questions
  ---
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  ## Badges
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  ## Features
  If your project has a lot of features, list them here.
  ## How to Contribute
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  Go the extra mile and write tests for your application. 

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
