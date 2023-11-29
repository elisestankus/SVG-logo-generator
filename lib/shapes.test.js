const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

describe('Circle', () => {
    test('it should return the svg text with the color and text', () => {
        const circle = new Circle('blue', 'EMS');

        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="95" fill="blue" stroke-width="5"/>
        <text x="80" y="120" font-family="Cambria" font-size="70" fill="white">EMS</text>`)
    }) 
})