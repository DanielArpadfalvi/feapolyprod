class Sound {
    static DICE = "dice.m4a";
    static ELEVATOR = "elevator.m4a";
    static KOCC = "kocc.m4a";
    static STEPS = "dice.m4a";
    static SZISSZ = "szissz.m4a";
    static LENNE_ITT_EGY_LEHETOSEG = "tibiProdFinal.wav";
    static NAGYON_NEHEZ_EZ_A_FELADAT_FEL_ORA = "nagyonNehezFelOra.wav";
    static TOPPRIO = "top_prio.m4a";
    static CSUSSZ = "csussz.m4a";
    static ANITA_STAR = "anitaStar.mp3";
    static DONKEY = "donkeyMove.wav";

    static play(name) {
        const audio = new Audio(`sounds/${name}`);
        audio.play();
    }
}