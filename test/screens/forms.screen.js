class FormsScreen {
    get formsButton() {
        return $('~Forms');
    }
    
    async goToForms() {
        this.formsButton.click();
    }
}


export default new FormsScreen();