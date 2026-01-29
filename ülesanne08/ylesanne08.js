//Mathias Möll
//Kuupäev: 28.01.2026
//Ülesanne 8: money

let munt = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let ainult = [];
let i = 0;
let summa = 0;

while (i < munt.length) {

    if (munt[i] > 0) {
        ainult.push(munt[i]);
        summa += munt[i];
    }
    i++; }

console.log("Münte kokku:", ainult.length);
console.log("Müntide summa:", summa);
console.log("Mündid:", ainult);
