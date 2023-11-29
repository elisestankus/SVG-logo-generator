const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

function renderLogo(data) {
    if (data.shape == 'Circle') {
        logo = new Circle(data.color, data.initials).render()
    } else if (data.shape == 'Triangle') {
        logo = new Triangle(data.color, data.initials).render()
    } else if (data.shape == 'Square') {
        logo = new Square(data.color, data.initials).render()
    }
}