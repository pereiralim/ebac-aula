///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})

afterEach(() => {
    cy.screenshot()
})

describe('Fluxo de pre-cadastro', () => {

    it('Deve realizar o pre-cadastro com sucesso', () => {
        //Pre-cadastro
        var email_usu = faker.internet.email()
        var password_usu = faker.internet.password()

        //Completar o pre-cadastro
        var firtName = faker.person.firstName()
        var lastName = faker.person.lastName()

        //Senha nova
        var newPassword_usu = faker.internet.password()
        
        //pre-cadastro
        cy.get('#reg_email').type(email_usu)
        cy.get('#reg_password').type(password_usu)
        cy.get(':nth-child(4) > .button').click()

        //Mensagem de cadastro realizado com sucesso
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')


        //Completar o pre-cadastro com sucesso
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('.form-row-first > label').type(firtName)
        cy.get('#account_last_name').type(lastName)

        //Trocar a senha atual por uma nova senha
        cy.get('#password_current').type(password_usu)

        //Nova senha
        cy.get('#password_1').type(newPassword_usu)
        cy.get('#password_2').type(newPassword_usu)

        cy.get('.woocommerce-Button').click()

        //Validando a mensagem de modificacao realizada com sucesso
        cy.get('.woocommerce-message').should('contain', 'modificados com sucesso')
    })
})