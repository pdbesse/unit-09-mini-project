const inquirer = require('inquirer');
const fs = require('fs');

function promptUser () {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your name?",
            type: "input",
        },
        {
            name: "location",
            message: "Where are you from?",
            type: "input",
        },
        {
            name: "bio",
            message: "Tell us a few details about yourself.",
            type: "input",
        },
        {
            name: "linkedIn",
            message: "What is your LinkedIn URL?",
            type: "input",
        },
        {
            name: "github",
            message: "What is your GitHub username?",
            type: "input",
        }
    ])
        .then((info) => {
            console.log(info);
        })
}

promptUser();