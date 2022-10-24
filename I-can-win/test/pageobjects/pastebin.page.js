const Page = require('./page');

class PastebinPage extends Page {

    get pasteInput () {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[3]/textarea')
    }
    get pasteNameInput () {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[9]/div/input')
    }
    get pasteExpirationList () {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[4]/div/span/span[1]/span/span[1]')
    }
    get pasteExpirationNeeded () {
        return $('/html/body/span[2]/span/span[2]/ul/li[3]')
    }
    get createPasteButton () {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[10]/button')
    }

    async paste () {
        await this.pasteInput.click();
        await this.pasteInput.setValue('Hello from WebDriver');
        await this.pasteNameInput.click();
        await this.pasteNameInput.setValue('helloweb');
        await this.pasteExpirationList.click();
        await this.pasteExpirationNeeded.click();
        await this.createPasteButton.click();
        await browser.pause(2000);

    }
    open () {
        return super.open('search');
    }

}


module.exports = new PastebinPage();
