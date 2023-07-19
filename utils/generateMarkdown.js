// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return`
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
}

module.exports = generateMarkdown;
