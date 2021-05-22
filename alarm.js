var t;
var c = 0;

function showTime(){    

    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 

    var time = h + ":" + m + ":" + s ;
    
    document.getElementById("MyClockDisplay").innerHTML = time;
    
    t = setTimeout(showTime, 500);

    if(c == 0){
        document.getElementById("inTime").onmouseleave = function(){stopTime(h,m,s)};
    }
    else{
        stopTime(h,m,s);
    }
}

function stopTime(h,m,s) {
    var h1 = parseInt(document.getElementById("Ahour").value);
    var m1 = parseInt(document.getElementById("Amin").value);
    var s1 = parseInt(document.getElementById("Asec").value);

    if(c==0) c++;

    if((!isNaN(h1) && h>h1)||(!isNaN(h1)&& isNaN(m1) && h===h1) || 
    (!isNaN(h1) && !isNaN(m1) && h===h1 && m>m1)||
    (!isNaN(h1) && !isNaN(m1) && isNaN(s1) && h===h1 && m===m1)||
    (!isNaN(h1) && !isNaN(m1) && !isNaN(s1) && h===h1 && m===m1 &&s>=s1)){
        document.getElementById("MyClockDisplay").style.color="red";
        clearTimeout(t);
    }
}

