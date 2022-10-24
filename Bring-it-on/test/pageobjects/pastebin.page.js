const Page = require('./page');

class PastebinPage extends Page {

    get pasteInput () {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[3]/textarea')
    }
    get syntaxList () {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[3]/div/span/span[1]/span/span[1]')
    }
    get syntaxNeeded () {
        return $('/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]')
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
    get pasteNameCheck () {
        return $('body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.details > div.info-bar > div.info-top > h1')
    }
    get pasteTextCheck () {
        return $('/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol')
    }
    get syntaxCheck () {
        return $('/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]')
    }

    async paste () {
        await this.pasteInput.click();
        const paste = 
        `git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force`
        await this.pasteInput.setValue(paste);
        await this.syntaxList.click();
        await this.syntaxNeeded.click();
        await this.pasteExpirationList.click();
        await this.pasteExpirationNeeded.click();
        await this.pasteNameInput.click();
        const pasteName = 'how to gain dominance among developers'
        await this.pasteNameInput.setValue('how to gain dominance among developers');
        await this.createPasteButton.click();
        await console.log('12345', await this.pasteNameCheck.getHTML(true));
        await expect(this.pasteNameCheck).toHaveTextContaining(pasteName);
        await expect(this.pasteTextCheck).toHaveTextContaining(paste);
        await expect(this.syntaxCheck).toHaveTextContaining('Bash');

    }
    open () {
        return super.open('search');
    }

}


module.exports = new PastebinPage();
