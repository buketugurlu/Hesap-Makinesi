const gorulenDeger = document.querySelector('.hesapMakinesi_input');
const buttons = document.querySelector('.hesapMakinesi_tuslar');

let gosterge = '0';
let firstValue = null;
let operator = null;
let secondValue = false;

updateDisplay();

function updateDisplay() {
    gorulenDeger.value = gosterge;
}

buttons.addEventListener('click', function (e) {
    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {
        handleOperator(element.value);
        updateDisplay();
        return;
    }
    if (element.classList.contains('decimal')) {
        inputOndalık();
        updateDisplay();
        return;
    }
    if (element.classList.contains('clear')) {
        temizle();
        updateDisplay();
        return;
    }

    inputSayı(element.value);
    updateDisplay();

});

function handleOperator(ikinciOperator) {
    const value = parseFloat(gosterge);
    if (operator && secondValue) {
        operator = ikinciOperator;
        return;
    }

    if (firstValue == null) {
        firstValue = value;
    }
    else if (operator) {
        const sonuc = hesapİslemi(firstValue, value, operator);
        gosterge = String(sonuc);
        firstValue = sonuc;
    }
    secondValue = true;
    operator = ikinciOperator;
    console.log(gosterge, firstValue, operator, secondValue);
}

function hesapİslemi(first, second, operator) {
    if (operator === '+') {
        return first + second;
    }
    else if (operator === '-') {
        return first - second;
    }
    else if (operator === '*') {
        return first * second;
    }
    else if (operator === '/') {
        return first / second;
    }

    return second;
}

function inputSayı(num) {
    if (secondValue) {
        gosterge = num;
        secondValue = false;
    }
    else {
        gosterge = gosterge === '0' ? num : gosterge + num;
    }
    console.log(gosterge, firstValue, operator , secondValue);
}

function inputOndalık() {
    if (!gosterge.includes('.')) {
        gosterge += '.';
    }

}
function temizle() {
    gosterge = '0';
}
