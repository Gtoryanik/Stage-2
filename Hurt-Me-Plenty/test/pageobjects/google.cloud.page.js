const Page = require('./page');

class GoogleCloudPage extends Page {

    get searchBox () {
        return $('//div[@class="devsite-searchbox"]'); 
    }

    get searchInput () {
        return $('//input[@name="q"]');
    }

    get searchResults () {
        return $('//a[@class="gs-title"][1]');
    }

    async search () {
        await this.searchBox.waitForDisplayed();
        await this.searchBox.click();
        await this.searchInput.click();
        await this.searchInput.setValue('google cloud pricing calculator');
        await browser.keys("\uE007");
        await this.searchResults.waitForDisplayed();
        await this.searchResults.click();
    }
    open () {
        return super.open('search');
    }

}


module.exports = new GoogleCloudPage();
