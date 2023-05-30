/// <reference types="cypress" />
import Login from "../support/page_objects/LoginPage";
import InicialPage from "../support/page_objects/InicialPage";
import Produto from "../support/page_objects/ProdutoPage";
import Carrinho from "../support/page_objects/CarrinhoPage";
import Checkout from "../support/page_objects/CheckoutPage";
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
        InicialPage.AbrirPaginaDeLogin();


        //logar no site e abrir a pagina de produtos
        Login.InformarUsuario('aluno_ebac@teste.com');
        Login.InformarSenha('teste@teste.com');
        Login.SubmeterFormularioLogin();
        Login.AbrirProdutoPage();

        // buscar produtos e adicionar ao carrinho
        //Produto 1
        Produto.BuscarProduto(prod[0]);
        Produto.SelecionarTamanhoProduto('M');
        Produto.SelecionarCorProduto('Blue');
        Produto.SelecionarQuantidadeProduto(2);
        Produto.ClicarComprar();

        //Produto 2
        Produto.AbrirPaginaInicialProduto();
        Produto.AbrirOutraPagina('13');
        Produto.BuscarProduto(prod[1]);
        Produto.SelecionarTamanhoProduto('M');
        Produto.SelecionarCorProduto('White');
        Produto.SelecionarQuantidadeProduto(3);
        Produto.ClicarComprar();

        //Produto 3
        Produto.AbrirPaginaInicialProduto();
        Produto.AbrirOutraPagina('14');
        Produto.BuscarProduto(prod[2]);
        Produto.SelecionarTamanhoProduto('M');
        Produto.SelecionarCorProduto('Yellow');
        Produto.SelecionarQuantidadeProduto(4);
        Produto.ClicarComprar();

        //abrir no carrinho
        Produto.AbrirCarrinho();

        // concluir compra
        Carrinho.ConcluirCompra();

        //verificar itens carrinho
        for (var i = 0; i < 3; i++) {
            cy.get('tr:contains('+prod[i]+')')
         }

         // escolher pagamento, aceitar termos e finalizar compra
        Checkout.TipoPagamentoNaEntrega();
        Checkout.AceitarTermosECondicoesDoSite();
        Checkout.FinalizarCompra();
        
        // validando compra registrada
        cy.get('.woocommerce-notice').should('contain',"Obrigado. Seu pedido foi recebido.")
         
       
    });


})