class BaseTile extends GameObjectImage {
    constructor(x, y, sizeX, sizeY, src, id, type) {
        super(x, y, sizeX, sizeY, src);
        this.type = type;
        this.id = id;
    }
}