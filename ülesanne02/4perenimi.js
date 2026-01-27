// Mathias Möll
// Kuupäev: 27.01.2026
// Ülessanne 2 (perekonna nimi)

let nimi = "Möll, Mathias";
let koma = nimi.indexOf(",");
let pnimi = nimi.substring(0, koma);
let pnimiSuur = pnimi.toUpperCase();

console.log("Perenimi suurtähtedega:", pnimiSuur);
console.log("Perenime pikkus:", pnimi.length);