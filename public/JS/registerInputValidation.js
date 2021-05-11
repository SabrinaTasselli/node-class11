var userData = false; 
var mailData = false; 
var passwordData = false; 
var repeatPasswordData = false;
/* Full Name Input Validation*/
var fullNameValidation = document.getElementById("fullnameinput");
fullNameValidation.addEventListener("blur", fName);
function fName() {
    var fullNameValidationInput = document.getElementById("fullnameinput").value;
    if (fullNameValidationInput == "") {
        document.getElementById("fullnamevalidation").innerHTML = "Full name is missing";
        document.getElementById("fullnamevalidation").style.textAlignLast = "right";
        document.getElementById("fullnamevalidation").style.color = "red";
        return userData = false;
    } else {
        var fullNameIndexof = fullNameValidationInput.indexOf(" ");
        var firstName = fullNameValidationInput.substring(0, fullNameIndexof);
        var lastName = fullNameValidationInput.substring(fullNameIndexof + 1);
        if (firstName.length >= 3 && lastName.length >= 3) {
            document.getElementById("fullnamevalidation").innerHTML = "Ok!";
            document.getElementById("fullnamevalidation").style.textAlignLast = "right";
            document.getElementById("fullnamevalidation").style.color = "green";
            return userData = true;
        } else {
            document.getElementById("fullnamevalidation").innerHTML = "You must provide first and last name";
            document.getElementById("fullnamevalidation").style.textAlignLast = "right";
            document.getElementById("fullnamevalidation").style.color = "red";
            return userData = false;
        }
    }
};
fullNameValidation.addEventListener("focus", fNameEmpy);
function fNameEmpy() {
    var fullNameValidationInput = document.getElementById("fullnameinput").value;
    if (fullNameValidationInput == true);
    document.getElementById("fullnamevalidation").innerHTML = "";
};

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
var checkBoxButton = document.getElementById("passwordcheckbox");
checkBoxButton.onclick = function() {myfuntion()};
function myfuntion() {
    var x = document.getElementById("passwordinput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
};
passwordValidation.addEventListener("focus", passwordEmpy);
function passwordEmpy() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    if (passwordValidationInput == true);
    document.getElementById("passwordvalidation").innerHTML = "";
};
/* Repeat Password Input Validation*/
var repeatPasswordValidation = document.getElementById("repeatpasswordinput");
repeatPasswordValidation.addEventListener("blur", repeatPassword);
function repeatPassword() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    var repeatPasswordValidationInput = document.getElementById("repeatpasswordinput").value;
    if (repeatPasswordValidationInput == "") {
        document.getElementById("repeatpasswordvalidation").innerHTML = "Password is missing";
        document.getElementById("repeatpasswordvalidation").style.textAlignLast = "right";
        document.getElementById("repeatpasswordvalidation").style.color = "red";
        return repeatPasswordData = false;
    } else {
        if (passwordValidationInput == repeatPasswordValidationInput) {
            document.getElementById("repeatpasswordvalidation").innerHTML = "Ok!";
            document.getElementById("repeatpasswordvalidation").style.textAlignLast = "right";
            document.getElementById("repeatpasswordvalidation").style.color = "green";
            return repeatPasswordData = true;
        } else {
            document.getElementById("repeatpasswordvalidation").innerHTML = "You have to repeat the same password";
            document.getElementById("repeatpasswordvalidation").style.textAlignLast = "right";
            document.getElementById("repeatpasswordvalidation").style.color = "red";
            return repeatPasswordDate = false;
        }
    }
};
repeatPasswordValidation.addEventListener("focus", repeatPasswordEmpy);
function repeatPasswordEmpy() {
    var repeatPasswordValidationInput = document.getElementById("repeatpasswordinput").value;
    if (repeatPasswordValidationInput == true);
    document.getElementById("repeatpasswordvalidation").innerHTML = "";
};

/* Getting data */
var dataList = document.getElementById("data");

function gettingData() {
    var fullNameValidationInput = document.getElementById("fullnameinput").value;
    var eMailValidationInput = document.getElementById("mailinput").value;
    var passwordValidationInput = document.getElementById("passwordinput").value;
    var repeatPasswordValidationInput = document.getElementById("repeatpasswordinput").value;
    console.log(userData);
    console.log(mailData);
    console.log(passwordData);
    console.log(repeatPasswordData);
    if (userData && mailData && passwordData && repeatPasswordData) {
        var dataConfirmation = new Array(fullNameValidationInput, eMailValidationInput, passwordValidationInput, repeatPasswordValidationInput);
        document.getElementById("dataform").style.display = "flex";
        document.getElementById("data").innerHTML += 
            `<li> Full name: ${dataConfirmation[0]} </li>` +
            `<li> e-mail: ${dataConfirmation[1]} </li>` +
            `<li> Password: ${dataConfirmation[2]} </li>` +
            `<li> Confirm password: ${dataConfirmation[3]} </li>` ;
        console.log(dataConfirmation);
        /*fetch(`https://jsonplaceholder.typicode.com/users?email=${dataConfirmation[1]}`)
        .then(response => console.log(response));*/
        fetch(`http://localhost:4000/register`, {
            method: "POST",
            body: JSON.stringify({name: `${dataConfirmation[0]}`, email: `${dataConfirmation[1]}`, password: `${dataConfirmation[2]}`}),
            headers: {"Content-Type": "application/json"}
        });
    } else {
        document.getElementById("data").style.display = "none";
    }
};


var butt = document.getElementsByClassName("button");
console.log(butt);
butt[0].addEventListener('click', gettingData);

/* Reset data */
var reset = document.getElementById("reset");
reset.addEventListener("click", resetAll);
function resetAll() {
    if (userData && mailData && passwordData && repeatPasswordData) {
        document.getElementById("fullnamevalidation").innerHTML = "";
        document.getElementById("emailvalidation").innerHTML = "";
        document.getElementById("passwordvalidation").innerHTML = "";
        document.getElementById("repeatpasswordvalidation").innerHTML = "";
        document.getElementById("data").innerHTML = "";
    }
};
