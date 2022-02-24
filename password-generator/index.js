// create an array to hold all possible characters
let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "u", "V", "W", "X", "Y", "Z", "?", "+", "@", "!", "&", "$", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// button to generate 4 random passwords
let passwordBtn = document.getElementById("password-btn");
let form = document.getElementById("form");
let passwordLength;
let passwordLengthVal;


function generatePasswords(){
    // set password length
    passwordLength = document.getElementById("password-length");
    passwordLengthVal = passwordLength.value;
    let randomChar;
    let password = "";
    for (let i = 0; i < passwordLengthVal; i++) {
        randomChar = Math.floor(Math.random() * char.length);
        password += char[randomChar];
    }
    if(passwordLengthVal <= 30){
        return password
       
    }else {
        return "30 max characters"
    }
}

// display passwords
function displayData() {
    let password1 = document.getElementById("password-1");
    let password2 = document.getElementById("password-2");
    let password3 = document.getElementById("password-3");
    let password4 = document.getElementById("password-4");
    password1.textContent = generatePasswords();
    password2.textContent = generatePasswords();
    password3.textContent = generatePasswords();
    password4.textContent = generatePasswords();
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    displayData();
})

generatePasswords()
displayData()