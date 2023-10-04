describe('Primeiro teste', () => {
    it('Acessar o menu forms', async() => {
        await $('~Forms').click()	
        await $('android=new UiSelector().text("Input field:")').waitForExist({timeout: 2000})
        await $('~text-input').setValue('teste')
        expect (await $('~text-input')).toBeDisplayed()
    });
});