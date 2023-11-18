class Description extends GameObject {
    constructor(x, y, msg = null) {
        super(x, y, 0, 0);
        this.msg = msg;
    }

    setMessage(msg) {
        this.msg = msg;
    }

    render(ctx) {
        if (this.msg) {
            ctx.font = '24px Arial';
            ctx.fillStyle = 'blue';
            ctx.textAlign = 'center';
            ctx.fillText(this.msg, this.x, this.y);
        }
    }
}