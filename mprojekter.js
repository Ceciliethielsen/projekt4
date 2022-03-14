//Cecilies JS start
//alert("Velkommen til dine projekter!");

//Dette er en If-Else funktion(kontrolstruktur), som gør brug af en fast variabel, her "hour", og en varierende variabel, som er "greetings"
const hour = new Date().getHours(); 
let greeting;

if (hour < 10) {
  greeting = "Godmorgen! Du har ingen projekter endnu. Vi glæder os til at se alle dine geniale projekter, og hjælpe dig med at opbevare og finde rundt i dem på denne side!";
}

else if (hour < 18) {
    greeting = "Goddag! Du har ingen projekter endnu. Vi glæder os til at se alle dine geniale projekter, og hjælpe dig med at opbevare og finde rundt i dem på denne side!";
}

else {
  greeting = "Godaften! Du har ingen projekter endnu. Vi glæder os til at se alle dine geniale projekter, og hjælpe dig med at opbevare og finde rundt i dem på denne side!";
}

document.getElementById("hejprojekter").innerHTML = greeting;

//Her er der ved brug af objekter og operatorer skrevet noget tekst på siden
let answer1 = "Har du fået en genial ide?";
let answer2 = "Mangler du blot nogle andres kompetencer til at føre din ide til døren?";
let answer3 = "Så lav et opslag!";
let answer4 = "Når du har fået kontakt med den perfekte samarbejdspartner";
let answer5 = "Så vil du kunne se projektet, deltagere og aftaler lige her!";

document.getElementById("findkompetencer").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3 + "<br>" + 
answer4 + "<br>" + 
answer5;

//Array og loop lavet for JS skyld - knapper skifter farve
var colors = ["black", "white", "#00454E" , "#F1C8C0"];
        
    function changeColor(element, color){
        element.style.backgroundColor = color;
    }
    function printColors(){
        var p = document.getElementById('colorsParagraph');

        //dette er et loop. "i" bliver brugt, da det er vores index vi altid vil starte ved og index er altid = 0
        for(i = 0; i < colors.length; i++)
        p.innerHTML += colors[i] + ", ";
        }
//Cecilies JS slut
