var m = ""
var mt = ""

// clear result
function clearScreen() {
 document.getElementById("result").value = "";
}

// update pressed buttons & temp result
function display(value) {
 document.getElementById("result").value += value;
}

// calculate result
function calculate() {
 var a = document.getElementById("result").value;
 var b = eval(a);
 document.getElementById("result").value = b; 
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