const elemento = require('./elements').ELEMENTS


class ProdutoPage {

    BuscarProduto(nomeProduto) {
        cy.get(elemento.buscarProduto)
            .contains(nomeProduto)
            .click()
    }

    SelecionarTamanhoProduto(tamanho) {
        cy.get(elemento.btnTamanho)
            .contains(tamanho)
            .wait(500)
            .click( { force:true } )
    }

    SelecionarCorProduto(cor) {
        cy.get(elemento.btnCor)
            .contains(cor)
            .click( { force:true } )
    }

    SelecionarQuantidadeProduto(qtd) {
        cy.get(elemento.Quantidade)
            .clear()
            .type(qtd)
    }

    ClicarComprar() {
        cy.get(elemento.btnComprar)
            .click()
    }

    AbrirCarrinho() {
        cy.get(elemento.btnCarrinho)
            .click()
        cy.get(elemento.btnAbrirCarrinho)
            .click()
    }

    AbrirOutraPagina(numeroPagina) {
        cy.get(elemento.buscarOutraPagina)
            .contains(numeroPagina)
            .click()
    }

    AbrirPaginaInicialProduto() {
        cy.get(elemento.btnAbrirProdutoPage).click()
    }

}

export default new ProdutoPage()