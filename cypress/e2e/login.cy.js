describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
cy.visit('https://login.qa.studio/');
cy.get('#mail').type('german@dolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.contains('Авторизация прошла успешно');
cy.get('#exitMessageButton > .exitIcon');
})  
    it('Забыли пароль', function () {
cy.visit('https://login.qa.studio/');
cy.get('#forgotEmailButton').click();
cy.get('#mailForgot').type('test@mail.ru');
cy.get('#restoreEmailButton').click();
cy.contains('Успешно отправили пароль на e-mail');
cy.get('#exitMessageButton > .exitIcon');
})
it('Верный логин, Неверный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio3')
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
    })  
it('Неверный логин, верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germa@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
    })  
it('Неверный логин без @, верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton');
})
it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешнои');
    cy.get('#exitMessageButton');
})
})