class FormsScreen {

    get textField() {
        return $('~text-input')
    }

    get inputTextresult() {
        return $('//android.widget.TextView[@content-desc="input-text-result"]')
    }

    get clickSwitch() {
        return $('//android.widget.Switch[@content-desc="switch"]')
    }

    get clickDropdown() {
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]')
    }

    get selectOption() {
        return $('android=new UiSelector().textContains("Appium is awesome")')
    }

    get clickButton() {
        return $('android=new UiSelector().textContains("Active")')
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
        const text = await selectOption.getText();
        expect(text).to.equal('Appium is awesome')
    }


    async getInputText() {
        this.inputTextresult.getText().toEqual(texto)
        expect(await this.inputTextresult.toEqual(texto))
    }
}

module.exports = new FormsScreen();