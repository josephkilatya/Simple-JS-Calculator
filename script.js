let num1 = document.getElementById("num1-el").innerText;
let num2 = document.getElementById("num2-el").innerHTML;
let output = document.getElementById("ans-el");

let result = 0 // initial value in output

function add(){
    let result = num1 + num2;
    output.innerHTML = "Answer is:" + result;
}

function sub(){
    let result = num1 - num2;
    output.innerHTML = "Answer is" + result;
}

function div(){
    let result = num1 / num2;
    output.innerHTML = "Answer is" + result;
}

function mult(){
    let result = num1 * num2;
    output.innerHTML = "Answer is" + result;
}