console.log("I'm alive");

console.log("Sostituito il primo elemento con il tag -h4- il contenuto");
document.getElementsByTagName("H4")[0].innerHTML = "Made with JavaScript";  // Non funziona se non specifico quale h4 prendere

console.log("Sostituito il primo elemento con tag -h4- del footer");
document.getElementsByTagName("H4")[1].innerHTML = "Made with JavaScript";

console.log("Sostituito l'ultimo elemento con tag -h4- del footer");
document.getElementsByTagName("H4")[3].innerHTML = "Made with JavaScript"; 

console.log("Sostituito ad elemento con id -prova- il contenuto");
document.getElementById("prova").innerHTML = "New Big h1 with JavaScript";