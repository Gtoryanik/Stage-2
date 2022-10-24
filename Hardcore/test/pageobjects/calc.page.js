const Page = require('./page');

class CalcPage extends Page {
get numberOfInstances () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[1]/div[1]/md-input-container/input')
}

get machineSeriesList () {
    return $('//*[@id="select_value_label_85"]')
}
get n1MachineSeries () {
    return $('//md-option[@value="n1"]//div[@class="md-text ng-binding"]')
}

get machineTypeList () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[7]/div[1]/md-input-container/md-select/md-select-value')
}

get machineTypeNeeded () {
    return $('/html/body/div[4]/md-select-menu/md-content/md-optgroup[3]/md-option[4]/div')
}

get addGPUsButton () {
    return $('//md-checkbox[@aria-label="Add GPUs"]')
}

get GPUTypeList () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[1]/md-select')
}
get neededGPU () {
    return $('/html/body/div[5]/md-select-menu/md-content/md-option[4]/div')
}
get numberOfGPUlist () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[2]/md-select/md-select-value/span[1]')
}
get numberOfGPUNeeded () {
    return $('/html/body/div[6]/md-select-menu/md-content/md-option[2]')
}
get localSSDList () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[15]/div[1]/md-input-container/md-select/md-select-value')
}
get localSSDNeeded () {
    return $('/html/body/div[7]/md-select-menu/md-content/md-option[3]/div')
}
get locationList (){
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[16]/div[1]/md-input-container/md-select/md-select-value')
}
get locationNeeded () {
    return $('/html/body/div[8]/md-select-menu/md-content/md-optgroup/md-option[12]/div')
}
get commitedUsageList () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[19]/div[1]/md-input-container/md-select/md-select-value/span[1]')
}
get commitedUsageNeeded () {
    return $('/html/body/div[9]/md-select-menu/md-content/md-option[2]/div')
}
get addToEstimate () {
    return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[20]/button')
}

async calcPageInput() {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await this.numberOfInstances.waitForDisplayed();
    await this.numberOfInstances.click();
    await this.numberOfInstances.setValue(4);
    await this.machineSeriesList.click();
    await this.n1MachineSeries.waitForDisplayed();
    await this.n1MachineSeries.click();
    await this.machineTypeList.click();
    await this.machineTypeNeeded.click();
    await this.addGPUsButton.click();
    await this.GPUTypeList.click();
    await this.neededGPU.click();
    await this.numberOfGPUlist.click();
    await this.numberOfGPUNeeded.click();
    await this.localSSDList.click();
    await this.localSSDNeeded.click();
    await this.locationList.click();
    await this.locationNeeded.click();
    await this.commitedUsageList.click();
    await this.commitedUsageNeeded.click();
    await this.addToEstimate.click();
}
}

module.exports = new CalcPage();
