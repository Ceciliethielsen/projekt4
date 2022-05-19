//alert("tjek om js virker!");
//Cecilie JS start
  /*Herunder er burgermenu lavet ved brug af "getElementById", som er hentet fra DOM. 
  */
      var burgerMenu = document.getElementById('burgermenu');
      var overlay = document.getElementById('menu');
      burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
      });

  //Herunder er kommentarboks lavet ved brug af "getElementById", som også er hentet fra DOM.
      var send= document.getElementById("post");
      send.addEventListener("click", function(){
        var commentBoxValue= document.getElementById("comment-box").ariaValueMax;
        
        var li = document.createElement("li");
        var text = document.createTextNode(commentBoxValue);
        li.appendChild(text);
        document.getElementById("unordered").appendChild(li);

      });
//Cecilies JS slut
