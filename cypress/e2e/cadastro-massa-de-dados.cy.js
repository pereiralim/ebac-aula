/// <reference types="Cypress"/>

import {faker} from '@faker-js/faker'; //Importando a biblioteca do faker para poder usar

describe("Fluxo de Login com Massa de dados", () => {

    const massa = Array.from({length: 5}) //Total de 5 cadastros

    //Gostei de usar a massa de dados desta forma - mais simples que usar o FIXTURE 
    //Ainda estou gravando a estrutura na cabeca - praticando mais massa.forEach()
    massa.forEach((_, index) => {
        it(`Cadastro ${index + 1} - Deve cadastrar um novo usuario`, () => {

            //Criando as const usando faker
            const email = faker.internet.email()
            const senha = faker.internet.password()
            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName()

            //Acessando o link
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type(senha)
            cy.get(':nth-child(4) > .button').click()

            //Validando a mensagem de cadastro criado
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')

            //Acessando aba de detalhamento 
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

            //Modificando o cadastro 
            cy.get('#account_first_name').type(firstName)
            cy.get('#account_last_name').type(lastName)
            cy.get('.woocommerce-Button').click()

            //Mensagem de Modificacao realizada com sucesso
            cy.get('.woocommerce-message').should('contain', 'modificados')

        })
    })
  
})