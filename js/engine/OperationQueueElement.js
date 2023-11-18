class OperationQueueElement {
    static eventId = 0;
    constructor(eventName, x = null, y = null, sizeX = null, sizeY = null, cb = null) {
        this.id = OperationQueueElement.eventId++;
        this.eventName = eventName;
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.cb = cb;
    }
}