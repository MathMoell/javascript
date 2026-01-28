// Mathias Möll
// Kuupäev: 28.01.2026
// ülesanne 5: Tingimuslause IF


//1️ temperatuur
let temp = 18;

if (temp > 25) {
    console.log("palav ilm");
} else if (temp >= 15 && temp <= 25) {
    console.log("norm temp");
} else {
    console.log("Külm ilm");
}


//2️ Kasutajanime kontroll
let usrnam = "admin";

console.log(
    usrnam === "admin"
        ? "tervist admin"
        : "tervist külaline"
);


//3️ piletid
let piletityyp = "soodukaga pilet";
let age = 16;
let hind;

if (piletityyp === "tais hinnaga pilet") {

    if (age < 18) {
        hind = 10;
    } else if (age <= 64) {
        hind = 20;
    } else {
        hind = 15;
    } }

else if (piletityyp === "soodukaga pilet") {

    if (age < 18 || age >= 65) {
        hind = 8;
    } else {
        hind = 15;
    } }

console.log("pileti hind on", hind, "vietnami dong'i");