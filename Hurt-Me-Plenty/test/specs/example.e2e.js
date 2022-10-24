const GoogleCloudPage = require ('../pageobjects/google.cloud.page');
const CalcPage = require ('../pageobjects/calc.page');

describe('search test', () => {
    it('should search google calc, input values and check', async () => {
        await GoogleCloudPage.open();
        await GoogleCloudPage.search();
        await CalcPage.calcPageInput(); 
    });
});


