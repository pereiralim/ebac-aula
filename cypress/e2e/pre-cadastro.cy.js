///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe("Funcionalidade de Pre-cadastro", () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    })

    afterEach(() => {
        cy.screenshot()
    })

    context('Criando um novo cadastro de usuario', () => {

        it('Deve completar o pre-cadastro com sucesso', () => {
            //icone de Login
            cy.get('.icon-user-unfollow').click()

            //Preencher o pre-registro email + senha
            cy.get('#reg_email').type(faker.internet.email())
            cy.get('#reg_password').type(faker.internet.password())
            cy.get(':nth-child(4) > .button').click() //button de acao

            //Clicar em detalhes da conta - completar o cadastro
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(faker.person.firstName())
            cy.get('#account_last_name').type(faker.person.lastName())
            cy.get('#main > div > div > form > p:nth-child(8) > button').click() //button de acao

            //Mensagem de confirmacao da criacao + modificacao da conta com sucesso
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        })
    })
})