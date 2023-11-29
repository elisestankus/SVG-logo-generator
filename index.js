const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo')

const questions = [
    {
        type: 'input',
        name: 'initials',
        message: 'Please enter your initials',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like your logo to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square']
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const pageContent = generateLogo(data)

            fs.writeFile('logo.svg', pageContent, (err) => err ? console.log(err) : console.log('Generated logo.svg'))
        })
}

init();