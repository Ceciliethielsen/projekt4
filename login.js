var objPeople = [
    { 
    username: "jokh38987@edu.ucl.dk",
    password: "123"
}, 

{ 
    username: "joni38150@edu.ucl.dk",
    password: "123"
}, 

{ 
    username: "cmft20613@edu.ucl.dk",
    password: "123"
}, 


{ 
    username: "mvol38812@edu.ucl.dk",
    password: "123"
}, 


{ 
    username: "mjsl38634@edu.ucl.dk",
    password: "123"
}, 

{ 
    username: "spmo40329@edu.ucl.dk ",
    password: "123"
}, 

]

function getInfo() {
var username = document.getElementById("username").value
var password = document.getElementById("password").value

for (i = 0; i < objPeople.length; i++){
    if(username==objPeople[i] .username && password == objPeople [i] .password) {
        alert(username  + "login gennemført")
        return false;
}
else {
    
}

}
}
