let lengthTxt = document.getElementById("length-txt");
let volumeTxt = document.getElementById("volume-txt");
let massTxt = document.getElementById("mass-txt");
let formConverter = document.getElementById("form-converter");

let total = 0;

function getVal() {
    let valueElVal = document.getElementById("value-el").value;
    return valueElVal;
}

formConverter.addEventListener("submit", function (event) {
    event.preventDefault();
    getVal();
    displayCalc();
});

//Meter to feet
function calcM2Ft() {
    total = getVal() * 3.281;
    return total.toFixed(3);
}

function calcFt2M() {
    total = getVal() / 3.281;
    return total.toFixed(3);
}

function calcL2Gal() {
    total = getVal() * 3.785;
    return total.toFixed(3);
}

function calcGal2L() {
    total = getVal() / 3.785;
    return total.toFixed(3);
}

function calcKg2Lbs() {
    total = getVal() * 2.205;
    return total.toFixed(3);
}

function calcLbs2Kg() {
    total = getVal() / 2.205;
    return total.toFixed(3);
}

function displayCalc() {
    lengthTxt.textContent = `${getVal()} meters = ${calcM2Ft()} feet | ${getVal()} feet = ${calcFt2M()} meters`;
    volumeTxt.textContent = `${getVal()} liters = ${calcL2Gal()} gallons | ${getVal()} gallons = ${calcGal2L()} liters`;
    massTxt.textContent = `${getVal()} kilos = ${calcKg2Lbs()} pounds | ${getVal()} pounds = ${calcLbs2Kg()} kilos`;
}

displayCalc();