import { input } from '@inquirer/prompts';
const fs = require('fs');
const inquirer = require('inquirer');

const questions = require('index.js');
inquirer
.prommpt([
    { type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
])
.then((response) => {
    const { } = response;

    fs.appendFile('SVG', ({title, description, installation, usage, credits, license, tests, github, email}), (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('SVG successfully created!');
        }
    });
});

