// Mathias Möll
// Kuupäev: 27.01.2026
// matemaatika teeb mu peale valu

//1️ Sõidu aeg ja kaugus
let dist = 150;
let kiirus = 60;
let Aeg = dist / kiirus;

console.log("Sõidu aeg tundides:", Aeg);

//2️ Postituste kuvamine
let posts = 137;
let postsweb = 10;
let lehtedearv = Math.ceil(posts / postsweb);
let recent = posts % postsweb;

if (recent === 0) {
    recent = postsweb;
}

console.log("Lehtede arv:", lehtedearv);
console.log("Postituste arv viimasel lehel:", recent);

//3️ Serveri töökulu
let serverpwr = 400;
let ehind = 9.69;
let voolutarb = serverpwr / 1000;
let kulud = voolutarb * (ehind / 100);

console.log("Serveri töökulu ühe tunniga:", kulud.toFixed(4));

