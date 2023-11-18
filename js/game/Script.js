class Script {
    static get(fieldId) {
        switch (fieldId) {
            case 0: return () => {  }
            case 2: return () => { Sound.play(Sound.TOPPRIO); Player.current().drawNegative = true; }
            case 4: return () => { Player.current().sp -= 10; }
            case 7: return () => { Sound.play(Sound.LENNE_ITT_EGY_LEHETOSEG); Player.current().drawPositive = true; }
            case 12: return () => { Sound.play(Sound.KOCC); } // Ha börtönben vagy kivásárolhatod magad/dupla dobással jöhetsz ki
            case 17: return () => { Sound.play(Sound.TOPPRIO); Player.current().drawNegative = true; }
            case 22: return () => { Sound.play(Sound.NAGYON_NEHEZ_EZ_A_FELADAT_FEL_ORA); Player.current().drawPositive = true; }
            case 24: return () => { Sound.play(Sound.ANITA_STAR); }
            case 25: return () => { Player.current().sp -= 20; }
            case 32: return () => { Player.current().moveToFieldImmediately(12, true, ()=>{}); Player.current().jail = true; Player.current().currentField = 12; Player.current().movingField = 12; }
            case 33: return () => { Sound.play(Sound.TOPPRIO); Player.current().drawNegative = true; }
            case 36: return () => { Sound.play(Sound.LENNE_ITT_EGY_LEHETOSEG); Player.current().drawPositive = true; }
            case 38: return () => { Player.current().sp -= 20; }
        }
        return () => { console.log("No script"); };
    }
}
