const licenseArr = ["Apache", "Eclipse", "MIT", "Mozilla"];

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license===licenseArr[0]) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else  if (license===licenseArr[1]) {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  } else if (license===licenseArr[2]){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license===licenseArr[3]){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
}

// Function to generate markdown for README
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

 ${data.installation}  

  ## Usage
  
 ${data.usage}
     
  ## License
  
 This repo is covered under the ${data.license} license.
    
  ## Contribution
  
 ${data.contribution}

  ## Tests
  
  ${data.test}

  ## Questions

  If you have any questions about the repo, please contact me at ${data.email}. You can find more of my work at https://gibhub.com/${data.username}.

`;
}

module.exports = generateMarkdown;
