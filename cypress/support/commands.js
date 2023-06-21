
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
});

Cypress.Commands.add('adicionarProduto',(nomeProduto, tamanho, quantidade, cor) =>{
    cy.get('[class="product-block grid"]').contains(nomeProduto).click()
    cy.get(':nth-child(1) > .value > .variable-items-wrapper').contains(tamanho).wait(500).click( { force:true } )
    cy.get(':nth-child(2) > .value > .variable-items-wrapper').contains(cor).click( { force:true } )
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
});

Cypress.Commands.add('abrirPaginaInicialProduto',()=>{
    cy.get('#primary-menu > .menu-item-629 > a').click()
});

Cypress.Commands.add('abrirOutraPagina',(numeroPagina)=>{
    cy.get('[class=page-numbers]').contains(numeroPagina).click()
});

Cypress.Commands.add('abrirCarrinho',()=>{
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
});

Cypress.Commands.add('tipoPagamentoNaEntrega',()=>{
    cy.get('[type="radio"]').check('cod')
});

Cypress.Commands.add('finalizarCompra',()=>{
    cy.get('#place_order').click()
});

Cypress.Commands.add('aceitarTermosECondicoesDoSite',()=>{
    cy.get('#terms').check()
});