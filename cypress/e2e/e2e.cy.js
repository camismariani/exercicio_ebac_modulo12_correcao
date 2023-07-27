/// <reference types="cypress" />
const prod = ['Abominable Hoodie','Taurus Elements Shell','Tiberius Gym Tank'];

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //abrir Página de Login
        cy.get('.icon-user-unfollow').click();

        //logar no site e abrir a pagina de produtos
        cy.login('aluno_ebac@teste.com','teste@teste.com');

        // buscar produtos e adicionar ao carrinho
        //Produto 1
        cy.adicionarProduto(prod[0],'M',2,'Blue');
        cy.abrirPaginaInicialProduto();
        cy.abrirOutraPagina('12');
        cy.adicionarProduto(prod[1],'M',3,'White');
        cy.abrirPaginaInicialProduto();
        cy.abrirOutraPagina('13');
        cy.adicionarProduto(prod[2],'M',4,'Yellow');
        cy.abrirCarrinho();

        
        // concluir compra
        cy.get('.checkout-button').click()

        //verificar itens carrinho
        for (var i = 0; i < 3; i++) {
            cy.get('tr:contains('+prod[i]+')')
         }

        // escolher pagamento, aceitar termos e finalizar compra
        cy.tipoPagamentoNaEntrega();
        cy.aceitarTermosECondicoesDoSite();
        cy.finalizarCompra();
        
        // validando compra registrada
        cy.get('.woocommerce-notice').should('contain',"Obrigado. Seu pedido foi recebido.")
         
       
    });


})