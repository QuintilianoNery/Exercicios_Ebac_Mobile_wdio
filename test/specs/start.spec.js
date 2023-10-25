const HomeScreen = require('../screens/home.screen');
const FormsScreen = require('../screens/forms.screen');
let texto = 'Primeiro teste'
describe('Primeiro teste', () => {
    it('Acessar o forms', async() => {
        await HomeScreen.goToForms();
        await FormsScreen.isVisibleField();
        await FormsScreen.fillInField(texto);
        // expect (await FormsScreen.getInputText()).toEqual(texto);
        await FormsScreen.clickTheSwitch();
        await FormsScreen.clickTheDropdown();
        await FormsScreen.clickInOption();
        await FormsScreen.clickTheButton();

    });
    it('Acessar o Forms sem page Objects', async() => {
        await $('~Forms').click()
        const text_input = await $('//android.widget.EditText[@content-desc="text-input"]')
        await text_input.waitForExist({ timeout: 2000 });
        await text_input.setValue(texto);
        await $('~switch').click();
        await $('id:android_touchable_wrapper').click();
        await $('android=Appium is awesome').click();
        await $('~button-Active').click();
        
    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos