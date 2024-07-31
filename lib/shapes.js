// Base Shape class
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        throw new Error("generateSVG() must be implemented in the subclass");
    }

    render() {
        return this.generateSVG();
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    generateSVG() {
        return `
        <polygon points="150 5, 260 200, 40 200" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

// Circle class
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    generateSVG() {
        return `
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

// Square class
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    generateSVG() {
        return `
        <rect x="65" y="30" width="175" height="175" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

module.exports = { Triangle, Circle, Square };
