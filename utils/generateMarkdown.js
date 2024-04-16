// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "APACHE2.0") {
    badge = "[![License: APACHE2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "BSD-3") {
    badge = "[![License: BSD-3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (license === "MPL-2.0") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  } else if (license === "GPLv3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "(https://opensource.org/licenses/ISC)";
  } else if (license === "APACHE2.0") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD-3") {
    licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "MPL-2.0") {
    licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "GPLv3") {
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "none") {
    licenseSection = `## LICENSE`;
  }
  return licenseSection;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## TABLE OF CONTENTS
  ### * [License](#licenses)
  ### * [Description](#description)
  ### * [Installation](#installation)
  ### * [How to Use](#how-to-use)
  ### * [Contributors](#contributors)
  ### * [How to Test](#how-to-test)
  ### * [Questions](#questions)

  ${renderLicenseSection(data.licenses)}
  ${renderLicenseBadge(data.licenses)}${renderLicenseLink(data.licenses)}

  ## DESCRIPTION
  ${data.description}

  ## INSTALLATION
  ${data.installation}

  ## HOW TO USE
  ${data.how_to_use}
  
  ## CONTRIBUTORS
  ${data.contributors}

  ## HOW TO TEST
  ${data.test_instructions}

  ## QUESTIONS
  If you have any questions, you may contact me at:
  * GitHub: https://github.com/${data.username}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
