let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}


function clearDisplay() {
    display.innerText = "0";
}


function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace(/x/g, "*"));
    } catch (error) {
        display.innerText = "Error";
    }
}

function backspace() {
    let currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}