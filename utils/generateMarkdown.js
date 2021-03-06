// TODO: Return markdown string for README file given a data object.
function generateMarkdown(answers, data) {
  const { avatar_url, login, html_url } = data

  return `
## ${answers.projectname}
[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opendatacommons.org/licenses/by/)

## Description 
${answers.description}

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
${answers.installation}

## Usage
${answers.usage}

## License 
This project is licensed under the ${answers.license}

## Contributing 
${answers.contributing}


## Tests
To run tests, run the following command:

${answers.tests}

## Questions

If you have any questions about the repo, open an issue or contact ![${login}](${html_url}) directly at sylhuynh76@gmail.com

![${login} avatar](${avatar_url})

## Demo 
[Link to Demo](https://drive.google.com/file/d/1cRST0q2iCCjwvuAAXSB0HuZNl3tjBTvI/view)

`;
}

module.exports = generateMarkdown;
