const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get maillabel () { return $('#maillabel') }
    get mailinput () { return $("#mailinput") }
    get emailvalidation () { return $("#emailvalidation") }
    get passwordlabel () { return $("#passwordlabel")}
    get passwordinput () { return $("#passwordinput") }
    get passwordvalidation () { return $("#passwordvalidation") }
    get submitButton () { return $("#submit") }
    get dataemail () { return $("#data > li:nth-child(1)") }
    get datapassword () { return $("#data > li:nth-child(2)") }
    get anchorregister () { return $("body > div > form > div > a") }
    get fullnamelabel () { return $("#fullnamelabel") }
    get repeatpasswordlabel () { return $("#repeatpasswordlabel") }
    get showpasswordlabel () { return $(".checkboxstyle") }
    get fullnameinput () { return $("#fullnameinput") }
    get repeatpasswordinput () { return $("#repeatpasswordinput") }
    get showpasswordinput () { return $("#passwordcheckbox") }
    get fullnamevalidation () { return $("#fullnamevalidation")}
    get repeatpasswordvalidation () { return $("#repeatpasswordvalidation")}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
/*     async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
    
    open () {
        return super.open('login');
    }**/
}

module.exports = new LoginPage();
