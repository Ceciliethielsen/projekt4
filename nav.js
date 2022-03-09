const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger");
 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
 
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    
    alert("Test for at se om js virker!");
    























//Data som kan blive søgt efter
//const resultater = [
  //  {name: 'multimediedesigner'},
    //{name: 'Personligt projekt'},
    //{name: 'studiejob'},

//]

//tilføjer event-listener, som venter på, at noget skal ske (fx klik, input mv)
//bruger queryselector til at hente knap ved class-navn og sætter det i en const
//whateverElement.addEventListener("click", (e) => {
    //const searchInput = document.querySelector(".input")

    //let value = e.target.value

    //if (value && value.trim().length > 0){
        //value = value.trim(). toLowerCase()
    //} else {}

//})


