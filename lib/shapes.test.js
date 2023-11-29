const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

describe('Circle', () => {
    test('it should return the svg text for the circle class with the color and text', () => {
        const circle = new Circle('blue', 'EMS');

        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="95" fill="blue" stroke-width="5"/>
        <text x="80" y="120" font-family="Cambria" font-size="70" fill="white">EMS</text>`)
    }) 
})

describe('Triangle', () => {
    test('it should return the svg text for the triangle class with the color and the text', () => {
        const triangle = new Triangle('green', 'ABC');

        expect(triangle.render()).toEqual(`<polygon points="150 10, 275 190, 25 190" fill="green" stroke-width="5"/>
        <text x="150" y="150" font-family="Cambria" font-size="60" text-anchor="middle" fill="white">ABC</text>`)
    })
})