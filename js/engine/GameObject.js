class GameObject {
    operationQueue = [];
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    addOperationQueue(queue) {
        queue.forEach(element => {
            this.operationQueue.push(element);
        });
    }

    move() {
        if (this.operationQueue.length > 0) {
            const operation = this.operationQueue.shift();
            console.log(operation.eventName);
            switch (operation.eventName) {
                case 'PLAYER_START': Sound.play(Sound.DONKEY); break;
            }
            this.x = operation.x || this.x;
            this.y = operation.y || this.y;
            this.sizeX = operation.sizeX || this.sizeX;
            this.sizeY = operation.sizeY || this.sizeY;

            if (Player.current() && Player.current().movingField === Player.current().currentField) {
                switch (operation.eventName) {
                    case 'PLAYER_END': Script.get(Player.current().currentField)(); break;
                }
            }

            if (operation.cb != null) {
                operation.cb(this);
            }
        }
    }

    render(ctx) {
        throw new Error(`Not implemented function. GameObject#render()`);
    }


    moveTo(name, element, smooth = true, cb = null) {
        console.log(element);
        const targetX = element.x + element.sizeX / 2 - this.sizeX / 2;
        const targetY = element.y + element.sizeY / 2 - this.sizeY / 2;

        if (!smooth) {
            this.addOperationQueue([new OperationQueueElement(name + "_IMMEDIATELY", targetX, targetY, null, null, cb)]);
            return;
        }
        const startX = this.x;
        const startY = this.y;
        const steps = 60;

        const cubicMoving = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        const coordinates = [];
        coordinates.push(new OperationQueueElement(name + "_START", startX, startY));
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const deltaX = cubicMoving(t) * (targetX - startX);
            const deltaY = cubicMoving(t) * (targetY - startY);
            coordinates.push(new OperationQueueElement(name, startX + deltaX, startY + deltaY));
            if (i === steps) coordinates.push(new OperationQueueElement(name + "_END", startX + deltaX, startY + deltaY, null, null, cb));
        }
        this.addOperationQueue(coordinates);
    }
}