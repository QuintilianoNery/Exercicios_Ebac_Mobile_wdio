const HomeScreen = require('../screens/home.screen');
// const formsScreen = require('../screens/forms.screen');

describe('Primeiro teste', () => {
    var texto = 'Primeiro teste'
    it('Acessar o menu forms', async() => {
        await HomeScreen.goToForms();
        await $('android=new UiSelector().text("Input field:")').waitForExist({timeout: 2000})
        await $('~text-input').setValue(texto);
        expect (await $('~text-input')).toBeDisplayed()

    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos