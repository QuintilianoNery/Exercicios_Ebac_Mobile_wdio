class FormsScreen {
    get textInputFieldForms (){
        return $('android=new UiSelector().text("Input field:")')
    }
    
    get textField() {
        return $('~text-input')
    }
    
    // --
    async isVisibleField(){
        this.textInputFieldForms.waitForExist({timeout: 2000})
    }

    async fillOutForm() {
        this.textField.setValue('Teste')
        expect (await this.textField).toBeDisplayed()
    }
}

module.exports = new FormsScreen();