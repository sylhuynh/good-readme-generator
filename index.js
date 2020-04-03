// TODO: import fs, path and inquirer modules
const fs = require("fs");

const inquirer = require("inquirer");

// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectname"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What kind of license should your projecy have?",
        name: "license"
    },
    {
        type: "input",
        message: "What does the user need to know abut contributing to the repo?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },

];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, generateMarkdown(data), function (error) {
        if (error) {
            console.log(error)
            return;
        }
        console.log("Successfully created readme")
    });
};

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            return api.getUser(answers);
        })
        .then(() => {
            return writeToFile();
        })
        .catch(error => {
            //if anything goes wrong
            console.log("could not create file")
            //exit
            process.exit(1);
        })
};

init();
