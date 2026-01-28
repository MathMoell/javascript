// Mathias Möll
// Kuupäev: 28.01.2026
// Ülesanne 6: switch-case


//1️ (+/-/0)
let num = -5;
let tulem;

switch (true) {
    case (num > 0):
        tulem = "NR on positiivne";
        break;
    case (num < 0):
        tulem = "NR on negatiivne";
        break;
    default:
        tulem = "NR on null"; }

console.log(tulem);


//2️ Restoran lauad
let bronn = 4;
let laud;

switch (bronn) {
    case 1:
    case 2:
        laud = "laud kahele inimesele";
        break;
    case 3:
    case 4:
        laud = "laud neljale inimesele";
        break;
    case 5:
    case 6:
        laud = "laud kuuele inimesele";
        break;
    default:
        laud = "suur laud"; }

console.log(laud);
