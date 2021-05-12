const LoginPage = require('../page.object/login.page');


describe("Validation of mucho de vos Login page", () => {
    beforeAll("open browser", () => {
        return browser.url("http://localhost:4000/login.html");
    });
    it("find e-mail label in DOM", () => {
        expect(LoginPage.maillabel).toExist();
    });

    it("find e-mail text in DOM", () => {
        expect(LoginPage.maillabel).toHaveText('e-mail');
    });

    it("find e-mail input box in DOM", () => {
        expect(LoginPage.mailinput).toExist();
    });

    it("introduce a valid e-mail", () => {
        LoginPage.mailinput.addValue("sabrinatasselli@gmail.com");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("Ok!");
    });

    it("find password label in DOM", () => {
        expect(LoginPage.passwordlabel).toExist();
    });

    it("find password text in DOM", () => {
        expect(LoginPage.passwordlabel).toHaveText('Password');
    });

    it("find password input box in DOM", () => {
        expect(LoginPage.passwordinput).toExist();
    });

    it("introduce a valid password and capture the values", () => {
        LoginPage.passwordinput.addValue("sabriT21");
        LoginPage.submitButton.click();
        expect(LoginPage.passwordvalidation).toHaveText("Ok!");
        expect(LoginPage.dataemail).toHaveText("sabrinatasselli@gmail.com");
        expect(LoginPage.datapassword).toHaveText("sabriT21");
        browser.pause(3000);
    });

    it("introduce an invalid e-mail without @", () => {
        LoginPage.mailinput.clearValue();
        LoginPage.mailinput.addValue("sabrinatasselli.gmail.com");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("The e-mail is not valid");
    });

    it("introduce an invalid e-mail without .com", () => {
        LoginPage.mailinput.clearValue();
        LoginPage.mailinput.addValue("sabrinatasselli@gmail");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("The e-mail is not valid");
    });

    it("leave the input empty", () => {
        LoginPage.mailinput.clearValue();
        LoginPage.mailinput.addValue("");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("e-mail is missing");
    });

    it("introduce an invalid password /less than 8 characters/", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("sabri21");
        LoginPage.submitButton.click();
        expect(LoginPage.passwordvalidation).toHaveText("More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase");
        browser.pause(3000);
    });

    it("introduce an invalid password without numbers", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("sabrinatass");
        LoginPage.submitButton.click();
        expect(LoginPage.passwordvalidation).toHaveText("More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase");
        browser.pause(3000);
    });

    it("introduce an invalid password at less one uppercase", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("sabrinatass");
        LoginPage.submitButton.click();
        expect(LoginPage.passwordvalidation).toHaveText("More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase");
        browser.pause(3000);
    });

    it("leave the input password empty", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("");
        LoginPage.submitButton.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("Password is missing");
    }); 

    it("find /registerbutton/ in DOM", () => {
        expect(LoginPage.anchorregister).toExist();
    });

    it("click on /registerbutton/ and go to register page", () => {
        LoginPage.anchorregister.click();
        expect(browser.url("http://localhost:4000/register.html"));
        browser.pause(3000);
    });
});

    describe("Validation of mucho de vos Register page", () => {
        
    it("find full name label in DOM", () => {
        expect(LoginPage.fullnamelabel).toExist();
    });

    it("find full name text in DOM", () => {
        expect(LoginPage.fullnamelabel).toHaveText('Full Name');
    });

    it("find full name input box in DOM", () => {
        expect(LoginPage.fullnameinput).toExist();
    });

    it("introduce a valid full name", () => {
        LoginPage.fullnameinput.addValue("Sabrina Tasselli");
        LoginPage.mailinput.click();
        browser.pause(2000);
        expect(LoginPage.fullnamevalidation).toHaveText("Ok!");
    });

    it("find email label in DOM", () => {
        expect(LoginPage.maillabel).toExist();
    });

    it("find e-mail text in DOM", () => {
        expect(LoginPage.maillabel).toHaveText('e-mail');
    });

    it("find email input box in DOM", () => {
        expect(LoginPage.mailinput).toExist();
    });

    it("introduce a valid email", () => {
        LoginPage.mailinput.addValue("sabrinatasselli@gmail.com");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("Ok!");
    });

    it("find password label in DOM", () => {
        expect(LoginPage.passwordlabel).toExist();
    });

    it("find password text in DOM", () => {
        expect(LoginPage.passwordlabel).toHaveText('Password');
    });

    it("find password input box in DOM", () => {
        expect(LoginPage.passwordinput).toExist();
    });

    it("introduce a valid password", () => {
        LoginPage.passwordinput.addValue("SabrinaTasselli21");
        LoginPage.repeatpasswordinput.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("Ok!");
    });

    it("find show password label in DOM", () => {
        expect(LoginPage.showpasswordlabel).toExist();
    });

    it("find show password text in DOM", () => {
        expect(LoginPage.showpasswordlabel).toHaveText('Show password');
    });

    it("find show password input box in DOM", () => {
        expect(LoginPage.showpasswordinput).toExist();
    });

    it("click at the checkbox", () => {
        LoginPage.showpasswordinput.click();
        expect(LoginPage.passwordinput.getValue()).toBe("SabrinaTasselli21");
    });

    it("find repeatpassword label in DOM", () => {
        expect(LoginPage.repeatpasswordlabel).toExist();
    });

    it("find repeat password text in DOM", () => {
        expect(LoginPage.repeatpasswordlabel).toHaveText('Repeat Password');
    });

    it("find repeat password input box in DOM", () => {
        expect(LoginPage.repeatpasswordinput).toExist();
    });

    it("introduce a valid repeat password, capture the data and display it", () => {
        LoginPage.repeatpasswordinput.addValue("SabrinaTasselli21");
        LoginPage.submitButton.click();
        browser.pause(2000);
        expect(LoginPage.repeatpasswordvalidation).toHaveText("Ok!");
        expect(LoginPage.datafullname).toHaveText("Full name: Sabrina Tasselli");
        expect(LoginPage.datamail).toHaveText("e-mail: sabrinatasselli@gmail.com");
        expect(LoginPage.datapass).toHaveText("Password: SabrinaTasselli21");
        expect(LoginPage.datarepeat).toHaveText("Confirm password: SabrinaTasselli21");
        browser.pause(3000);
    });

     it("reset button function", () => {
        LoginPage.reset.click();
        expect(LoginPage.fullnameinput.getValue()).toBe("");
        expect(LoginPage.mailinput.getValue()).toBe("");
        expect(LoginPage.passwordinput.getValue()).toBe("");
        expect(LoginPage.repeatpasswordinput.getValue()).toBe("");
    });

    it("introduce an invalid full name", () => {
        LoginPage.fullnameinput.clearValue();
        LoginPage.fullnameinput.addValue("sabrina");
        LoginPage.mailinput.click();
        browser.pause(2000);
        expect(LoginPage.fullnamevalidation).toHaveText("You must provide first and last name");
    });

    it("leave empty full name", () => {
        LoginPage.fullnameinput.clearValue();
        LoginPage.mailinput.click();
        browser.pause(2000);
        expect(LoginPage.fullnamevalidation).toHaveText("Full name is missing");
    });

    it("introduce an invalid e-mail", () => {
        LoginPage.mailinput.clearValue();
        LoginPage.mailinput.addValue("sabrina.com");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("The e-mail is not valid");
    });

    it("introduce an invalid e-mail 2", () => {
        LoginPage.mailinput.clearValue();
        LoginPage.mailinput.addValue("sabrina@com");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("The e-mail is not valid");
    });

    it("leave empty e-mail", () => {
        LoginPage.mailinput.clearValue();
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("e-mail is missing");
    });

    it("introduce an invalid password, less than 8 characters", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("sabriT2");
        LoginPage.repeatpasswordinput.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase");
    });

    it("introduce an invalid password, without numbers", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("sabriTasselli");
        LoginPage.repeatpasswordinput.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase");
    });

    it("introduce an invalid password, without uppercase", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.passwordinput.addValue("sabritasselli21");
        LoginPage.repeatpasswordinput.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase");
    });

    it("leave empty password", () => {
        LoginPage.passwordinput.clearValue();
        LoginPage.repeatpasswordinput.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("Password is missing");
    });

    it("invalid repeat password", () => {
        LoginPage.repeatpasswordinput.clearValue();
        LoginPage.repeatpasswordinput.addValue("sabinatasselli21");
        LoginPage.submitButton.click();
        browser.pause(2000);
        expect(LoginPage.repeatpasswordvalidation).toHaveText("You have to repeat the same password");
    });

    it("leave empty repeat password", () => {
        LoginPage.repeatpasswordinput.clearValue();
        LoginPage.submitButton.click();
        browser.pause(2000);
        expect(LoginPage.repeatpasswordvalidation).toHaveText("Password is missing");
    });

    it("click on /loginbutton/ and go to login page", () => {
        LoginPage.anchorlogin.click();
        expect(browser.url("http://localhost:4000/login.html"));
        browser.pause(3000);
    });
});



