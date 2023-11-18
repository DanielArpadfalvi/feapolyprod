class ImageHandler {
    static CAT = "cat.jpg";
    static SHOE = "shoe.png";
    static STAR = "star.jpg";
    static DICE_1 = "dice/1.png";
    static DICE_2 = "dice/2.png";
    static DICE_3 = "dice/3.png";
    static DICE_4 = "dice/4.png";
    static DICE_5 = "dice/5.png";
    static DICE_6 = "dice/6.png";
    static F_0 = "property/0.png";
    static F_1 = "property/1.png";
    static F_2 = "property/2.png";
    static F_3 = "property/3.png";
    static F_4 = "property/4.png";
    static F_5 = "property/5.png";
    static F_6 = "property/6.png";
    static F_7 = "property/7.png";
    static F_8 = "property/8.png";
    static F_9 = "property/9.png";
    static F_10 = "property/10.png";
    static F_11 = "property/11.png";
    static F_12 = "property/12.png";
    static F_13 = "property/13.png";
    static F_14 = "property/14.png";
    static F_15 = "property/15.png";
    static F_16 = "property/16.png";
    static F_17 = "property/17.png";
    static F_18 = "property/18.png";
    static F_19 = "property/19.png";
    static F_20 = "property/20.png";
    static F_21 = "property/21.png";
    static F_22 = "property/22.png";
    static F_23 = "property/23.png";
    static F_24 = "property/24.png";
    static F_25 = "property/25.png";
    static F_26 = "property/26.png";
    static F_27 = "property/27.png";
    static F_28 = "property/28.png";
    static F_29 = "property/29.png";
    static F_30 = "property/30.png";
    static F_31 = "property/31.png";
    static F_32 = "property/32.png";
    static F_33 = "property/33.png";
    static F_34 = "property/34.png";
    static F_35 = "property/35.png";
    static F_36 = "property/36.png";
    static F_37 = "property/37.png";
    static F_38 = "property/38.png";
    static F_39 = "property/39.png";

    static CARDS_POSITIVE_BACK = "cards/card_lehetoseg_back.png";
    static CARDS_NEGATIVE_BACK = "cards/card_topprio_back.png";
    static CARDS_POSITIVE_FRONT = "cards/card_lehetoseg_front.png";
    static CARDS_NEGATIVE_FRONT = "cards/card_topprio_front.png";

    static FEA = "fea.png";
    static QG = "players/qgLogo.png";
    static METRX = "players/metrxLogo.png";
    static CV = "players/cvLogo.png";
    static TN = "players/tnLogo.png";

    static list = [this.CAT, this.SHOE, this.STAR, this.DICE_1, this.DICE_2, this.DICE_3, this.DICE_4, this.DICE_5, this.DICE_6,
    this.F_0, this.F_1, this.F_2, this.F_3, this.F_4, this.F_5, this.F_6, this.F_7, this.F_8, this.F_9, this.F_10, this.F_11,
    this.F_12, this.F_13, this.F_14, this.F_15, this.F_16, this.F_17, this.F_18, this.F_19, this.F_20, this.F_21, this.F_22, this.F_23,
    this.F_24, this.F_25, this.F_26, this.F_27, this.F_28, this.F_29, this.F_30, this.F_31, this.F_32, this.F_33, this.F_34, this.F_35, this.F_36,
    this.F_37, this.F_38, this.F_39, this.FEA, this.QG, this.METRX, this.CV, this.TN, this.CARDS_NEGATIVE_BACK, this.CARDS_NEGATIVE_FRONT, this.CARDS_POSITIVE_BACK, this.CARDS_POSITIVE_FRONT];

    static bigList = [this.CAT, this.SHOE, this.STAR, this.DICE_1, this.DICE_2, this.DICE_3, this.DICE_4, this.DICE_5, this.DICE_6,
        this.F_0, this.F_1, this.F_2, this.F_3, this.F_4, this.F_5, this.F_6, this.F_7, this.F_8, this.F_9, this.F_10, this.F_11,
        this.F_12, this.F_13, this.F_14, this.F_15, this.F_16, this.F_17, this.F_18, this.F_19, this.F_20, this.F_21, this.F_22, this.F_23,
        this.F_24, this.F_25, this.F_26, this.F_27, this.F_28, this.F_29, this.F_30, this.F_31, this.F_32, this.F_33, this.F_34, this.F_35, this.F_36,
        this.F_37, this.F_38, this.F_39, this.FEA, this.QG, this.METRX, this.CV, this.TN];

    static images = new Map();
    static bigImages = new Map();

    static init() {
        this.list.forEach(element => {
            const image = new Image();
            image.src = `images/${element}`;
            this.images.set(element, image);
        });
        this.list.forEach(element => {
            const image = new Image();
            const bigElement = element
                .replace("property/", "property/big/")
                .replace("players/", "players/building/")
            image.src = `images/${bigElement}`;
            this.bigImages.set(element, image);
        });
    }

    static get(name) {
        if (this.images.has(name)) {
            return this.images.get(name);
        } else {
            throw new Error(`Image not found (${name})`);
        }
    }

    static getBig(name) {
        if (this.bigImages.has(name)) {
            return this.bigImages.get(name);
        } else {
            throw new Error(`Big image not found (${name})`);
        }
    }

}
