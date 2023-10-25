class FormsScreen {
    get textInputFieldForms (){
        return $('~text-input')
    }
    
    get textField() {
        return $('~text-input')
    }

    async isVisibleField(){
        this.textInputFieldForms.waitForExist({timeout: 2000})
    }

    async fillOutForm() {
        this.textField.setValue()
        expect (await this.textField).toBeDisplayed()
    }
}

module.exports = new FormsScreen();