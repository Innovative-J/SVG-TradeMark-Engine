// importing modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require("./lib/shapes");

// prompt user using inquirer for logo questions
inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
        validate: input => input.length <= 3 || 'Text should be up to 3 characters!'
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which shape you would like",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
])
.then((response) => {
    const { text, textColor, shape, shapeColor } = response;
    
    let shapeInstance;
    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
    }
// generating svg data
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render(shapeColor)}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

    writeToFile('logo.svg', svgContent);
});
// writing data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('SVG successfully created!');
        }
    });
}
