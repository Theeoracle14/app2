// Références des éléments HTML
var back = document.getElementById("back");
var download = document.getElementById("download");
var close = document.getElementById("close");
var app1 = document.getElementById("app1");
var app1BtnDesk = document.getElementById("app1BtnDesk");
var app1Btn = document.getElementById("app1Btn");
var dwnload = document.getElementById("dwnload");
var dwnload1 = document.getElementById("dwnload1");

// Fonction pour fermer le modal
function closeModal() {
    // Cache le modal à l'aide de CSS 
    // Réinitialise les variables
    back.style.display = "none";
}

// Fonction pour ouvrir le modal
function openModal() {
    // Affiche le modal à l'aide de CSS 
    // Réinitialise les variables
    back.style.display = "block";
}

// Ajout des écouteurs d'événements pour le premier modal
download.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

// Ajout des écouteurs d'événements pour le second modal
app1Btn.addEventListener("click", openModal);
app1BtnDesk.addEventListener("click", openModal);
dwnload.addEventListener("click", openModal);
dwnload1.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
