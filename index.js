// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['mit', 'gpl-3.0', 'apache-2.0', 'unlicense', 'mpl-2.0'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File ${fileName} created successfully!`);
        }
    })
};

function licenseBadge(license) {
    let licenseType = license;
    let yourLicense = '';
    if (licenseType === 'mit') {
      yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (licenseType === 'gpl-3.0') {
      yourLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (licenseType === 'apache-2.0') {
      yourLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (licenseType === 'mpl-2.0') {
      yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else {
      yourLicense = 'N/A';
    }
    return yourLicense;
  };

function formatAnswers(answers) {
    // Format the answers as desired (e.g., convert to JSON, Markdown, etc.)
    // Here, we are converting the answers to a simple string format
    let yourLicense = licenseBadge(answers.license);
    let lowerCaseGithub = answers.github.toLowerCase();
    const formattedAnswers = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
 ${answers.installation}

 ## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.
${yourLicense}

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For additional questions, you can reach me through GitHub: [${answers.github}](https://github.com/${lowerCaseGithub}/)
You can also contact me via email: (${answers.email})`;
        
    return formattedAnswers;
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        let formattedAnswers = formatAnswers(answers);
        
        writeToFile('output.txt', formattedAnswers);
    });
}
// Function call to initialize app
init();
