class GameMechanic {
    static renderer = null;
    static descriptionField = null;
    static numberOfPlayers = null;
    static fields = [];
    static players = [];
    static activePlayer = 1;
    static tileDetail = null;
    static currentField = null;

    static getFieldById(id) {
        this.currentField = undefined;
        for (let element of this.fields) {
            if (element.id === id) {
                this.currentField = element;
            }
        }
    }

    static positiveDeck = null;
    static negativeDeck = null;

    static getTileDetails(id) {
        this.tileDetail = undefined;
        for (let element of TileData.tiles) {
            if (element.id === id) {
                this.tileDetail = element;
            }
        }
    }

    static init() {
        this.renderer = Renderer.getInstance(document.getElementById('monopolyCanvas'));
        ImageHandler.init();
        GameMechanic.initBoard();
        this.step_1();
    }

    static initBoard() {
        const CARD_WIDTH = GameTile.SIZE_A;
        const CARD_HEIGHT = GameTile.SIZE_B;

        for (let i = 0; i < 11; i++) {
            this.getTileDetails(21 + i);
            this.renderer.addElement(new GameTile(2 + i * (CARD_WIDTH + 2) + CARD_HEIGHT, 0, CARD_WIDTH, CARD_HEIGHT, `property/${21 + i}.png`, 21 + i, this.tileDetail));
        }
        for (let i = 0; i < 7; i++) {
            this.getTileDetails(19 - i);
            this.renderer.addElement(new GameTile(0, i * (CARD_WIDTH + 2) + CARD_HEIGHT, CARD_HEIGHT, CARD_WIDTH, `property/${19 - i}.png`, 19 - i, this.tileDetail));
        }
        for (let i = 0; i < 11; i++) {
            this.getTileDetails(11 - i);
            this.renderer.addElement(new GameTile(2 + i * (CARD_WIDTH + 2) + CARD_HEIGHT, 6.35 * CARD_HEIGHT, CARD_WIDTH, CARD_HEIGHT, `property/${11 - i}.png`, 11 - i, this.tileDetail));
        }
        for (let i = 0; i < 7; i++) {
            this.getTileDetails(33 + i);
            this.renderer.addElement(new GameTile(12.57 * CARD_WIDTH, i * (CARD_WIDTH + 2) + CARD_HEIGHT, CARD_HEIGHT, CARD_WIDTH, `property/${33 + i}.png`, 33 + i, this.tileDetail));
        }
        this.renderer.addElement(new CornerTile(9.44 * CARD_HEIGHT, 0, CARD_HEIGHT, CARD_HEIGHT, `property/${32}.png`, 32));
        this.renderer.addElement(new CornerTile(0 * CARD_HEIGHT, 0, CARD_HEIGHT, CARD_HEIGHT, `property/${20}.png`, 20));
        this.renderer.addElement(new CornerTile(9.44 * CARD_HEIGHT, 7 * (CARD_WIDTH + 2) + CARD_HEIGHT, CARD_HEIGHT, CARD_HEIGHT, `property/${0}.png`, 0));
        this.renderer.addElement(new CornerTile(0, 7 * (CARD_WIDTH + 2) + CARD_HEIGHT, CARD_HEIGHT, CARD_HEIGHT, `property/${12}.png`, 12));

        for (let i = 0; i < 40; i++) {
            const result = this.renderer.elements.find(a => a.id === i);
            this.fields.push(result);
        }

        this.invisiblePositiveDeck = new InvisibleTile(150, 150, 300, 150);
        this.renderer.addElement(this.invisiblePositiveDeck);

        this.positiveDeck = new Cards(150, 150, 300, 150, ImageHandler.CARDS_POSITIVE_BACK);
        this.renderer.addElement(this.positiveDeck);

        this.invisibleNegativeDeck = new InvisibleTile(880, 150, 300, 150);
        this.renderer.addElement(this.invisibleNegativeDeck);

        this.negativeDeck = new Cards(880, 150, 300, 150, ImageHandler.CARDS_NEGATIVE_BACK);
        this.renderer.addElement(this.negativeDeck);

        this.descriptionField = new Description(670, 600);
        this.renderer.addElement(this.descriptionField);

        this.invisibleDeck = new InvisibleTile(400, 500, 550, 300);
        this.renderer.addElement(this.invisibleDeck);

        this.positiveDeckStandBy = new Cards(400, 1500, 550, 300, ImageHandler.CARDS_POSITIVE_FRONT);
        this.renderer.addElement(this.positiveDeckStandBy);

        this.negativeDeckStandBy = new Cards(400, 1500, 550, 300, ImageHandler.CARDS_NEGATIVE_FRONT);
        this.renderer.addElement(this.negativeDeckStandBy);

        Die.dice.push(new Die(1, 1, 50, 50));
        Die.dice.push(new Die(1, 1, 50, 50));
        this.renderer.addElement(Die.dice[0]);
        this.renderer.addElement(Die.dice[1]);

        Die.diceStation = new InvisibleTile(650, 450, 100, 100);
        this.renderer.addElement(Die.diceStation);
        Die.dice[0].moveTo("DIE_MOVING", Die.diceStation);
        Die.dice[1].moveTo("DIE_MOVING", Die.diceStation);

        Cards.cardDrawStation = new InvisibleTile(650, 1450, 100, 100);

    }

    static step_1() {
        const kde = (event) => {
            if (!['2', '3', '4'].includes(event.key)) {
                this.descriptionField.setMessage("Csak 2-től 4-ig nyomj meg egy gombot.");
                return;
            }
            this.numberOfPlayers = Number(event.key);

            this.players.push(new Player(1, 10, 10, 50, 50, ImageHandler.QG));
            if (this.numberOfPlayers >= 2) this.players.push(new Player(2, 10, 10, 50, 50, ImageHandler.METRX));
            if (this.numberOfPlayers >= 3) this.players.push(new Player(3, 10, 10, 50, 50, ImageHandler.CV));
            if (this.numberOfPlayers >= 4) this.players.push(new Player(4, 10, 10, 50, 50, ImageHandler.TN));

            this.players.forEach(e => this.renderer.addElement(e));

            PlayerDetails.board = new PlayerDetails(1350, 20, 400, 700, this.players[this.activePlayer - 1]);
            this.renderer.addElement(PlayerDetails.board);

            this.step_2();
            document.removeEventListener('keydown', kde);
        }
        this.descriptionField.setMessage("Üdvözlünk a FEAPolyban. Hányan játszatok? Nyomd meg a számot (2-4).");
        document.addEventListener('keydown', kde);
    }

    static step_2() {
        const player = this.players[this.activePlayer - 1];
        this.descriptionField.setMessage(`${Player.NAMES[this.activePlayer]} következik. Dobáshoz nyomd meg a SPACE gombot.`);
        if (player.jail) {
            this.descriptionField.setMessage(`${Player.NAMES[this.activePlayer]} következik. Innen csak duplázással szabadulsz. Dobáshoz nyomd meg a SPACE gombot.`);
        }

        const diceRoll = (event) => {
            if (event.keyCode === 32) {
                document.removeEventListener('keydown', diceRoll);
                Sound.play(Sound.DICE);
                Die.dice.forEach(d => d.moving = true);
                setTimeout(function () {
                    Die.dice.forEach(d => d.moving = false);
                    setTimeout(function () {
                        Die.dice[0].moveTo("DIE_MOVING", Die.diceStation);
                        Die.dice[1].moveTo("DIE_MOVING", Die.diceStation);
                        GameMechanic.step_3();
                    }, 1000);
                }, 2000);
            }
        }
        document.addEventListener('keydown', diceRoll);
    }

    static step_3() {
        const player = this.players[this.activePlayer - 1];
        if (player.jail) {
            if (Die.dice[0].value === Die.dice[1].value) {
                player.jail = false;
            } else {
                const escape = window.confirm('Megint meghívtak egy körre, úgy néz ki még egy ideig itt maradsz. Szeretnél inkább fizetni egy kilépőt 15 $P-ért?');
                if (escape) {
                    player.sp -= 15;
                    player.jail = false;
                    alert('Kiengedtek a kocsmából.');
                }
                GameMechanic.step_nextPlayer();
                return;
            }
        }

        if (Die.dice[0].value === Die.dice[1].value) {
            // alert(`Újra ${Player.NAMES[this.activePlayer]} következik, duplát dobott!`);
            this.descriptionField.setMessage(`Újra ${Player.NAMES[this.activePlayer]} következik, duplát dobott!`);
        }

        if (player.currentField + Die.sum() > 39) {
            player.moveToFieldImmediately(0, true, () => GameMechanic.step_nextPlayer());
            player.sp += 50;
        } else {
            player.moveToField(player.currentField + Die.sum(), () => GameMechanic.step_draw());
        }
    }

    static step_draw() {
        let time = 0;

        if (Player.current().drawPositive) {
            Player.current().drawPositive = false;
            time = 8000;
            GameMechanic.positiveDeck.moveTo("POSITIVE_DRAW", Cards.cardDrawStation, true, () => {

                const rnd = Math.floor(Math.random() * CardType.positiveDeck.length);
                const selected = CardType.positiveDeck[rnd];
                GameMechanic.positiveDeckStandBy.setText(selected.text);
                Player.current().sp += selected.sp;
                if (selected.moveToField) Player.current().moveToFieldImmediately(selected.moveToField, true, () => { });
                GameMechanic.positiveDeckStandBy.moveTo("POSITIVE_DRAW", GameMechanic.invisibleDeck, true, () => {
                    setTimeout(function () {
                        GameMechanic.positiveDeckStandBy.moveTo("NEGATIVE_DRAW", GameMechanic.negativeDeckStandBy, true, () => {
                        });
                    }, time);
                });

                GameMechanic.positiveDeck.moveTo("POSITIVE_SHOW", GameMechanic.invisiblePositiveDeck, true, () => {
                });
            });
        }

        if (Player.current().drawNegative) {
            Player.current().drawNegative = false;
            time = 5000;
            GameMechanic.negativeDeck.moveTo("NEGATIVE_DRAW", Cards.cardDrawStation, true, () => {

                const rnd = Math.floor(Math.random() * CardType.negativeDeck.length);
                const selected = CardType.negativeDeck[rnd];
                GameMechanic.negativeDeckStandBy.setText(selected.text);
                Player.current().sp += selected.sp;
                if (selected.moveToField) Player.current().moveToFieldImmediately(selected.moveToField, true, () => { });
                GameMechanic.negativeDeckStandBy.moveTo("SHOW_SHOW", GameMechanic.invisibleDeck, true, () => {
                    setTimeout(function () {
                        GameMechanic.negativeDeckStandBy.moveTo("NEGATIVE_DRAW", GameMechanic.positiveDeckStandBy, true, () => {
                        });
                    }, time);
                });

                GameMechanic.negativeDeck.moveTo("NEGATIVE_DRAW", GameMechanic.invisibleNegativeDeck, true, () => {
                });
            });
        }

        setTimeout(function () {
            GameMechanic.step_nextPlayer();
        }, time);
    }

    static step_nextPlayer() {
        GameMechanic.getFieldById(Player.current().currentField);
        console.log(GameMechanic.currentField);
        if (!GameMechanic.currentField.owner && Player.current().sp >= GameMechanic.currentField.price) {
            let confirmation = confirm(`Szeretnél ${GameMechanic.currentField.price} $P-t költeni az erőforrásra?`);
            if (confirmation) {
                GameMechanic.currentField.owner = Player.current();
                Player.current().sp -= GameMechanic.currentField.price;
            }
        } else if (GameMechanic.currentField.owner && GameMechanic.currentField.owner !== Player.current()) {
            alert(`Tartozol ${GameMechanic.currentField.rent} $P-vel`);
            Player.current().sp -= GameMechanic.currentField.rent;
            GameMechanic.currentField.owner.sp += GameMechanic.currentField.rent;
        }

        if (Die.dice[0].value !== Die.dice[1].value) {
            this.activePlayer++;
        } else {
            alert(`Újra ${Player.NAMES[this.activePlayer]} következik, duplát dobott!`);
            // this.descriptionField.setMessage(`Újra ${Player.NAMES[this.activePlayer]} következik, duplát dobott!`);
        }
        if (this.activePlayer > this.numberOfPlayers) {
            this.activePlayer = 1;
        }

        PlayerDetails.board.setPlayer(this.players[this.activePlayer - 1]);

        let endgame = false;
        let fired = null;
        for (let element of GameMechanic.players) {
            if (element.sp <= 0) {
                endgame = true;
                fired = element;
            }
        }

        if (endgame) {
            alert(`Ó jaj, úgy tűnik egy project nagyon minuszos lett.. Ideje megválni a következőtől: ${Player.NAMES[fired.id]}`);
            if(GameMechanic.numberOfPlayers === 2) alert(`Nézzük hogyan zártak a projectek:\n${Player.NAMES[GameMechanic.players[0].id]}: ${GameMechanic.players[0].sp}\n${Player.NAMES[GameMechanic.players[1].id]}: ${GameMechanic.players[1].sp}`);
            if(GameMechanic.numberOfPlayers === 3) alert(`Nézzük hogyan zártak a projectek:\n${Player.NAMES[GameMechanic.players[0].id]}: ${GameMechanic.players[0].sp}\n${Player.NAMES[GameMechanic.players[1].id]}: ${GameMechanic.players[1].sp}\n${Player.NAMES[GameMechanic.players[2].id]}: ${GameMechanic.players[2].sp}`);
            if(GameMechanic.numberOfPlayers === 4) alert(`Nézzük hogyan zártak a projectek:\n${Player.NAMES[GameMechanic.players[0].id]}: ${GameMechanic.players[0].sp}\n${Player.NAMES[GameMechanic.players[1].id]}: ${GameMechanic.players[1].sp}\n${Player.NAMES[GameMechanic.players[2].id]}: ${GameMechanic.players[2].sp}\n${Player.NAMES[GameMechanic.players[3].id]}: ${GameMechanic.players[3].sp}`);
        } else {
            GameMechanic.step_2();
        }
    }
}
