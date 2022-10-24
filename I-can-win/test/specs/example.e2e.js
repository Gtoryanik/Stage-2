const PastebinPage = require ('../pageobjects/pastebin.page');

describe('search test', () => {
    it('should search google calc, input values, send e-mail and check total cost', async () => {
        await PastebinPage.open();
        await PastebinPage.paste();
    });
});


