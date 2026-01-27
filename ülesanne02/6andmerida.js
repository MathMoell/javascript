// Mathias Möll
// Kuupäev: 27.01.2026
// Ülessanne 2 (andmerida)

let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let osad = andmerida.split(",");
let mail = osad[3];
let ip = osad[5];
let usrnimi = mail.split("@")[0];

console.log("IP-aadress:", ip);
console.log("E-posti kasutajanimi:", usrnimi);