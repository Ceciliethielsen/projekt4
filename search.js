//Cecilies JS
alert("Under Construction!")
function cdtd(){
    var countdown = new Date ("July 26, 2022 08:00:00");
    var now = new Date ();
    var timeDiff = countdown.getTime() - now.getTime();
    if (timeDiff <= 0){
        clearTimeout(timer);
        document.write("Under construction");
    }

    var seconds = Math.floor (timeDiff/1000);
    var minutes = Math.floor (seconds/60);
    var hours = Math.floor (minutes/60);
    var days = Math.floor (hours/24);
    hours %= 24;
    minutes %= 60;
    seconds %=60;

    document.getElementById("daysbox").innerHTML = days;
    document.getElementById("hoursbox").innerHTML = hours;
    document.getElementById("minsbox").innerHTML = minutes;
    document.getElementById("secsbox").innerHTML = seconds;

    var timer = setTimeout('cdtd()',1000);
}

//Cecilies JS slut