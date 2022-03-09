 alert("Test for at se om js virker!");

    var burgerMenu = document.getElementById('burgermenu');
    var overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click',function(){
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });
