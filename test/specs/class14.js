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

    it("find email label in DOM", () => {
        expect(LoginPage.maillabel).toExist();
    });

    it("find password label in DOM", () => {
        expect(LoginPage.passwordlabel).toExist();
    });

    it("find show password label in DOM", () => {
        expect(LoginPage.showpasswordlabel).toExist();
    });

    it("find repeatpassword label in DOM", () => {
        expect(LoginPage.repeatpasswordlable).toExist();
    });

    it("find full name text in DOM", () => {
        expect(LoginPage.fullnamelabel).toHaveText('Full Name');
    });

    it("find e-mail text in DOM", () => {
        expect(LoginPage.maillabel).toHaveText('e-mail');
    });

    it("find password text in DOM", () => {
        expect(LoginPage.passwordlabel).toHaveText('Password');
    });

    it("find show password text in DOM", () => {
        expect(LoginPage.showpasswordlabel).toHaveText('Show Password');
    });

    it("find repeat password text in DOM", () => {
        expect(LoginPage.repeatpasswordlable).toHaveText('Repeat Password');
    });

    it("find full name input box in DOM", () => {
        expect(LoginPage.fullnameinput).toExist();
    });

    it("find email input box in DOM", () => {
        expect(LoginPage.mailinput).toExist();
    });

    it("find password input box in DOM", () => {
        expect(LoginPage.passwordinput).toExist();
    });

    it("find show password input box in DOM", () => {
        expect(LoginPage.showpasswordinput).toExist();
    });

    it("find repeat password input box in DOM", () => {
        expect(LoginPage.repeatpasswordinput).toExist();
    });

    it("introduce a valid full name", () => {
        LoginPage.fullnameinput.addValue("Sabrina Tasselli");
        LoginPage.mailinput.click();
        browser.pause(2000);
        expect(LoginPage.fullnamevalidation).toHaveText("Ok!");
    });

    it("introduce a valid email", () => {
        LoginPage.mail.addValue("sabrinatasselli@gmail.com");
        LoginPage.passwordinput.click();
        browser.pause(2000);
        expect(LoginPage.emailvalidation).toHaveText("Ok!");
    });

    it("introduce a valid password", () => {
        LoginPage.passwordinput.addValue("SabrinaTasselli21");
        LoginPage.repeatpasswordinput.click();
        browser.pause(2000);
        expect(LoginPage.passwordvalidation).toHaveText("Ok!");
    });

    it("introduce a valid repeat password", () => {
        LoginPage.repeatpasswordinput.addValue("SabrinaTasselli21");
        LoginPage.submitButton.click();
        browser.pause(2000);
        expect(LoginPage.repeatpasswordinput).toHaveText("Ok!");
    });

    

});

    


    /*it("entering wikipedia in the browser", () =>{
        let input = $("form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
        input.addValue("wikipedia");
        
        browser.keys("Enter");
        browser.pause(2000);
    });
    it("entering to Wikipedia page ", () =>{
        let wikiPage = $("#rso > div:nth-child(1) > div > div > div > div > div.yuRUbf > a");
        expect(wikiPage).toExist();
        wikiPage.click();
        browser.pause(2000);
    });
    it("validating wikipedia URL in DOM", () =>{
        expect(browser.getUrl()).toMatch("https://es.wikipedia.org/wiki/Wikipedia:Portada");
    });*/



