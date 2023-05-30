const elemento = require('./elements').ELEMENTS

class CheckoutPage{

    TipoPagamentoNaEntrega(){
        cy.get(elemento.tipoPagamento)
            .check(elemento.btnPagamentoEntrega)
    }

    FinalizarCompra(){
        cy.get(elemento.btnFinalizarCompra)
            .click()
    }

    AceitarTermosECondicoesDoSite(){
        cy.get(elemento.termoAceite)
            .check()
    }

}


export default new CheckoutPage()