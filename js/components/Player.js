class Player extends GameObjectImage {
    static NAMES = ['', 'QG', 'MetrX', 'CV', 'TN'];
    currentField = 0;
    movingField = -1;

    drawPositive = false;
    drawNegative = false;

    static current() {
        return GameMechanic.players[GameMechanic.activePlayer - 1];
    }

    constructor(id, x, y, sizeX, sizeY, src) {
        super(x, y, sizeX, sizeY, src);
        this.id = id;
        this.moveToFieldImmediately(0, false);
        this.currentField = 0;
        this.sp = 150;
        this.jail = false;
    }

    render(ctx) {
        let x = this.x;
        let y = this.y;
        switch (this.id) {
            case 1: x -= 30; y -= 30; break;
            case 2: x += 30; y -= 30; break;
            case 3: x -= 30; y += 30; break;
            case 4: x += 30; y += 30; break;
        }
        ctx.drawImage(this.image, x, y, this.sizeX, this.sizeY);
    }

    moveToField(fieldId, cb = null) {
        this.moveRecursion(this.currentField + 1, fieldId, cb);
        this.currentField = fieldId;
    }

    moveToFieldImmediately(fieldId, smooth = true, cb=null) {
        super.moveTo("PLAYER", GameMechanic.fields[fieldId], smooth, cb);
        this.currentField = fieldId;
    }
    moveRecursion(current, total, cb) {
        this.movingField = current;
        if (current > total) {
            return cb();
        }
        return this.moveTo("PLAYER", GameMechanic.fields[current], true, () => this.moveRecursion(current + 1, total, cb));

    }
}
