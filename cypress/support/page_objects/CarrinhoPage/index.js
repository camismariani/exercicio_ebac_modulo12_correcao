const elemento = require('./elements').ELEMENTS


class CarrinhoPage{

    ConcluirCompra(){
        cy.get(elemento.btnFinalizarCompra)
            .click()
    }

}


export default new CarrinhoPage()