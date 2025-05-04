///<reference types="Cypress"/>
import {faker} from '@faker-js/faker';

beforeEach(() => {
    cy.visit('produtos')
})

describe('Fluxo de Produtos', () => {
    var quant_prod = faker.number.int({min: 1, max: 10})
    var quant_carrinho = quant_prod

    it('Deve selecionar um produto e adicionar no carrinho', () => {

        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quant_prod)
        cy.get('.single_add_to_cart_button').click()

        //Validando o carrinho com os produtos
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quant_carrinho)
        cy.get('#content > div.woocommerce-notices-wrapper').should('contain', quant_carrinho, '× “Abominable Hoodie” foram adicionados no seu carrinho.')
    })
})