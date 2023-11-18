class Die extends GameObjectImage {
    static nextId = 0;

    static diceStation = null;
    static dice = [];
    static sum() {
        return Die.dice.map(x=>x.value).reduce((curr, acc) => curr + acc, 0);
    }

    value = 1;
    constructor(x, y, sizeX, sizeY) {
        super(x, y, sizeX, sizeY, ImageHandler.DICE_1);
        this.id = Die.nextId;
        Die.nextId++;
        this.moving = false;
    }

    moveTo(name, element, smooth = true, cb = null) {
        super.moveTo(name, { x: element.x - (60 * this.id), y: element.y, sizeX: element.sizeX, sizeY: element.sizeY });
    }

    move() {
        super.move();
        if (this.moving) {
            this.rollDice();
            const rnd = Math.floor(Math.random() * 4)
            switch (rnd) {
                case 0: this.x += 10;
                    break;
                case 1: this.y += 10;
                    break;
                case 2: this.x -= 10;
                    break;
                case 3: this.y -= 10;
                    break;
            }
        }
    }

    rollDice() {
        const number = Math.floor(Math.random() * 6) + 1;
        this.value = number;
        switch (number) {
            case 1: this.image = ImageHandler.get(ImageHandler.DICE_1); break;
            case 2: this.image = ImageHandler.get(ImageHandler.DICE_2); break;
            case 3: this.image = ImageHandler.get(ImageHandler.DICE_3); break;
            case 4: this.image = ImageHandler.get(ImageHandler.DICE_4); break;
            case 5: this.image = ImageHandler.get(ImageHandler.DICE_5); break;
            case 6: this.image = ImageHandler.get(ImageHandler.DICE_6); break;
        }
    }
}