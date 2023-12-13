describe('service is available', function () {
    beforeEach(function () {
        cy.viewport(1920, 1024)
        cy.visit('/')
    });

    it('should be available localhost:3000', function () {
        cy.visit('/')
        cy.contains('Соберите бургер')
    });

    it('should open ingredient details', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').first().click()
        cy.contains('Детали ингредиента')
    });

    it('should close ingredient details by button', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').first().click()
        cy.get('[class^=modal_closeButton]').click();
    });

    it('should tab', function () {
        cy.get('[class^=tab').last().click();
        cy.wait(1000).get('[class^=tab').first().click();
    })

    it('should dragndrop ingredients and set bun', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(0).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(3).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(7).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
    })

    it('should delete ingredient from constructor', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(0).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(3).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(7).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=constructor-element__action]').eq(1).click()
        cy.get('[class=constructor-element]').eq(2).and('not.exist')
    })

    it('should visible order button', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(0).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(3).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(7).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('button').contains('Оформить заказ').click()
    });

    it('should authorization', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(0).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(3).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(7).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('button').contains('Оформить заказ').click()
        const email = 'bybacha@mail.ru';
        const password = '123321';
        cy.get('input').first().type(email)
        cy.get('input').last().type(password)
        cy.get('button').click();
    })

    it('should open order number', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(0).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(3).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(7).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('button').contains('Оформить заказ').click()
        const email = 'bybacha@mail.ru';
        const password = '123321';
        cy.get('input').first().type(email)
        cy.get('input').last().type(password)
        cy.get('button').click();
        cy.wait(1000).get('button').contains('Оформить заказ').click()
    });

    it('should order number visible and close ', function () {
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(0).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(3).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('[class^=burger-ingredients-item_mainDiv]').eq(7).trigger('dragstart')
        cy.get('[class^=burger-constructor_constructorDiv]').first().trigger('drop')
        cy.get('button').contains('Оформить заказ').click()
        const email = 'bybacha@mail.ru';
        const password = '123321';
        cy.get('input').first().type(email)
        cy.get('input').last().type(password)
        cy.get('button').click();
        cy.wait(1000).get('button').contains('Оформить заказ').click()
        cy.wait(30000).get('[class=text_type_digits-large]').and('exist')
        cy.get('[class^=modal_closeButton]').click();
        cy.get('[class^=burger-constructor-element_constructor_element]').and('not.exist');
    });
})
