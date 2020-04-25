const display = document.getElementById('display');
var num1 = 0;
var num2 = 0;
var operater = "";
var display_ans = false;

display.value = "0";

function select(btn) {
    var no = display.value;

    if(btn === ".") {
        display.value += btn;
    }else {
        if(no === "0" || display_ans) {
            display_ans = false;
            display.value = btn;
        } else {
            display.value += btn;
        }

    }
}

function clear_display() {
    display.value = "0";
    operater = "";
}

function operation(ope) {
    operater = ope;
    num1 = parseFloat(display.value);
    display.value = "0";
}

function ans() {
    num1 == 0 ? display.value = display.value : num2 = parseFloat(display.value);
    display_ans = true;

    switch(operater) {
        case "+":
            display.value = num1 + num2;
            break;

        case "-":
            display.value = num1 - num2;
            break;

        case "*":
            display.value = num1 * num2;
            break;

        case "/":
            display.value = num1 / num2;
            break;

        case "%":
            display.value = num1 % num2;
            break;
    }
    operater = "";
}