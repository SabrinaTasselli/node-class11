var mailData = false; 
var passwordData = false;
/* e-mail Input Validation*/
var eMailValidation = document.getElementById("mailinput");
eMailValidation.addEventListener("blur", eMail);
function eMail() {
    var eMailValidationInput = document.getElementById("mailinput").value;
    if (eMailValidationInput == "") {
        document.getElementById("emailvalidation").innerHTML = "e-mail is missing";
        document.getElementById("emailvalidation").style.textAlignLast = "right";
        document.getElementById("emailvalidation").style.color = "red";
        return mailData = false;
    } else {
        var eMailIndexOf = eMailValidationInput.indexOf("@");
        var eMailIndexOfTwo = eMailValidationInput.indexOf(".com");
        if (eMailIndexOf != -1 && eMailIndexOfTwo != -1) {
            document.getElementById("emailvalidation").innerHTML = "Ok!";
            document.getElementById("emailvalidation").style.textAlignLast = "right";
            document.getElementById("emailvalidation").style.color = "green";
            return mailData = true;
        } else {
            document.getElementById("emailvalidation").innerHTML = "The e-mail is not valid";
            document.getElementById("emailvalidation").style.textAlignLast = "right";
            document.getElementById("emailvalidation").style.color = "red";
            return mailData = false;
        }
    }
};
eMailValidation.addEventListener("focus", eMailEmpy);
function eMailEmpy() {
    var eMailValidationInput = document.getElementById("mailinput").value;
    if (eMailValidationInput == true);
    document.getElementById("emailvalidation").innerHTML = "";
};

/* Password Input Validation*/
var passwordValidation = document.getElementById("passwordinput");
passwordValidation.addEventListener("blur", password);
function password() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    if (passwordValidationInput == "") {
        document.getElementById("passwordvalidation").innerHTML = "Password is missing";
        document.getElementById("passwordvalidation").style.textAlignLast = "right";
        document.getElementById("passwordvalidation").style.color = "red";
        return passwordData = false;
    } else {
        var conditionOne = /[a-z]/g;
        var passwordIndexOfLettersLowerCase = passwordValidationInput.match(conditionOne);
        var conditionTwo = /[0-9]/g;
        var passwordIndexOfNumbers = passwordValidationInput.match(conditionTwo);
        var conditionThree = /[A-Z]/g;
        var passwordIndexOfLettersUperCase = passwordValidationInput.match(conditionThree);
        if (passwordValidationInput.length >= 8 && passwordIndexOfLettersLowerCase != -1 && passwordIndexOfNumbers != -1 && passwordIndexOfLettersUperCase != -1) {
            document.getElementById("passwordvalidation").innerHTML = "Ok!";
            document.getElementById("passwordvalidation").style.textAlignLast = "right";
            document.getElementById("passwordvalidation").style.color = "green";
            return passwordData = true;
        } else {
            document.getElementById("passwordvalidation").innerHTML = "More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase";
            document.getElementById("passwordvalidation").style.textAlignLast = "left";
            document.getElementById("passwordvalidation").style.color = "red";
            return passwordData = false;
        }
    }
};
passwordValidation.addEventListener("focus", passwordEmpy);
function passwordEmpy() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    if (passwordValidationInput == true);
    document.getElementById("passwordvalidation").innerHTML = "";
};

/* Getting data */
var dataList = document.getElementById("data");

function gettingData() {
    var eMailValidationInput = document.getElementById("mailinput").value;
    var passwordValidationInput = document.getElementById("passwordinput").value;
    console.log(mailData);
    console.log(passwordData);
    if (mailData && passwordData) {
        var dataConfirmation = new Array(eMailValidationInput, passwordValidationInput);
        document.getElementById("dataform").style.display = "flex";
        document.getElementById("data").innerHTML += 
            `<li> ${dataConfirmation[0]} </li>` +
            `<li> ${dataConfirmation[1]} </li>`;
        console.log(dataConfirmation);
        /*fetch(`https://jsonplaceholder.typicode.com/users?email=${dataConfirmation[0]}`)
        .then(response => console.log(response));*/
        fetch(`http://localhost:4000/login`, {
            method: "PUT",
            body: JSON.stringify({email: `${dataConfirmation[0]}`, password: `${dataConfirmation[1]}`}),
            headers: {"Content-Type": "application/json"}
        });
    } else {
        document.getElementById("data").style.display = "none";
    }
};

var butt = document.getElementsByClassName("button");
console.log(butt);
butt[0].addEventListener('click', gettingData);
