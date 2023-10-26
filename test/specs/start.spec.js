const HomeScreen = require('../screens/home.screen');
const FormsScreen = require('../screens/forms.screen');
let texto = 'Primeiro teste'
describe('App WebDriverIO', () => {
    //
    it('Acessar o forms', async() => {
        await HomeScreen.goToForms();
        await FormsScreen.fillInField(texto);
        await FormsScreen.isVisibleField();
        await FormsScreen.getInputText(texto);
        await FormsScreen.clickTheSwitch();
        await FormsScreen.clickTheDropdown();
        await FormsScreen.clickInOption();
        await FormsScreen.clickTheButton();

    });
    it.only('Acessar o Forms sem page Objects', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue(texto);
        expect (await $('~text-input')).toBeDisplayed();
        await $('//android.widget.Switch[@content-desc="switch"]').click();
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]').click();
        await $('android=new UiSelector().textContains("Appium is awesome")').click();
        await $('android=new UiSelector().textContains("Active")').click();
        await $('id:android:id/button1').click();
        
        
    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos