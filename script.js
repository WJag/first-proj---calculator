var m = ""
var mt = ""
var temps = "" 
var counter = 0; 

// clear result
function clearScreen() {
 document.getElementById("result").value = "";
 counter = 0; 
}

// update pressed buttons & temp result
function display(value) {
 temps = document.getElementById("result").value += value;
 counter += 1; 
 //temps = document.getElementById("result").value; 
 //alert(temps);
 //alert(counter); 
}

// calculate result
function calculate() {
 var a = document.getElementById("result").value;
 //var b = eval(a);
//document.getElementById("result").value = b; 
var b = document.getElementById("temps").innerHTML;
alert(b);
}

//tem storage of the first number. 
function tempStorage() {
    
}

//memory result 
function addToMemmory() {
     mt = document.getElementById("result").value;
     m = eval(m+mt); 
     // clearScreen();
}

//clear memmory 
function clearMemmory() {
    m = "0"; 
}

// use memmory stored number
function showMemmory() {
    display(m);
}
