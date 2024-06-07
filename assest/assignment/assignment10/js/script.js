const displayValue = $('.display');
var functionValue;
var firstValue;
var secondValue;

function display(input){
    displayValue.val(displayValue.val() +input);
}

function fn(fn){
    firstValue = displayValue.val();
    displayValue.val('');
    functionValue =fn;
}

function Additions() {
    if (parseInt(firstValue)>=0) {
        let s = displayValue.val(parseInt(firstValue) + parseInt(secondValue));
    }else {
        displayValue.val('error');
    }
}

function Minus() {
    if (parseInt(firstValue)>=0) {
        let s = displayValue.val(parseInt(firstValue) - parseInt(secondValue));
    }else {
        displayValue.val('error');
    }
}

function Multiply() {
    if (parseInt(firstValue)>=0) {
        let s = displayValue.val(parseInt(firstValue) * parseInt(secondValue));
    }else {
        displayValue.val('error');
    }
}

function Divides() {
    if (parseInt(firstValue)>=0) {
        let s = displayValue.val(parseInt(firstValue) / parseInt(secondValue));
    }else {
        displayValue.val('error');
    }
}

function calculate(){
     secondValue=displayValue.val();

    if (functionValue ==='+'){
        Additions();
    }else if (functionValue ==='-'){
        Minus();
    }else if (functionValue ==='*'){
        Multiply();
    }else if (functionValue ==='/'){
        Divides();
    }
}
function ac(){
    let s = displayValue.val();
    s=s.slice(0,-1);
    displayValue.val(s);
}
function clearDisplay(){
    displayValue.val('');
    firstValue=null;
    secondValue=null;
}