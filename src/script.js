document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible2"); //Definerer klasse som skal bli påvirket av koden. Kan bruke "querySelectorAll" hvis man vil at koden skal påvirke flere klasser.
    for (var i = 0; i < coll.length; i++) { //Repeterer for hver klasse i coll.
        coll[i].addEventListener("click", function() { //Aventer et klikk. Når den merker et klikk på det designerte området aktiverer den resten av koden.
            this.classList.toggle("active"); //Leger til "active" statusen til klassen for å aktivere, i dette tilfellet, knappen.
            var content = this.nextElementSibling; //Passer på at "content"-et til den "collapsible" knappen blir aktivert.
            var parent = this.parentElement; //Gjør sån at parent elementet ikke blir støre bare fordi knappen åpner seg.
            if (parent.style.maxHeight) {
                parent.style.maxHeight = null;
            } else {
                parent.style.maxHeight = content.scrollHeight + 15 + "px"; //content.scrollHeight sjekker høyden til elementet og returnerer det som en int. Dermed blir 15 lagt til og det blir gjort om til pixler ved den siste adderte "px" stringen.
            }
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});