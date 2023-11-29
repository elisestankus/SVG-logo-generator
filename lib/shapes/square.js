class Square {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        return `<rect x="55" y="10" width="190" height="190" fill="${this.color}" stroke-width="5"/>
        <text x="150" y="105" font-family="Cambria" font-size="70" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Square