class Cards extends GameObjectImage {
    cardDrawStation = null;
    constructor(x, y, sizeX, sizeY, imageRef) {
        super(x, y, sizeX, sizeY, imageRef);
    }

    setText(text) {
        this.text = text;
    }

    render(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY);
        if (this.text) {
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';

            var lines = this.text.split('\n');
            for (var i = 0; i < lines.length; i++)
                ctx.fillText(lines[i], this.x + 250, this.y + 70 + (i * 24));
        }
    }
}