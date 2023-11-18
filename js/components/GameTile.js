class GameTile extends BaseTile {
    static SIZE_A = 96;
    static SIZE_B = 128;

    constructor(x, y, sizeX, sizeY, src, id, injector) {
        super(x, y, sizeX, sizeY, src, id);
        if(injector) {
            this.name = injector.name;
            this.price = injector.price;
            this.rent = injector.rent;
            this.rentWithColorSet = injector.rentWithColorSet;
            this.rentWithHouse = injector.rentWithHouse;
            this.rentWithHotel = injector.rentWithHotel;
        }
    }
}