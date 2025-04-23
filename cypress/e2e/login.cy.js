///<reference types="cypress"/>


describe("Funcionalidade de Login", () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    afterEach(() => {
        cy.screenshot()
    })

    context('Quando o usuario e valido', () => {

        it('Deve fazer login com sucesso', () => {

            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
            cy.get('a > .hidden-xs').should('contain', 'Welcome')
        })
    })

    context('Quando o usuario e invalido', () => {
        it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

            cy.get('#username').type('aluno_ebac@teste')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.woocommerce-error').should('contain', 'Erro:')
        })
    })
    
    context('Quando a senha do usuario e invalida', () => {
        it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {

            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
        })
    })
    
})