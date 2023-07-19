// TODO: Include packages needed for this application
const {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown
  } = require('./generateMarkdown');
  
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

renderLicenseBadge(license);

function formatAnswers(answers) {
    // Format the answers as desired (e.g., convert to JSON, Markdown, etc.)
    // Here, we are converting the answers to a simple string format
    //let yourLicense = licenseBadge(answers.license);
    //let lowerCaseGithub = answers.github.toLowerCase();
    const formattedAnswers = generateMarkdown(answers);
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    const licenseSection = renderLicenseSection(license);
    
        
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
