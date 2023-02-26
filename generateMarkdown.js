const licenseArr = ["Apache", "Eclipse", "MIT", "Mozilla"];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenseArr === [0]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else  if (licenseArr === [1]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (licenseArr === [2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (licenseArr === [3]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  
 ${data.description}
  
  ## Table of Contents 
    
  - [Description](#description)
  - [Installation](#installation) 
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install the necessary dependencies, run the following command: 

  ----
 ${data.installation[0]}  
  ----

  ## Usage
  
 ${data.usage}
     
  ## License
  
 
  ---
    
  ## How to Contribute
  
 ${data.contribution}

  ## Tests
  
  ${data.test[0]}

  ## Questions

  If you have any questions about the repo, please contact me at ${data.email}. You can find more of my work at https://gibhub.com/${data.github}.

`;
}

module.exports = generateMarkdown;
