class PlayerDetails extends GameObject {
    static board = null;
    constructor(x, y, sizeX, sizeY, player) {
        super(x, y, sizeX, sizeY);
        this.player = player;
    }

    setPlayer(player) {
        this.player = player;
    }

    render(ctx) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
        ctx.strokeRect(this.x, this.y, this.sizeX, this.sizeY);
        if (this.player) {
            ctx.font = '24px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'left';
            ctx.fillText("Sorszám: " + this.player.id, this.x + 30, this.y + 40);
            ctx.fillText("Név: " + Player.NAMES[this.player.id], this.x + 30, this.y + 64);
            ctx.fillText("$P: " + this.player.sp, this.x + 30, this.y + 88);
            ctx.fillText("Kocsma: " + (this.player.jail ? "Igen":"Nem"), this.x + 30, this.y + 112);
            ctx.drawImage(GameMechanic.fields[this.player.currentField].bigImage,  this.x + 30, this.y + 160, this.sizeX - 60, this.sizeY - 180);
        }
    }
}
