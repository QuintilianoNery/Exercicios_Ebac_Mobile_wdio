class HomeScreen {
    get formsButton() {
        return $('~Forms');
    }
    
    async goToForms() {
        this.formsButton.click();
    }
}

module.exports = new HomeScreen();