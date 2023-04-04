describe('Автотест на оформление заказа', function () {
    it('Оформление заказа', function () {
cy.visit('https://huntingpony.com/');
cy.get('#splide02-slide02 > .product-preview > .product-preview__content > .product-preview__area-title > .product-preview__title > a').type('{enter}');
cy.get('.add-cart-counter__btn').click();
cy.get('[data-add-cart-counter-plus=""]').click();
cy.get('.header__cart > .icon').click();
cy.get('.cart-controls > .button').click();
cy.get('#client_surname').type('Петров');
cy.get('#client_contact_name').type('Петр');
cy.get('#client_phone').type('88008888888');
cy.get('#client_email').type('test@mail.ru');
cy.get('#shipping_address_street').type('Тестовая');
cy.get('#shipping_address_house').type('1');
cy.get('.co-input--required > .co-input-select > .co-input-field');
cy.get('.co-input--required > .co-input-select > .co-input-field').select('Мальчик');
cy.get('#create_order').click();
})  
})