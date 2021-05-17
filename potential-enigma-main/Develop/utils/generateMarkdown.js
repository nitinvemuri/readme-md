const fs = require ('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const selectLicense = data.license[0];
  let currentlicense = ""
  if (selectLicense = 'Apache') {
    selectedLicense = `[![License:Apache] http://www.apache.org/licenses/](http://www.apache.org/licenses/LICENSE-2.0)`
  };
  if (selectLicense = 'GNUAPGLv3') {
    selectedLicense = `[![License: GNUAPGLv3]https://www.gnu.org/licenses/](https://opensource.org/licenses/AGPL-3.0)`
  };
  if (selectLicense = 'GNUGPLv3') {
    selectedLicense = `[![License: GNUGPLv3]https://www.gnu.org/licenses/gpl-3.0-standalone.html](https://opensource.org/licenses/GPL-3.0)`

  };
  if (selectLicense = 'GNULGPLv3') {
    selectedLicense = `[![License: GNULPGLv3]https://www.gnu.org/licenses/gpl-3.0-standalone.html](https://opensource.org/licenses/GPL-3.0)`
  };
  if (selectLicense = 'Mit') {
    selectedLicense = `[![License: Mit]https://img.shields.io/badge/License-MIT-yellow.svg](https://opensource.org/licenses/MIT)` 
  };
  if (selectLicense = 'Unlicensed' === null) {
    selectedLicense = "---"

  };
  return currentlicense;
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

  Full Repo: "www.github.com/${data.github}/${data.title}


  ${renderLicenseBadge(data)}
  ## Table of Contents
  * [Description](#Description)
  * [Installation Instructions](#Installation)
  * [Usage](#Usage) 
  * [Contributors](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [License](#License) 
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.test}
  ## Questions
  Have any questions? 
  - Contact me : ${data.email}
  - GitHub Link : https://github.com/${data.github}



  ${renderLicenseLink(data)}
  ${renderLicenseSection(data)}


`;
}

module.exports = generateMarkdown;


//

