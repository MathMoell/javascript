// Mathias Möll
// Kuupäev: 28.01.2026
// Ülesanne 9: Funktsioonid


//1️ funktsioonid
function minemis() {
    console.log("Mathias"); }
minemis();

const munimi = () => {
    console.log("Mathias"); };
munimi();


//2️ kuupäev lembitu rahva keeles :)
function kuupaevEesti(kuupaev) {
    let osad = kuupaev.split(".");
    let paev = osad[0];
    let kuu = parseInt(osad[1]);

    let kuud = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember" ];

    console.log(paev + ". " + kuud[kuu - 1]); }

kuupaevEesti("19.07.23");

//3️ Teadmata hulk arve
function Kokku() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; }

    let keskmine = sum / arguments.length;

    console.log("koguarv:", arguments.length);
    console.log("keskmine:", keskmine); }

Kokku(5, 10, 15, 20);

//4️ sala sõnum
const salajaneSonum = sonum => {
    let tulem = "";
    let vokaalid = "aeiouõäöüAEIOUÕÄÖÜ";

    for (let i = 0; i < sonum.length; i++) {
        if (vokaalid.includes(sonum[i])) {
            tulem += "*";
        } else {
            tulem += sonum[i]; } }

    return tulem; };

console.log(salajaneSonum("Tervist maailm"));


//5️ "erilised" nimed
const uninimed = nimed => {
    let fin = [];

    for (let i = 0; i < nimed.length; i++) {
        if (!fin.includes(nimed[i])) {
            fin.push(nimed[i]); } }

    return fin; };

let nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
console.log(uninimed(nimed));