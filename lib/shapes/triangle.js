class Triangle {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    render() {
        return `<polygon points="150 10, 275 190, 25 190" fill="${this.color}" stroke-width="5"/>
                <text x="150" y="150" font-family="Cambria" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`
    }
}

module.exports = Triangle