// TODO: Return markdown string for README file given a data object.
function generateMarkdown(answers, data) {
  const { avatar_url, login, html_url } = data

  return `
## ${answers.projectname}
[insert license badge here]

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

![${login} avatar](${avatar_url})
If you have any questions about the repo, open an issue or contact ![${login}](${html_url}) directly at sylhuynh76@gmail.com

`;
}

module.exports = generateMarkdown;
