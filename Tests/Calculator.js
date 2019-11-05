
let Homepage = require('../pages/Homepage');

describe('Demo Calculator Tests', function () {
    it('addition test', function () {


        // browser.get('http://juliemr.github.io/protractor-demo/');
        Homepage.get('http://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('3');      
        Homepage.enterFirstNumber('3');

        //element(by.model('second')).sendKeys('13');  
        Homepage.enterSecondNumber('13');

        //element(by.css('[ng-click="doAddition()"]')).click();
        Homepage.clickGo();

        //let result=element(by.cssContainingText('.ng-binding','16'));
        //expect(result.getText()).toEqual('16');
        Homepage.VerifyResult('16');
        browser.sleep(3000);    




    });

    it('Subtraction test', function () {


        // browser.get('http://juliemr.github.io/protractor-demo/');
        Homepage.get('http://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('3');      
        Homepage.enterFirstNumber('3');

        //element(by.model('second')).sendKeys('13');  
        Homepage.enterSecondNumber('13');

        //element(by.css('[ng-click="doAddition()"]')).click();
        Homepage.clickGo1();

        //let result=element(by.cssContainingText('.ng-binding','16'));
        //expect(result.getText()).toEqual('16');
        Homepage.VerifyResult('16');
        browser.sleep(3000);    




    });

});
