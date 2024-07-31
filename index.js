const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Enter up to (3) Characters:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'TEXT COLOR: Enter a color keyword (OR a hexadecimal number):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose which shape you would like',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):',
    },
];

// Function to prompt user for input
function promptUser() {
    return inquirer.prompt(questions);
}

// Main logic
promptUser()
    .then((response) => {
        const { text, textColor, shape, shapeColor } = response;
        
        let shapeInstance;
        switch (shape) {
            case 'Circle':
                shapeInstance = new Circle(shapeColor, text, textColor);
                break;
            case 'Square':
                shapeInstance = new Square(shapeColor, text, textColor);
                break;
            case 'Triangle':
                shapeInstance = new Triangle(shapeColor, text, textColor);
                break;
            default:
                throw new Error('Invalid shape selected');
        }

        // Generating SVG data
        const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shapeInstance.generateSVG()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>
        `;

        writeToFile('logo.svg', svgContent);
    })
    .catch((error) => {
        console.error('Error during prompt or file writing:', error);
    });

// Function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error('Error writing file:', error);
        } else {
            console.log('SVG successfully created!');
        }
    });
}
