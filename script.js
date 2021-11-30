var m = "";
var mt = "";
let count = 0;
let tempArray = ['empty','empty','empty','empty','empty']; 
let valueToInsert = ""; 


// clear result
function clearScreen() {
document.getElementById("result").value = "";
clearArray();
//tempArray[1] = 'empty'; tempArray[2] = 'empty';
//tempArray[3] = 'empty'; tempArray[4] = 'empty';
count = 0; 
 
}

// update pressed buttons
function display(value) {
 valuedot=value;
 valuetest = parseInt(value);
 
 if (count < 5 ) {
        if (valuetest >= '0' || valuetest <= '9'|| valuedot == '.') {
            valueToInsert +=value;
            if (valuedot != '.') {
                tempArray[count] = valueToInsert; 
                document.getElementById("result").value += value;
            }else if (valuedot == '.') {
                tempArray[count] = valueToInsert;
                document.getElementById("result").value += value;
            }  
        } else if (isNaN(valuetest) && valuedot !='.') {
            if (count>=4) {
                    alert('maximum number of operations reached - press “=“ button');
            }else {
                    count = count +1;
                    tempArray[count] = value;
                    document.getElementById("result").value += value;
                    count = count +1;
                    valueToInsert = "";     
            }
        }
    }
    
    console.log(tempArray); 
    // alert(tempArray);
   //alert(parseFloat(tempArray[0])); 
}

//array update to calclate without eval
function updateA(a, b) {
if (a=='*' && b=='+') {
    eq = parseFloat(tempArray[0],2) * parseFloat(tempArray[2],2) + parseFloat(tempArray[4],2);
     // alert('* > +');
}else if (a=='*' && b=='-') {
    eq = parseFloat(tempArray[0],2) * parseFloat(tempArray[2],2) - parseFloat(tempArray[4],2);
   //alert('* > -');
}else if (a=='/' && b=='+') {
    eq = parseFloat(tempArray[0],2) / parseFloat(tempArray[2],2) + parseFloat(tempArray[4],2);
    //alert('/ > +');    
}else if (a=='/' && b=='-') {
    eq = parseFloat(tempArray[0],2) / parseFloat(tempArray[2],2) - parseFloat(tempArray[4],2);
   //alert('/ > -');
}else if (a=='+' && b=='*') {
    eq = parseFloat(tempArray[2],2) * parseFloat(tempArray[4],2) + parseFloat(tempArray[0],2);
    //alert('+ > *');
}else if (a=='+' && b=='/') {
    eq = parseFloat(tempArray[2],2) / parseFloat(tempArray[4],2)+ parseFloat(tempArray[0],2);
    //alert('+ > /');
}else if (a=='-' && b=='*') {
    eq = parseFloat(tempArray[2],2) * parseFloat(tempArray[4],2);
    eq = parseFloat(tempArray[0],2) - eq;
    //alert('- > *');
}else if (a=='-' && b=='/') {
    eq = parseFloat(tempArray[2],2) / parseFloat(tempArray[4],2);
    eq = parseFloat(tempArray[0],2) - eq;
    //alert('- > /');
    
}else if (a=='+' && b =='empty') {
    eq = parseFloat(tempArray[0],2) + parseFloat(tempArray[2],2);
   //alert('just +');
}else if (a=='-' && b =='empty') { 
   eq = parseFloat(tempArray[0],2) - parseFloat(tempArray[2],2);
    //alert('just -');
}else if (a=='*' && b =='empty') {
    eq = parseFloat(tempArray[0],2) * parseFloat(tempArray[2],2);
    //alert('just *');
}else if (a=='/' && b =='empty') {
    eq = parseFloat(tempArray[0],2) / parseFloat(tempArray[2],2);
    //alert('just /');

}else if (a=='+' && b =='-') {
    eq = parseFloat(tempArray[0],2) + parseFloat(tempArray[2],2) - parseFloat(tempArray[4],2);
}else if (a=='-' && b =='+') {
    eq = parseFloat(tempArray[0],2) - parseFloat(tempArray[2],2) + parseFloat(tempArray[4],2);    
}
        tempArray[0] = eq;
        count=0;
        document.getElementById("result").value = eq;
        clearArray(); 
}

//calculate result
function calculate() {
        //updateArray();
        //alert('before update');
        updateA(tempArray[1],tempArray[3]);
        //alert('ufter update');
}

function clearArray() {    
        tempArray[1] = 'empty'; tempArray[2] = 'empty';
        tempArray[3] = 'empty'; tempArray[4] = 'empty';
}

//memory result 
function addToMemmory() {
       mt=tempArray[0];
       m = m+mt; 
}

//clear memmory 
function clearMemmory() {
    m = "0"; 
}

// use memmory stored number
function showMemmory() {
    display(m);
}


//understand why switch didnt worked - currentely irrelevant
function updateArray() {
    let eq;
       // switch (tempArray[1],tempArray[3]) {
          switch ('foperator','soperator') {  
            case '*','+' : 
            eq = parseInt(tempArray[0]) * parseInt(tempArray[2])+parseInt(tempArray[4]);
            //alert (eq); 
            alert('multi than plus');            
            break;
            
            case '*','-' : 
            eq = parseInt(tempArray[0]) * parseInt(tempArray[2])-parseInt(tempArray[4]);
            alert('multi > minus');
            break;
            
            case '/','+' : 
            eq = parseInt(tempArray[0]) / parseInt(tempArray[2])+parseInt(tempArray[4]);
            alert('devide > plus');
            break;
            
            case '/','-' : 
            eq = parseInt(tempArray[0]) / parseInt(tempArray[2])-parseInt(tempArray[4]);
            alert('devide > minus');
            break;
            
            case '+','*' : 
            eq = parseInt(tempArray[2]) * parseInt(tempArray[4])+parseInt(tempArray[0]);
            //alert(eq);
            alert('plus > multi');            
            break;
            
            case '-','*' : 
            eq = parseInt(tempArray[2]) * parseInt(tempArray[4]);
            eq = parseInt(tempArray[0]) - eq;
            alert('minus > multi');
            break;
            
            case '+','/' : 
            eq = parseInt(tempArray[2]) / parseInt(tempArray[4])+parseInt(tempArray[0]);
            alert('plus > divide');            
            break;
            
            case '-','/' : 
            eq = parseInt(tempArray[2]) / parseInt(tempArray[4]);
            eq = parseInt(tempArray[0]) - eq;
            alert('minus>divide');            
            break;
            
            case '+','empty' : 
            eq = parseInt(tempArray[0]) + parseInt(tempArray[2]);
            alert('just plus');            
            break;
 
            case '-','empty' : 
            eq = parseInt(tempArray[0]) - parseInt(tempArray[2]);
            alert('just minus');            
            break;
            
            case '*','empty' : 
            eq = parseInt(tempArray[0]) * parseInt(tempArray[2]);
            alert('just multi');            
            break; 
            
            case '/','empty' : 
            eq = parseInt(tempArray[0]) / parseInt(tempArray[2]);
            alert('just divide');            
            break; 
        }

    alert(eq);
    tempArray[0]= eq;
    document.getElementById("testline").value = eq;
}

// old calculate result
function calculate1() {
 var a = document.getElementById("result").value;
 var b = eval(a);
 document.getElementById("result").value = b; 
 var c = document.getElementById("testline").value; 
 console.log("slava");
// math.evaluate(c);
 console.log(c);
 console.log(a);
}
