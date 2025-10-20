const display = document.getElementById("display");
let resultdisplayed = false;

function todisplay(input){
    if (resultdisplayed){
        display.value = input;
        resultdisplayed = false;
    } else {
        display.value += input;
    }
    
}

function cleardisplay(){
    display.value = "";
}

function equal() {
    try{
        display.value = eval(display.value);
        resultdisplayed = true;
    }
    
    catch(error){
        display.value = "Error";
    }
    

}