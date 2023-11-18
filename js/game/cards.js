class CardType {
    static positiveDeck = [{
        text: "Szereztél egy csokit a\nHR irodából, kapsz\n 10 storypoint-ot",
        moveToField: null,
        sp: 10
    },
    {
        text: "Elindult egy Testnavigátor\npilot projekt, ezért minden\nprojekt kap 10 storypoint-ot",
        moveToField: null,
        sp: 10
    },
    {
        text: "Beléptél a rendszergazda szobába\nés belegabalyodtál a kábelekbe, de sikerült\nkimásznod belőle, ezért kapsz 5 storypontot.",
        moveToField: null,
        sp: 5
    },
    {
        text: "Gyuri megkeresett egy üzleti\nigénnyel, ezért 15 storypointot kapsz.",
        moveToField: null,
        sp: 15
    },
    {
        text: "Józsi segít az egyetemi háziban,\nígy több időd maradt programozni,\nezért jár 10 storypont.",
        moveToField: null,
        sp: 10
    },
    // {
    //   text: "Gyuri rázendít a kedvenc zenéjére, amitől megtáltosodsz és jól halad a projekt. Lépj előre 3 mezőt.",
    //   moveToField: null,
    //   sp: 0
    // },
    // {
    //   text: "Az éves értékelés jól ment, ezért mindenkitől kapsz x storypointot",
    //   moveToField: null,
    //   sp: 0
    // },
    // {
    //   text: "Ez egy két órás feladat lépj előre 2 mezőt.",
    //   moveToField: null,
    //   sp: 0
    // },
    {
        text: "Árvai Zoli 3D figurákat nyomtatott\nneked, ezért effektívebben\ndolgozol, kapsz 5 sp-t.",
        moveToField: null,
        sp: 5
    },
    {
        text: "Megkóstoltad Gyuri 3 éves palacsintáját\nettől szuper fejlesztővé váltál és\nkapsz 20 sp-t, de lépj a Gyuri mezőre!",
        moveToField: 37,
        sp: 20
    },
    {
        text: "Annyira jól laktál a céges ebéden, hogy\nvacsoráznod se kell, helyette dolgozhatsz,\nígy kapsz 10 sp.",
        moveToField: null,
        sp: 10
    },
    {
        text: "Elkészültek a havi bérpapírok, ezért\nbe kell menned az irodába, lépj az\nAnita mezőre.",
        moveToField: 24,
        sp: 0
    },
    {
        text: "Lépj az Árvai Zoli mezőre\nés kapsz egy új monitort.",
        moveToField: 15,
        sp: 0
    }
    ];

    static negativeDeck = [
        {
            text: "A hűtő tele van piával, bonts\negy sört és kimaradsz egy körből",
            moveToField: 28,
            sp: 0
        },
        {
            text: "Egy csótányra bukkantál a\nWC-ben, ezért kimaradsz\negy körből",
            moveToField: null,
            sp: 0
        },
        {
            text: "Anita elkapott, hogy még\nnem töltötted ki a jelenlétit,\nezért 10 storypontot fizetned kell.",
            moveToField: null,
            sp: -10
        },
        {
            text: "Irány a Blues! Te fizeted\naz első kört, -15 sp",
            moveToField: 12,
            sp: -15
        },
        {
            text: "Regressziós tesztelés során sok\nbugot találtak, veszítettél\n10 storypointot.",
            moveToField: null,
            sp: -10
        },
        {
            text: "Csapatépítőn véletlen leöntöttétek a\nfalat, amíg takarítod kimaradsz\negy körből.",
            moveToField: null,
            sp: 0
        },
        {
            text: "Megjött a friss gyümölcs, amíg\nhámoztad, addig más elvégezte\na feladatod, ezért levonunk tőled 5 sp-t.",
            moveToField: null,
            sp: -5
        },
        {
            text: "Augusztusban elromlott a légkondi,\nezért a munka lassabban halad, veszítettél\n20 storypointot.",
            moveToField: null,
            sp: -20
        },
        {
            text: "Rendkívüli szabit vettél ki,\nezért kimaradsz egy körből.",
            moveToField: null,
            sp: 0
        },
        {
            text: "Megtalálták a penészes kajád, ezt nem\nlehet kidobni az irodában, vidd le a\nnagykukába, ehhez lépj a Lift mezőre.",
            moveToField: 0,
            sp: 0
        },
        {
            text: "Még éppen sikerült masszázs\nidőpontot foglalnod, de a kiesett\nidő miatt kimaradsz egy körből.",
            moveToField: null,
            sp: 0
        },
        {
            text: "Hanga tervezett új felületeket,\nde nem tetszik neki ezért veszítesz 5 sp-t.",
            moveToField: null,
            sp: -5
        },
        {
            text: "Elkényelmesedtél a babzsákban,\nnem tudsz kikelni, buktál 5 storypointot.",
            moveToField: null,
            sp: -5
        },
        {
            text: "Hangosan meetingelnek melletted,\nnem tudsz koncentrálni így\nelveszítettél 15 sp-t.",
            moveToField: null,
            sp: -15
        },
        {
            text: "Robi ugrált a liftben, így\nlegalább egy félórára beragadtatok\nveszítettél 10 sp-t.",
            moveToField: null,
            sp: -10
        },
        {
            text: "Egész délután kamerával kell\nmeetingelned, ettől annyira megfeszülnek az\narcizmaid, hogy kimaradsz egy körből.",
            moveToField: null,
            sp: 0
        },
        {
            text: "Megkóstoltad Gyuri 3 éves\npalacsintáját ezért már csak hálni jár beléd\na lélek, veszítesz 20 sp-t. Lépj\na kávégép mezőre!",
            moveToField: 28,
            sp: -20
        }
    ]
}
