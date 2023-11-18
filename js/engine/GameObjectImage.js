class GameObjectImage extends GameObject {
    constructor(x, y, sizeX, sizeY, imageRef) {
        super(x, y, sizeX, sizeY);
        this.image = ImageHandler.get(imageRef);
        this.bigImage = ImageHandler.getBig(imageRef);
    }

    render(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY);
        if (this.owner) {
            ctx.drawImage(this.owner.bigImage, this.x, this.y, this.sizeX / 3, this.sizeY / 3);
        }
    }
}
