const PastebinPage = require ('../pageobjects/pastebin.page');

describe('input paste', () => {
    it('should input paste, paste name etc and check the result', async () => {
        await PastebinPage.open();
        await PastebinPage.paste();
    });
});


