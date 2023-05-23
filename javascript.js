const display = document.querySelector(".input");

function clear(){
    eq = "";
    display.innerText = "";
    console.log("clear button clicked");
};

function backspace(){
    if ((display.innerText) === ""){
        return
    }
    display.innerText = display.innerText.slice(0,-1);
};

function read(str){
    if ((display.innerText === "") && (isNaN(str))) {
        return
    }
    if (isNaN(str)){
        eq = eq + display.innerText + str;
        display.innerText = "";
        return
    }   
};

function write(el){
    display.innerText = display.innerText + el.innerText;
};

function calculate(){
    eq = eq + display.innerText;
    if (isNaN(eq.charAt(eq.length-1))) {
        return
    }
    console.log(eq);
    let result = eval(eq);
    display.innerText = result;

    eq = "";    
};

let eq = "";
display.innerText = "";

document.querySelector(".operator-clear").addEventListener("click", function(){clear(eq)});
document.querySelector(".operator-delete").addEventListener("click", function(){backspace()});
document.querySelector(".operator-add").addEventListener("click", function(){read("+")});
document.querySelector(".operator-subtract").addEventListener("click", function(){read("-")});
document.querySelector(".operator-multiply").addEventListener("click", function(){read("*")});
document.querySelector(".operator-divide").addEventListener("click", function(){read("/")});
document.querySelector(".operator-equals").addEventListener("click", function(){calculate()});

const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(num => num.addEventListener("click", function(){write(this)}));


