const HomeScreen = require('../screens/home.screen');
const FormsScreen = require('../screens/forms.screen');

describe('Primeiro teste', () => {
    let texto = 'Primeiro teste'
    it('Acessar o menu forms', async() => {
        await HomeScreen.goToForms();
        await FormsScreen.isVisibleField();
        await FormsScreen.fillOutForm(texto);
    });
});

//Teste Acesse a aplicação, vá em forms e preencha todos os campos