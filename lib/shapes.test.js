const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
    test('Triangle generates correct SVG', () => {
        const triangle = new Triangle('blue', 'A', 'white');
        const svg = triangle.generateSVG();
        expect(svg).toContain('<polygon points="150 5, 260 200, 40 200" fill="blue"/>');
        expect(svg).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text>');
    });

    test('Circle generates correct SVG', () => {
        const circle = new Circle('red', 'B', 'black');
        const svg = circle.generateSVG();
        expect(svg).toContain('<circle cx="150" cy="100" r="80" fill="red"/>');
        expect(svg).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">B</text>');
    });

    test('Square generates correct SVG', () => {
        const square = new Square('green', 'C', 'yellow');
        const svg = square.generateSVG();
        expect(svg).toContain('<rect x="65" y="30" width="175" height="175" fill="green"/>');
        expect(svg).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">C</text>');
    });
});
