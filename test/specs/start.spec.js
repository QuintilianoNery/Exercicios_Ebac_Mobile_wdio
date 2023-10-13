const homeScreen = require('../screens/home.screen');
const formsScreen = require('../screens/forms.screen');

describe('Primeiro teste', () => {
    it('Acessar o menu forms', async() => {
        await homeScreen.goToForms();
        await $('android=new UiSelector().text("Input field:")').waitForExist({timeout: 2000})
        await $('~text-input').setValue('teste')
        expect (await $('~text-input')).toBeDisplayed()
    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos