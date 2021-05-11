/* input validation*/
var form = document.getElementById("validform");
var itemsList = document.getElementById("items");
var inputFullName = document.getElementById("fullnameinput");
var inputMail = document.getElementById("mailinput");
var inputPassword = document.getElementById("passwordinput");
var inputRepeatPassword = document.getElementById("repeatpasswordinput");

function inputfullNameValidation () {
    if (inputFullName) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing full name input"));
        itemsList.appendChild(li);
    }
};

function inputMailValidation () {
    if (inputMail) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing e-mail input"));
        itemsList.appendChild(li);
    }
};

function inputPasswordValidation () {
    if (inputPassword) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing password input"));
        itemsList.appendChild(li);
    }
};

function inputRepeatPasswordValidation () {
    if (inputRepeatPassword) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing repeat password input"));
        itemsList.appendChild(li);
    }
};

function totalInputValidation() {
    if (inputFullName && inputMail && inputPassword && inputRepeatPassword) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All inputs are correct"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

/* Required input validation */
function inputfullNameRequired () {
    if (inputFullName.hasAttribute("required")) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing full name required attribute"));
        itemsList.appendChild(li);
    }
};

function inputMailRequired () {
    if (inputMail.hasAttribute("required")) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing e-mail required attribute"));
        itemsList.appendChild(li);
    }
};

function inputPasswordRequired () {
    if (inputPassword.hasAttribute("required")) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing password required attribute"));
        itemsList.appendChild(li);
    }
};

function inputRepeatPasswordRequired () {
    if (inputRepeatPassword.hasAttribute("required")) {
        return true;
    }
    else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing repeat password required attribute"));
        itemsList.appendChild(li);
    }
};

function totalInputRequiredValidation () {
    if (inputFullName.hasAttribute("required") && inputMail.hasAttribute("required") && inputPassword.hasAttribute("required") && inputRepeatPassword.hasAttribute("required")) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All inputs have required attribute"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

/* Labels validation */ 
var formFind = document.getElementsByClassName("form");
var fullNameLabel = document.getElementById("fullnamelabel");
var emailLabel = document.getElementById("maillabel"); 
var passwordLabel = document.getElementById("passwordlabel");
var repeatPasswordLabel = document.getElementById("repeatpasswordlabel")

function findForm() {
    if (!formFind) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Form is not found"));
        itemsList.appendChild(li);
    }
};

function fullNameL() {
    if (!fullNameLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Full Name Label not found"));
        itemsList.appendChild(li);
    }
};

function emailL() {
    if (!emailLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("email Label not found"));
        itemsList.appendChild(li);
    }
};

function passwordL() {
    if (!passwordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Password Label not found"));
        itemsList.appendChild(li);
    }
};

function repeatPasswordL() {
    if (!repeatPasswordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Repeat password Label not found"));
        itemsList.appendChild(li);
    }
};

function totalLabelValidation() {
    if (fullNameLabel && emailLabel && passwordLabel && repeatPasswordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All labels are correct"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

/* Submit, Reset and Login buttons validation */
var submitbutton = document.getElementById("submit");
var resetbutton = document.getElementById("reset");
var anchorButton = document.querySelector("a");
var anchorButtonRef = document.querySelector("a").getAttribute("href");

function submitB() {
    if (submitbutton.onclick) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Submit button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

resetbutton.onclick = function() {resetB()};

function resetB() {
    if (resetbutton.onclick) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Reset button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

anchorButton.onclick = function() {anchorB()};

function anchorB() {
    if (anchorButton.hasAttribute("href")) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Login button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
        return true;
    } else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Login button does not work"));
        li.style.color = "red";
        itemsList.appendChild(li);
    }
};

function anchorBRef() {
    if (anchorButtonRef === "./login.html") {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Login button has the correct contents"));
        li.style.color = "green";
        itemsList.appendChild(li);
        return true;
    } else{
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Login button has not the correct contents"));
        li.style.color = "red";
        itemsList.appendChild(li);
    }       	
};

/* Validation "for" and "input "id"  */
var forAllLabels = document.querySelectorAll("label");
var idAllInputs = document.querySelectorAll("input");
var validationForIqualId  = ["Full name for atribute corresponde to the id full name input", 
"e-mail for atribute corresponde to the id e-mail input",
"Password for atribute corresponde to the id password input",
"Repit password for atribute corresponde to the id repeat password input"];
var errorValidationForIqualId = ["Full name for atribute not corresponde to the id full name input", 
"e-mail for atribute not corresponde to the id e-mail input",
"Password for atribute not corresponde to the id password input",
"Repit password for atribute not corresponde to the id repeat password input"];

function fullNameInputIdMuch() {
    for (i=0; i<4;i++) {
        var label = forAllLabels[i].getAttribute("for");
        var input = idAllInputs[i].getAttribute("id");
            if (label == input) {
                var li = document.createElement("li"); 
                li.appendChild(document.createTextNode(validationForIqualId[i]));
                li.style.color = "green";
                itemsList.appendChild(li);
            } else{
                var li = document.createElement("li"); 
                li.appendChild(document.createTextNode(errorValidationForIqualId[i]));
                li.style.color = "red";
                itemsList.appendChild(li);
            }     
        }
    };
    
/* All validations */
submitbutton.onclick = function(e) { submitB();e.preventDefault();
    anchorB();
    anchorBRef();
    totalInputValidation();
    totalInputRequiredValidation();
    totalLabelValidation();
    inputfullNameRequired();
    inputMailRequired();
    inputPasswordRequired();
    inputRepeatPasswordRequired();
    fullNameL();
    emailL();
    passwordL();
    repeatPasswordL();
    fullNameInputIdMuch();
};
var reset = document.getElementById("reset");
reset.addEventListener("click", resetAll);
 function resetAll() {
     if (submitbutton) {
         document.getElementById("validform").innerHTML = "";
     }
 }