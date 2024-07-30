// base shape class
class Shape {
    constructor(color) {
        // initialize the shape with color first
        this.color = color;
    }
    
    generateSVG() {};
// Inheriting class from shape
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
// svg markup for triangle
    generateSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150 5, 260 200, 40 200" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}
// Inheriting class from shape
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
// svg markup for circle
    generateSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}
// svg markup for square
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
// svg markup for circle

    generateSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="65" y="30" width="175" height="175" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = { Triangle, Circle, Square };
