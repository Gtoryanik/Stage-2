const GoogleCloudPage = require ('../pageobjects/google.cloud.page');
const CalcPage = require ('../pageobjects/calc.page');
const EstimatePage = require ('../pageobjects/estimate.page');

describe('search test', () => {
    it('should search google calc, input values, send e-mail and check total cost', async () => {
        await GoogleCloudPage.open();
        await GoogleCloudPage.search();
        await CalcPage.calcPageInput(); 
        await EstimatePage.sendEmail();
    });
});


