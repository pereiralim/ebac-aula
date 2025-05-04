///<reference types="Cypress"/>

beforeEach(() => {
    cy.visit('minha-conta')
})

describe('Funcionalidade Arquivo de Dados', () => {

    it('Testando fixtures de usuario', () => {

        //Chama a pasta fixture para poder utilizar
        cy.fixture('usuarios').then((user) => {
            
            cy.get('#username').type(user.email)
            cy.get('#password').type(user.senha)
            cy.get('#rememberme').click()
            cy.get('.woocommerce-form > .button').click()

            //Mensagem do usuario logado com sucesso
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')

        })
    })
})