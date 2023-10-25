class FormsScreen {

    get textField() {
        return $('~text-input')
    }

    get inputTextresult() {
        return $('~input-text-result')
    }

    get clickSwitch() {
        return $('~switch')
    }

    get clickDropdown() {
        return $('id:android_touchable_wrapper')
    }

    get selectOption() {
        return $('android=Appium is awesome')
    }

    get clickButton() {
        return $('~button-Active')
    }
    async isVisibleField() {
        this.textField.waitForExist({ timeout: 2000 })
    }

    async fillInField(texto) {
        this.textField.setValue()
        expect(await this.textField).toBeDisplayed()
    }

    async clickTheSwitch() {
        this.clickSwitch.click()
    }

    async clickTheDropdown() {
        this.clickDropdown.click()

    }

    async clickTheButton() {
        this.clickButton.click()
    }

    async clickInOption() {
        this.selectOption.click()
        // const text = await selectOption.getText();
        // expect(text).to.equal('Appium is awesome')
    }


    // async getInputText(){
    //     return await this.inputTextresult.getText();
    // }
}

module.exports = new FormsScreen();