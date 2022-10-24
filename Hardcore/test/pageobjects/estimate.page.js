const Page = require('./page');

class EstimatePage extends Page {
    get EmailButton () {
        return $('/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/div[2]/button[1]')
    }
    get inputEmail () {
        return $('//input[@type="email"]')   
    }
    get createRandomMail () {
        return $('/html/body/div/div[2]/main/div[3]/div/div[2]/div/a[1]/div[2]/b')
    }
    get email () {
        return $('/html/body/div/div[2]/main/div/div[2]/div/div/div[1]')
    }
    get sendEmailButton () {
        return $('//button[@aria-label="Send Email"]')
    }
    get checkEmail () {
        return $('/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/button[2]/span')
    }
    get finalEmail () {
        return $('/html/body/main/div/div/div/div/table/tbody/tr[2]/td/h2')
    }

    async sendEmail () {
        await browser.newWindow('https://yopmail.com/ru/', {
        windowName: 'yopmail window',
        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    })
    await this.createRandomMail.click();
    const emailName = await this.email.getText();
    
    await browser.switchWindow('cloud.google.com');
    
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    
    await this.EmailButton.click();
    await this.inputEmail.click();
    await browser.keys(emailName);
    await this.sendEmailButton.click();
    await browser.switchWindow('yopmail.com');
    await browser.pause(10000);
    await this.checkEmail.click();
    }

    open () {
        return super.open('sendEmail');
 }}

module.exports = new EstimatePage ();